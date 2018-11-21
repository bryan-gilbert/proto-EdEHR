import { Router } from 'express'
import cors from 'cors'
import UserController from '../controllers/user-controller.js'
import ActivityController from '../controllers/activity-controller'
import AssignmentController from '../controllers/assignment-controller'
import ConsumerController from '../controllers/consumer-controller'
import VisitController from '../controllers/visit-controller'
import VisitDataController from '../controllers/visit-data-controller'
import AdminController from '../controllers/admin-controller'
import LTIController from '../controllers/lti'
import seed from '../config/lib/seed'
import {AssignmentMismatchError, ParameterError, SystemError} from '../utils/errors'

// Sessions and session cookies
// express-session stores session data here on the server and only puts session id in the cookie
const session = require('express-session')
// store session in files for now. Later could scale and store in the database
const FileStore = require('session-file-store')(session)
const COOKIE_SECRET = process.env.COOKIE_SECRET
  ? process.env.COOKIE_SECRET
  : 'this is the secret for the session cookie'
// session ids
const uuid = require('uuid/v4')
const debug = require('debug')('server')

export function apiMiddle (app, config) {
  // SeedDB
  if (config.seedDB) {
    console.log('seeding')
    // const seed = require('../config/lib/seed')
    seed()
  }

  const fileStoreOptions = {}

  if (process.env.SESSION_DIR) {
    fileStoreOptions.path = process.env.SESSION_DIR
  }
  if (process.env.TIMETOLIVE) {
    fileStoreOptions.ttl = process.env.TIMETOLIVE
  }
  app.sessionStore = new FileStore(fileStoreOptions)

  app.use(
    session({
      genid: req => {
        debug('Inside the session middleware req.sessionID ' + req.sessionID)
        return uuid()
      },
      cookie: { sameSite: 'lax' },
      store: app.sessionStore,
      secret: COOKIE_SECRET,
      resave: false,
      saveUninitialized: true
    })
  )

  const corsOptions = setupCors()
  const admin = new AdminController()
  const lti = new LTIController()
  const cc = new ConsumerController()
  const as = new AssignmentController()
  const uc = new UserController()
  const act = new ActivityController()
  const vc = new VisitController()
  const vdc = new VisitDataController()

  return Promise.resolve()
    .then(admin.initializeApp(app))
    .then(lti.initializeApp(app))
    .then(cc.initializeApp(app))
    .then(() => {
      const api = Router()
      api.use('/admin', admin.route())
      api.use('/launch_lti', lti.route())
      api.use('/assignments', cors(corsOptions), as.route())
      api.use('/consumers', cors(corsOptions), cc.route())
      api.use('/users', cors(corsOptions), uc.route())
      api.use('/activities', cors(corsOptions), act.route())
      // visits are activity sessions
      api.use('/visits', cors(corsOptions), vc.route())
      api.use('/visitdata', cors(corsOptions), vdc.route())
      return api
    })
}

export function apiError (app, config) {
  // error handlers
  app.use(logErrors)
  app.use(clientErrorHandler)
  app.use(errorHandler)
}

function logErrors (err, req, res, next) {
  console.error(`Error name: ${err.name} message: ${err.message}`)
  next(err)
}

function clientErrorHandler (err, req, res, next) {
  // import {AssignmentMismatchError, ParameterError, SystemError} from '../utils/errors'
  if (err.name === AssignmentMismatchError.NAME()) {
    res.redirect('/assignments')
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
}

function setupCors () {
  var whitelist = ['http://localhost:28000', 'http://localhost:27000']
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
