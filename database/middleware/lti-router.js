const express = require('express')
const LtiSession = require('../models/lti-session')
const findObject = require('../utils/findObject')
const LtiRouter = express.Router()

LtiRouter.get('/', (req, res) => {
  LtiSession.find()
  .then(items => res.render('lti-sessions-view', { items }))
  .catch(() => res.status(404).json({ msg: 'No lit sessions found' }))
})

LtiRouter.param('userId', findObject(LtiSession, 'user_id', 'lti'))

LtiRouter.get('/:_id', (req, res) => {
  var items = req['lti']
  res.render('lti-sessions-view', { items })
})

LtiRouter.post('/add', (req, res) => {
  const newUser = new LtiSession({
    givenName: req.body.givenName,
    familyName: req.body.familyName,
    user_id: req.body.user_id,
    lti_data: req.body.lti_data
  })
  newUser.save()
  .then(item => res.redirect('/users'))
  .catch((err) => res.status(400).send(err.message))
})

module.exports = LtiRouter

/*
app.get('/lti', (req, res) => {
  LtiSession.find()
  .then(items => res.json(items))
  .catch(err => res.status(404).json({ msg: 'No LTI items found' }))
})

app.post('/launch_lti', (req, res) => {
  const newLti = new LtiSession({
    user_id: req.body.user_id,
    given_name: req.body.lis_person_name_given,
    family_name: req.body.lis_person_name_family,
    context_key: req.body.oauth_consumer_key,
    lti_data: JSON.stringify(req.body)
  })
  newLti.save()
  .then(item => res.redirect('/lti'))
})

app.delete('/launch_lti', (req, res) => {
  console.log('DELETE ' + req.query.user_id)
  if (req.query.user_id) {
    const user_id = req.query.user_id
    console.log('DELETE ' + req.query.user_id)
    LtiSession.deleteMany({user_id: user_id})
    .then(item => res.redirect('/lti'))
  }
})
 */
