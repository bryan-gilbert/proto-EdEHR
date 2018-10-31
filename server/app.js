var { UserData } = require('./src/user-data.js')
var { UserInfo } = require('./src/user-info.js')

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')

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

  UserInfo.updateUser(user, function (err, updatedUser) {
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
    UserData.upsertUserData(userData, function (err, updatedUser) {
      if (err) {
        return next(err)
      }
      debug('Redirect to ehr ' + content.lis_person_name_full)
      // var returnUrl = updatedUser.launch_presentation_return_url
      res.cookie('usr', content)
      res.redirect('http://localhost:28000?user=' + req.user.id)
    })
  })
}

function strategyVerify (req, callback) {
  // Do custom user finding logic here. If found valid user then send it back in the callbacl
  debug('strategyVerify ltiStrategy ')
  try {
    if (req.user) {
      debug('strategyVerify Have user ' + req.user.id)
      callback(null, req.user)
    } else {
      debug('strategyVerify validate request ')
      var provider = new lti.Provider(req.body, process.env.LTI_SECRET)
      provider.valid_request(req, function (err, isValid) {
        if (err) {
          debug('strategyVerify LTI Error '+ err.message)
          return callback(err, null)
        }
        debug('strategyVerify request is valid ')
        var body = req.body
        var id = body.user_id
        UserInfo.findCreate(id, body, callback)
      })
    }
  } catch (err) {
    debug('strategyVerify authentication error' + err.message)
    callback(err, null)
  }
}

function ensureLoggedIn (req, res, next) {
  debug('ensureLoggedIn()')
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    debug('not authorized')
    res.status(403).send({error: 'Not authorized'})
  } else {
    debug('Yes is authorized')
    next()
  }
}
// Passport
passport.use('ltiStrategy', new CustomStrategy(strategyVerify))
passport.serializeUser(UserInfo.extractUniqueUserId)
passport.deserializeUser(UserInfo.lookupUser)

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
    debug('Inside the session middleware')
    debug('req.sessionID ' + req.sessionID)
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
    debug('returning true the user is logged on')
    res.status(200).send('OK')
  })
})

app.get('/api/getUserInfo', function (req, res, next) {
  var id = req.query.user
  UserInfo.lookupUser(id, (err, data) => {
    if (err) {
      res.status(404).send(err)
    }
    res.status(200).send(data)
  })
})

app.get('/api/getUserData', function (req, res, next) {
  var id = req.query.user
  UserData.lookupUserData(id, (err, data) => {
    if (err) {
      res.status(404).send(err)
    }
    debug(`api/getUserData success`)
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
    UserData.upsertUserData(data.id, data, (err, data) => {
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
    // debug('not found error ', ce)
    // next(ce)
  }
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message
  // res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.error('error handler ', err.message)
  // render the error page
  res.status(err.status || 500)
  res.send(err.message)
})

module.exports = app
