var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var _ = require('lodash')
var logger = require('morgan')
var sassMiddleware = require('node-sass-middleware')
var debug = require('debug')('server')

var lti = require('ims-lti')
var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var app = express()

process.env.COOKIE_SECRET = (process.env.COOKIE_SECRET) ? process.env.COOKIE_SECRET : 'this is the secret for the session cookie'
process.env.LTI_SECRET = (process.env.LTI_SECRET) ? process.env.LTI_SECRET : 'edehrsecret'
process.env.LTI_KEY = (process.env.LTI_KEY) ? process.env.LTI_KEY : 'edehrkey'

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

// Setup a POST endpoint to take anything going to /launch_lti
debug(`app with lti key ${process.env.LTI_KEY} and ${process.env.LTI_SECRET}`)

/*
var sess = {
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.secure = true // serve secure cookies
}

app.use(session(sess))
*/
/*

app.use(session({secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false}))

// Passport
passport.use('ltiStrategy', new CustomStrategy(
  function (req, callback) {
    var val = (req.body) ? req.body : req.user
    console.log('ltiStrategy ', val)
    try {
      var provider = new lti.Provider(val, process.env.LTI_SECRET)
      if (req.user) {
        console.log('Have user ', val)
        callback(null, val)
      } else {
        console.log('validate request ')
        provider.valid_request(req, function (err, isValid) {
          if (err) {
            console.log('LTI Error', err, isValid)
          }
          console.log('request is valid ', val)
          callback(err, val)
        })
      }
    } catch (err) {
      console.log('Authenication error', err)
      callback(err, null)
    }
  }
))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
*/
/*
app.post('/login',
  passport.authenticate('local'),
  function (req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username)
  })
*/

app.get('/launch_lti', function (req, res, next) {
  // Moodle has a bot that pings the launch url during external tool configuration.
  // To indicate we're here return OK.
  res.status(200).send('OK')
})

app.post('/launch_lti', function (req, res, next) {
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
})

app.use('/', indexRouter)
app.use('/users', usersRouter)

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

  // render the error page
  res.status(err.status || 500)
  res.render('error', err)
})

module.exports = app
