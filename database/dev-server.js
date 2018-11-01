const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', require('./middleware/admin-router.js'),
  function (req, res) {
    res.sendStatus(401)
  })

app.use('/users', require('./middleware/user-router.js'))
app.use('/lti', require('./middleware/lti-router.js'))

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
