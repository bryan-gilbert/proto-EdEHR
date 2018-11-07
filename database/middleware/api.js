import { Router } from 'express'
import cors from 'cors'
import UserController from '../controllers/user-controller.js'
import ActivityController from '../controllers/activity-controller'
import ConsumerController from '../controllers/consumer-controller'
import VisitController from '../controllers/visit-controller'
import AdminController from '../controllers/admin-controller'
import LTIController from '../controllers/lti'

// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
// store session in files for now. Later could scale and store in the database
const FileStore = require('session-file-store')(session)
const COOKIE_SECRET = (process.env.COOKIE_SECRET) ? process.env.COOKIE_SECRET : 'this is the secret for the session cookie'
// session ids
const uuid = require('uuid/v4')
const debug = require('debug')('server')

export default function (app) {
  const fileStoreOptions = {}

  if (process.env.SESSION_DIR) {
    fileStoreOptions.path = process.env.SESSION_DIR
  }
  if (process.env.TIMETOLIVE) {
    fileStoreOptions.ttl = process.env.TIMETOLIVE
  }
  app.sessionStore = new FileStore(fileStoreOptions)

  app.use(session({
    genid: (req) => {
      debug('Inside the session middleware req.sessionID ' + req.sessionID)
      return uuid()
    },
    cookie: { sameSite: 'lax' },
    store: app.sessionStore,
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: true
  }))

  const corsOptions = setupCors()
  const admin = new AdminController()
  const lti = new LTIController()
  const cc = new ConsumerController()

  return Promise.resolve()
  .then(admin.initializeApp(app))
  .then(lti.initializeApp(app))
  .then(cc.initializeApp(app))
  .then(() => {
    const api = Router()
    api.use('/admin', admin.route())
    api.use('/launch_lti', lti.route())
    api.use('/consumers', cors(corsOptions), cc.route())
    api.use('/users', cors(corsOptions), new UserController().route())
    api.use('/activities', cors(corsOptions), new ActivityController().route())
    // visits are activity sessions
    api.use('/visits', cors(corsOptions), new VisitController().route())
    return api
  })
}

function setupCors () {
  var whitelist = ['http://localhost:28000', 'http://example2.com']
  var corsOptionsDelegate = function (req, callback) {
    var corsOptions
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
      corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
  }
  return corsOptionsDelegate
}
