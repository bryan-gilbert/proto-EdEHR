const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const sessionCounter = require('./middleware/session-counter')
const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', require('./middleware/admin-router.js'),
  function (req, res) {
    res.sendStatus(401)
  })

app.use('/users', require('./middleware/user-router.js'))
require('./middleware/lti-router.js')(app)

app.use(sessionCounter)
// Connect to MongoDB
mongoose
  .connect(
    'mongodb://localhost:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

const port = 3000
app.listen(port, () => console.log('Server running...'))

/*
function userMiddleware (req, res, next) {
  getUserViaJWT(req.headers.authentication)
  .then(function(user) {
    req.user = user
    next()
  })
  .catch(function (error) {
    res.status(401).end() //replace with proper error handling
  })
}
function logMiddleware (req, res, next) {
  logLastActiveAt(req.user.id, new Date())
  next()
}

app.use(userMiddleware)
app.use(logMiddleware)
 */
