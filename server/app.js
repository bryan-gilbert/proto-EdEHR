const axios = require('axios')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')
// var createError = require('http-errors')
var CustomStrategy = require('passport-custom')
var debug = require('debug')('server')
var express = require('express')
var logger = require('morgan')
var path = require('path')
var passport = require('passport')
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
  // var ss = JSON.stringify(session)
  // var css = JSON.stringify(cookies)
  // ss += '  sid ' + sid + ' cookies: ' + css
  // debug('Req session ' + msg + ' : ' + ss)
  // debug(sids)
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
    updatedUser.cookies = req.cookies
    var content = JSON.stringify(updatedUser, null, 2)
    // TODO fix insert hack and make it work if this is first time
    let userData = {
      id: user.id,
      progressNotes: [
        { name: 'Amanda Healey',
          position: 'Nurse',
          unit: 'ER',
          day: '0',
          time: '07:00',
          notes: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntt.'
        }
      ]
    }
    updateUserData(userData, function (err, updatedUser) {
      if (err) {
        return next(err)
      }
      debug('Redirect to ehr ' + content)
      // var returnUrl = updatedUser.launch_presentation_return_url
      res.cookie('usr', content)
      res.redirect('http://localhost:28000?user=' + req.user.id)
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
        findCreate(id, body, callback)
      })
    }
  } catch (err) {
    console.log('strategyVerify authentication error', err)
    callback(err, null)
  }
}

function lookupUserData (userId, done) {
  console.log(`Inside getUserData ${userId}`)
  axios.get(`http://localhost:5678/userData/${userId}`)
  .then(res => {
    console.log('getUserData results ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('getUserData error ', error)
    if (error && error.response.status === 404) {
      done(null, false)
    } else {
      done(error, null)
    }
  })
}
function storeUserData (userData, done) {
  console.log('Inside storeUserData ', userData)
  var url = `http://localhost:5678/userData`
  axios.post(url, userData)
  .then(res => {
    console.log('post storeUserData ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('post storeUserData Error ', error)
    done(error, null)
  })
}
function updateUserData (userData, done) {
  console.log('Inside updateUserData ', userData)
  var url = `http://localhost:5678/userData/${userData.id}`
  axios.put(url, userData)
  .then(res => {
    console.log('put updateUserData ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('put updateUserData Error ', error)
    done(error, null)
  })
}
function upsertUserData (id, userData, done) {
  lookupUserData(id, function (err, data) {
    if (err) {
      return done(err, null)
    }
    if (!data) {
      return storeUserData(userData, done)
    }
    return updateUserData(userData, done)
  })
}

function lookupUser (userId, done) {
  console.log(`Inside lookup user and searching for ${userId}`)
  axios.get(`http://localhost:5678/users/${userId}`)
  .then(res => {
    console.log('lookupUser results ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('lookupUser error ', error)
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
    console.log('updateUser results ', res.data.id)
    done(null, res.data)
  })
  .catch(error => {
    console.log('updateUser error ', error)
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
function findCreate (id, userInfo, done) {
  lookupUser(id, function (err, data) {
    if (err) {
      return done(err, null)
    }
    if (!data) {
      return storeUser(userInfo, done)
    }
    done(null, data)
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

function ensureLoggedIn (req, res, next) {
  console.log('ensureLoggedIn()')
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    console.log('not authorized')
    res.status(403).send({error: 'Not authorized'})
  } else {
    console.log('Yes is authorized')
    next()
  }
}
// Passport
passport.use('ltiStrategy', new CustomStrategy(strategyVerify))
passport.serializeUser(extractUniqueUserId)
passport.deserializeUser(lookupUser)

var app = express()
// set to trust the X-Forwarded-* header to hold the client's IP in the left most entry
// app.set('trust proxy', true)
// use cors before your routes are set up:
app.use(cors())
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  genid: (req) => {
    console.log('Inside the session middleware')
    console.log('req.sessionID ', req.sessionID)
    return uuid()
  },
  cookie: { sameSite: 'lax' },
  store: new FileStore(),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'views')))
// app.use(express.static(path.join(__dirname, '../ehr/dev')))

// unauthenticate get on our lti url return OK
app.get('/api/launch_lti', function (req, res, next) {
  logSessesion(req, 'in get launch_lti')
  // Moodle has a bot that pings the launch url during external tool configuration.
  // To indicate we're here return OK.
  res.status(200).send('OK')
})

app.use(passport.initialize())
app.use(passport.session())
// app.use(passport.authenticate('ltiStrategy', {failureFlash: false}))

// Setup a POST endpoint to take anything going to /launch_lti
app.post('/api/launch_lti', passport.authenticate('ltiStrategy'), launchEndPoint)

app.get('/api/isLoggedOn', function (req, res, next) {
  logSessesion(req, 'in isLoggedOn')
  ensureLoggedIn(req, res, () => {
    console.log('returning true the user is logged on')
    res.status(200).send('OK')
  })
})

app.get('/api/getUserInfo', function (req, res, next) {
  var id = req.query.user
  lookupUser(id, (err, data) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(data)
  })
})

app.get('/api/getUserData', function (req, res, next) {
  var id = req.query.user
  lookupUserData(id, (err, data) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(data)
  })
})

app.post('/api/userData', function (req, res, next) {
  let body = req.body
  if (body['user'] && body['data']) {
    let data = {
      id: body['user'],
      data: body['data']
    }
    upsertUserData(data.id, data, (err, data) => {
      if (err) {
        res.status(404).send(err)
      }
      res.status(200).send(data)
    })
  }
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let { url } = req
  var env = process.env.NODE_ENV
  if (url.includes('favicon')) {
    debug('Another request for the favicon')
    res.status(404).send('No favicon')
  } else {
    res.status(404).send('Could not find ' + url + '. Environment: ' + env)
    // var ce = createError(404, 'Could not find ' + url + '. Environment: ' + env)
    // console.log('not found error ', ce)
    // next(ce)
  }
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message
  // res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.error('error handler ', err)
  // render the error page
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
