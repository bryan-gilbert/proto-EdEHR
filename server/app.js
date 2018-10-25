const axios = require('axios')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var createError = require('http-errors')
var CustomStrategy = require('passport-custom')
var debug = require('debug')('server')
var express = require('express')
var logger = require('morgan')
var path = require('path')
var passport = require('passport')
var sassMiddleware = require('node-sass-middleware')
var session = require('express-session')
var uuid = require('uuid/v4')
var lti = require('ims-lti')

var FileStore = require('session-file-store')(session)

// var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users')

process.env.SESSION_DIR = (process.env.SESSION_DIR) ? process.env.SESSION_DIR : path.join(process.cwd(), '..', 'sessions')
process.env.COOKIE_SECRET = (process.env.COOKIE_SECRET) ? process.env.COOKIE_SECRET : 'this is the secret for the session cookie'
process.env.LTI_SECRET = (process.env.LTI_SECRET) ? process.env.LTI_SECRET : 'edehrsecret'
process.env.LTI_KEY = (process.env.LTI_KEY) ? process.env.LTI_KEY : 'edehrkey'
debug(`app with lti key ${process.env.LTI_KEY} and ${process.env.LTI_SECRET}`)

var sids = []
var sesids = []

function logSessesion (req, msg) {
  var session = req.session
  var cookies = req.cookies
  var sid = cookies['connect.sid']
  sesids.push(req.sessionID)
  sids.push(sid)
  if (session.visits) {
    session.visits++
  } else {
    session.visits = 1
  }
  // msg += session.isChanged ? ' is changed' : ' unchanged'
  // msg += session.isPopulated ? ' is populated' : ' unpoped'
  // msg += session.isNew ? ' is new' : ' old'
  var ss = JSON.stringify(session)
  debug('Req session ' + msg + ' : ' + ss)
  debug(sids)
}

function launchEndPoint (req, res, next) {
  var session = req.session
  var cookies = req.cookies
  var user = req.user
  // req.session.user = req.user
  // req.session.ltiToken = ltiToken
  session.views = (session.views || 0) + 1
  user.visits = (user.visits || 0) + 1
  user.vistsSession = session.views
  user.sid = cookies['connect.sid']
  user.ss = JSON.stringify(session)
  user.isAuthd = req.isAuthenticated() ? 'authenticated' : 'NOT'

  updateUser(user, function (err, updatedUser) {
    if (err) {
      return next(err)
    }
    var content = JSON.stringify(updatedUser)
    var returnUrl = updatedUser.launch_presentation_return_url
    res.render('lti', {
      lti_message: content,
      return_url: returnUrl,
      return_onclick: 'location.href=' + '\'' + returnUrl + '\';'
    })
  })
}

function strategyVerify (req, callback) {
  // Do custom user finding logic here. If found valid user then send it back in the callbacl
  console.log('strategyVerify ltiStrategy ')
  try {
    if (req.user) {
      console.log('strategyVerify Have user ', req.user.id)
      callback(null, req.user)
    } else {
      console.log('strategyVerify validate request ')
      var provider = new lti.Provider(req.body, process.env.LTI_SECRET)
      provider.valid_request(req, function (err, isValid) {
        if (err) {
          console.log('strategyVerify LTI Error', err, isValid)
          return callback(err, null)
        }
        console.log('strategyVerify request is valid ')
        var body = req.body
        var id = body.user_id
        lookupUser(id, function (err, data) {
          if (err) {
            return callback(err, null)
          }
          if (!data) {
            return storeUser(req.body, callback)
          }
          callback(null, data)
        })
      })
    }
  } catch (err) {
    console.log('strategyVerify authentication error', err)
    callback(err, null)
  }
}

