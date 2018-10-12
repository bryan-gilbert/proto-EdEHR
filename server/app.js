var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var lti = require('ims-lti')
var _ = require('lodash')
var logger = require('morgan')
var sassMiddleware = require('node-sass-middleware')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}))
app.use(express.static(path.join(__dirname, 'public')))

// Setup a POST endpoint to take anything going to /launch_lti
var ltiKey = 'mykeyagain'
var ltiSecret = 'mysagain'

app.post('/launch_lti', function (req, res, next) {
  req.body = _.omit(req.body, '__proto__')
  if (req.body['oauth_consumer_key'] === ltiKey) {
    var provider = new lti.Provider(ltiKey, ltiSecret)
    // Check is the Oauth  is valid using the LTI plugin for NodeJS.
    provider.valid_request(req, function (err, isValid) {
      if (err) {
        console.log('Error in LTI Launch:' + err)
        res.status(403).send(err)
      } else {
        if (!isValid) {
          console.log('\nError: Invalid LTI launch.')
          res.status(500).send({ error: 'Invalid LTI launch' })
        } else {
          // User is Auth so pass back when ever we need. in this case we use pug to render the values to screen
          res.render('start', { title: 'LTI SETTINGS', CourseID: 'CourseID: ' + req.body['context_id'], userID: 'UserID: ' + req.body['user_id'], UserRole: 'Course Role: ' + req.body['roles'], FulllogTitle: 'Full Log: ', Fulllog: JSON.stringify(req.body) })
        }
      }
    })
  } else {
    console.log('LTI KEY NOT MATCHED:')
    res.status(403).send({ error: 'LTI KEY NOT MATCHED' })
  }
})

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
