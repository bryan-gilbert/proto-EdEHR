import UserController from '../controllers/user-controller'
import ConsumerController from '../controllers/consumer-controller'
import {ParameterError} from '../utils/errors'

// destructure the Router from the express package
const { Router } = require('express')

const debug = require('debug')('server')

// LTI authentication
const CustomStrategy = require('passport-custom')
const lti = require('ims-lti')
const passport = require('passport')

// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
// store session in files for now. Later could scale and store in the database
const FileStore = require('session-file-store')(session)
const COOKIE_SECRET = (process.env.COOKIE_SECRET) ? process.env.COOKIE_SECRET : 'this is the secret for the session cookie'
// session ids
const uuid = require('uuid/v4')

const {ok, fail, ltiVersions} = require('./utils')

const User = new UserController()

export class LTIController {
  initializeApp (app) {
    const _this = this
    this.app = app
    app.lti = this
    return Promise.resolve()
      .then(() => {
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
        let strategy = function (req, callback) {
          _this.strategyVerify(req, callback)
        }
        passport.use('ltiStrategy', new CustomStrategy(strategy))
        // serialize the user object into the session. Provide a function that
        // receives a user object and a done(err,id) callback
        passport.serializeUser(function (user, done) {
          if (user && user._id) {
            let id = user._id.valueOf()
            console.log('serializeUser id:', id)
            done(null, id)
          } else {
            console.log('Can not serialize user', user)
            done('Can not serialize user')
          }
        })
        // deserializeUser is to take the user id stored in the session and
        // go find the user object
        passport.deserializeUser(function (id, done) {
          User.read(id)
          .then((results) => {
            let user = results.user
            console.log('LTI deserializeUser result', user.ltiUserId)
            done(null, user)
          })
        })
        app.use(passport.initialize())
        app.use(passport.session())
      })
  }

  strategyVerify (req, callback) {
    // Do custom user finding logic here. If found valid user then send it back in the callbacl
    debug('strategyVerify ltiStrategy ')
    function invalid (message) {
      return callback(new ParameterError(message))
    }
    try {
      if (req.user) {
        // TODO is this correct id?
        debug('strategyVerify has the user ' + req.user.id)
        callback(null, req.user)
      } else {
        debug('strategyVerify validate request ')
        var ltiData = req.body
        if (!ltiData.resource_link_id) {
          return invalid('EdEHR requires the LTI tool consumer to provide a resource link id: resource_link_id')
        }
        if (!ltiData.user_id) {
          return invalid("EdEHR requires the LTI tool consumer to provide a user's id: user_id.")
        }
        if (!ltiVersions().includes(ltiData.lti_version)) {
          return invalid('EdEHR requires the LTI tool consumer to use the LTI 1.0 or 1.1 specification.')
        }
        if (ltiData.lti_message_type !== 'basic-lti-launch-request') {
          return invalid('EdEHR requires the LTI tool consumer to send a basic lti launch request. lti_message_type = basic-lti-launch-request')
        }
        var consumerKey = ltiData['oauth_consumer_key']
        let userId = ltiData['user_id']
        if (!consumerKey) {
          return invalid('Must provide consumer key')
        }
        // TODO lookup key and secret based on incoming consumerKey
        debug('strategyVerify find consumer by key ' + consumerKey)
        this.app.consumer.findOneConsumerByKey(consumerKey)
        .then((consumer) => {
          if (!consumer) {
            debug('strategyVerify could not find consumer')
            return invalid('Unsupported consumer key')
          }
          var provider = new lti.Provider(ltiData, consumer.oauth_consumer_secret)
          debug('strategyVerify validate with provider')
          provider.valid_request(req, function (err, isValid) {
            if (err) {
              debug('strategyVerify LTI Error ' + err.message)
              return callback(err, null)
            }

            console.log('strategyVerify find userId', userId, consumerKey)
            User.findOne({$and: [{ltiUserId: userId}, {ltiConsumerKey: consumerKey}]})
            .then((foundUser, r) => {
              if (foundUser) {
                // console.log('Found user ', foundUser)
                // TODO if the user record exists then do we update something here?
                return callback(null, foundUser)
              }
              // console.log('Create user ', userId)
              let user = {
                ltiUserId: userId,
                givenName: ltiData.lis_person_name_given,
                familyName: ltiData.lis_person_name_family,
                emailPrimary: ltiData.lis_person_contact_email_primary,
                ltiConsumerKey: consumerKey,
                ltiData: [JSON.stringify(ltiData)]
              }
              User.create(user)
              .then((newUser, r) => {
                // console.log('results of create ', newUser, r)
                return callback(null, newUser.user)
              })
            })
          })
        })
      }
    } catch (err) {
      debug('strategyVerify authentication error' + err.message)
      callback(err, null)
    }
  }

  route () {
    const router = new Router()

    router.get('/', (req, res) => {
      res.status(200).send('OK')
    })
    router.post('/', passport.authenticate('ltiStrategy'), (req, res, next) => {
      // var session = req.session
      // // var cookies = req.cookies
      // var user = req.user
      // var url = 'http://localhost:28000?user=' + user._id
      //
      // console.log('authenticated session: ', session)
      // console.log('authenticated url: ', url)
      res.redirect('/launch_lti/authenticated')
      // res.redirect(301, url)
      // req.session.user = req.user
      // req.session.ltiToken = ltiToken
      // session.views = (session.views || 0) + 1
      // user.visits = (user.visits || 0) + 1
      // user.vistsSession = session.views
      // user.sid = cookies['connect.sid']
      // user.ss = JSON.stringify(session)
      // user.isAuthd = req.isAuthenticated() ? 'authenticated' : 'NOT'

      /*
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
      */
    })

    router.get('/authenticated', (req, res) => {
      var session = req.session.passport
      // var cookies = req.cookies
      var user = req.user
      var url = 'http://localhost:28000?user=' + user._id

      console.log('authenticated user: ', user.ltiUserId)
      console.log('authenticated session: ', session)
      console.log('authenticated url: ', url)
      res.status = 302
      res.setHeader('Location', url)
      // res.end()
      res.redirect(url)
    })
    return router
  }
}
