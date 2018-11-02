const debug = require('debug')('server')
const express = require('express')
const LtiRouter = express.Router()
const CustomStrategy = require('passport-custom')
const lti = require('ims-lti')
const uuid = require('uuid/v4')
const passport = require('passport')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const UserUtil = require('../utils/user-util.js')
// const LtiSession = require('../models/lti-session')
// const findObject = require('./find-object')

const baseUrl = 'launch_lti'

const COOKIE_SECRET = (process.env.COOKIE_SECRET) ? process.env.COOKIE_SECRET : 'this is the secret for the session cookie'
process.env.LTI_SECRET = (process.env.LTI_SECRET) ? process.env.LTI_SECRET : 'edehrsecret'
process.env.LTI_KEY = (process.env.LTI_KEY) ? process.env.LTI_KEY : 'edehrkey'

// unauthenticated get on our lti url return OK
LtiRouter.get('/', function (req, res, next) {
  // Moodle has a bot that pings the launch url during external tool configuration.
  // To indicate we're here return OK.
  res.status(200).send('OK')
})

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

  UserUtil.updateUser(user, function (err, updatedUser) {
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
    UserUtil.upsertUserData(userData, function (err, updatedUser) {
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
      debug('strategyVerify has the user ' + req.user.id) // TODO is this correct id?
      callback(null, req.user)
    } else {
      debug('strategyVerify validate request ')
      // TODO match secret to key. There can be many
      var provider = new lti.Provider(req.body, process.env.LTI_SECRET)
      provider.valid_request(req, function (err, isValid) {
        if (err) {
          debug('strategyVerify LTI Error ' + err.message)
          return callback(err, null)
        }
        debug('strategyVerify request is valid ')
        var ltiData = req.body
        // TODO if the user record exists then do we update something here?
        UserUtil.findCreateUpdate(ltiData, callback)
      })
    }
  } catch (err) {
    debug('strategyVerify authentication error' + err.message)
    callback(err, null)
  }
}

function initializeApp (app) {
  const fileStoreOptions = {}
  if (process.env.SESSION_DIR) {
    fileStoreOptions.path = process.env.SESSION_DIR
  }
  if (process.env.TIMETOLIVE) {
    fileStoreOptions.ttl = process.env.TIMETOLIVE
  }
  app.use(session({
    genid: (req) => {
      debug('Inside the session middleware req.sessionID ' + req.sessionID)
      return uuid()
    },
    cookie: { sameSite: 'lax' },
    store: new FileStore(fileStoreOptions),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: true
  }))
  passport.use('ltiStrategy', new CustomStrategy(strategyVerify))
  passport.serializeUser(UserInfo.extractUniqueUserId)
  passport.deserializeUser(UserInfo.lookupUser)
  app.use(passport.initialize())
  app.use(passport.session())

  LtiRouter.post('/api/launch_lti', passport.authenticate('ltiStrategy'), launchEndPoint)

  app.use(baseUrl, LtiRouter)
}

module.exports = initializeApp

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

LtiRouter.get('/sessions', (req, res) => {
  LtiSession.find()
  .then(items => res.render('lti-sessions-view', { items }))
  .catch(() => res.status(404).json({ msg: 'No lit sessions found' }))
})

LtiRouter.param('userId', findObject(LtiSession, 'user_id', 'lti'))

LtiRouter.get('/session/:_id', (req, res) => {
  var items = req['lti']
  res.render('lti-sessions-view', { items })
})

LtiRouter.post('/sessions/add', (req, res) => {
  const newUser = new LtiSession({
    givenName: req.body.givenName,
    familyName: req.body.familyName,
    userId: req.body.user_id,
    ltiData: req.body.lti_data
  })
  newUser.save()
  .then(item => res.redirect(baseUrl + '/sessions'))
  .catch((err) => res.status(400).send(err.message))
})

 */