function lookupUser (userId, done) {
  console.log(`Inside lookup user and searching for ${userId}`)
  axios.get(`http://localhost:5678/users/${userId}`)
  .then(res => {
    console.log('lookup results ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('lookup error ', error)
    if (error && error.response.status === 404) {
      done(null, false)
    } else {
      done(error, null)
    }
  })
}

function updateUser (user, done) {
  console.log(`Inside update user for ${user.id}`)
  var url = `http://localhost:5678/users/${user.id}`
  axios.put(url, user)
  .then(res => {
    console.log('put results ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('put error ', error)
    done(error, null)
  })
}

function storeUser (user, done) {
  console.log(`Inside store user ${user}`)
  var url = `http://localhost:5678/users`
  user.id = user.id ? user.id : user.user_id
  axios.post(url, user)
  .then(res => {
    console.log('store results do we need to return the id? ', res.data)
    done(null, res.data)
  })
  .catch(error => {
    console.log('store error ', error)
    done(error)
  })
}

function extractUniqueUserId (user, done) {
  // what element of the user record do we want to store in the session?
  // e.g. req.session.passport.user = {id: '..'}
  console.log('Inside serializeUser callback. User id is save to the session file store here')
  var userId = user.id
  // A user ids is only unique to the tool consumer. So if we store just the user id we be
  // assuming there is only one tool consumer out in the wild.  We must prepend the key given to the
  // tool consumer to make the user id unique.
  // TODO create some namespace based on tool consumer key
  done(null, userId)
}

function ensureLoggedIn () {
  return function (req, res, next) {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
      res.status(403)
      .send({error: 'Not authorized'})
    }
    next()
  }
}
// Passport
passport.use('ltiStrategy', new CustomStrategy(strategyVerify))
passport.serializeUser(extractUniqueUserId)
passport.deserializeUser(lookupUser)

var app = express()
// view engine setup
app.set('visits', path.join(__dirname, 'visits'))
app.set('view engine', 'pug')
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log(req.sessionID)
    return uuid()
  },
  cookie: { sameSite: 'lax' },
  store: new FileStore(),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

// unauthenticate get on our lti url return OK
app.get('/launch_lti', function (req, res, next) {
  logSessesion(req, 'in get launch_lti')
  // Moodle has a bot that pings the launch url during external tool configuration.
  // To indicate we're here return OK.
  res.status(200).send('OK')
})

app.use(passport.initialize())
app.use(passport.session())
// app.use(passport.authenticate('ltiStrategy', {failureFlash: false}))

// Setup a POST endpoint to take anything going to /launch_lti
app.post('/launch_lti', passport.authenticate('ltiStrategy'), launchEndPoint)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let { url } = req
  var ce = createError(404, 'Could not find ' + url)
  if (url.includes('favicon')) {
    debug('Another request for the favicon')
  } else {
    console.log('not found error ', ce)
  }
  next(ce)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.error('error handler ', err)
  // render the error page
  res.status(err.status || 500)
  res.render('error', err)
})

module.exports = app

// Scrap
// app.use('/', indexRouter)
// app.use('/users', usersRouter)
// eslint-disable-next-line no-unused-vars
function oldMiddle (req, res, next) {
  logSessesion(req, 'post launch_lti')
  let body = req.body
  debug('in launch_lti  Compare: ', body['oauth_consumer_key'], ' to ', process.env.LTI_KEY, process.env.LTI_SECRET)
  // req.body = req.body.body
  // req.body = _.omit(req.body, '__proto__')
  if (req.body['oauth_consumer_key'] === process.env.LTI_KEY) {
    var provider = new lti.Provider(process.env.LTI_KEY, process.env.LTI_SECRET)
    // Check is the Oauth  is valid using our LTI plugin
    provider.valid_request(req, req.body, function (err, isValid) {
      if (err) {
        debug('Error in LTI Launch:' + err)
        res.status(403).send(err)
      } else {
        if (!isValid) {
          debug('\nError: Invalid LTI launch.')
          res.status(500).send({ error: 'Invalid LTI launch' })
        } else {
          // User is Auth so pass back when ever we need. in this case we use pug to render the values to screen

          var content = ''

          var keys = Object.keys(req.body).sort()
          for (var i = 0, length = keys.length; i < length; i++) {
            content += keys[i] + ' = ' + req.body[keys[i]] + '<br />'
          }
          content = JSON.stringify(req.body)
          var returnUrl = req.body.launch_presentation_return_url

          res.render('lti', {
            lti_message: content,
            return_url: returnUrl,
            return_onclick: 'location.href=' + '\'' + returnUrl + '\';'
          })

          // res.render('start', { title: 'LTI SETTINGS', CourseID: 'CourseID: ' + req.body['context_id'], userID: 'UserID: ' + req.body['user_id'], UserRole: 'Course Role: ' + req.body['roles'], FulllogTitle: 'Full Log: ', Fulllog: bodyText })
        }
      }
    })
  } else {
    debug('LTI KEY NOT MATCHED:')
    res.status(403).send({ error: 'LTI KEY NOT MATCHED ' + process.env.LTI_KEY + ' ' + req.body['oauth_consumer_key'] + ' ' + JSON.stringify(req.body) })
  }
}
