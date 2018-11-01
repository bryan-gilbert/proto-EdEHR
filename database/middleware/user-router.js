const express = require('express')
const User = require('../models/User')
const findObject = require('../utils/findObject')
const UserRouter = express.Router()

UserRouter.get('/', (req, res) => {
  User.find()
  .then(users => res.render('users-view', { users }))
  .catch(() => res.status(404).json({ msg: 'No users found' }))
})

UserRouter.param('userId', findObject(User, 'user_id', 'user'))

UserRouter.get('/:userId', (req, res) => {
  var user = req['user'][0]
  console.log('user router render one user') // ,req['user'])
  res.render('user-view', {user})
})

UserRouter.post('/add', (req, res) => {
  const newUser = new User({
    givenName: req.body.givenName,
    familyName: req.body.familyName,
    user_id: req.body.user_id,
    lti_data: req.body.lti_data
  })
  newUser.save()
  .then(item => res.redirect('/users'))
  .catch((err) => res.status(400).send(err.message))
})

module.exports = UserRouter
