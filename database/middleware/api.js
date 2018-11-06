import { Router } from 'express'
import cors from 'cors'
import UserController from '../controllers/user-controller.js'
import ActivityController from '../controllers/activity-controller'
import ConsumerController from '../controllers/consumer-controller'
import VisitController from '../controllers/visit-controller'
import { LTIController } from '../controllers/lti'

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

export default function (app) {
  const corsOptions = setupCors()
  const lti = new LTIController()
  const cc = new ConsumerController()
  return cc.initializeApp(app)
  .then(lti.initializeApp(app))
  .then(() => {
    const api = Router()
    api.use('/launch_lti', lti.route())
    api.use('/consumers', cors(corsOptions), cc.route())
    api.use('/users', cors(corsOptions), new UserController().route())
    api.use('/activities', new ActivityController().route())
    // sessions are activity sessions
    api.use('/sessions', new VisitController().route())
    return api
  })
}
// const sessionCounter = require('./middleware/session-counter')

// app.use('/admin', require('./middleware/admin-router.js'),
//   function (req, res) {
//     res.sendStatus(401)
//   })
//
// app.use('/users', require('./middleware/user-router.js'))
// require('./middleware/lti-router.js')(app)
//
// app.use(sessionCounter)
