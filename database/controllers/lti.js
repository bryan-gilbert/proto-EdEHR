
import UserController from '../controllers/user-controller'
import ConsumerController from '../controllers/consumer-controller'
import ActivityController from '../controllers/activity-controller'
import AssignmentController from '../controllers/assignment-controller'
import VisitController from './visit-controller'
import VisitDataController from './visit-data-controller'

import {AssignmentMismatchError, ParameterError, SystemError} from '../utils/errors'

// destructure the Router from the express package
const { Router } = require('express')

const debug = require('debug')('server')

// LTI authentication
const CustomStrategy = require('passport-custom')
const lti = require('ims-lti')
const passport = require('passport')

const {ok, fail, ltiVersions} = require('./utils')

const UserModel = new UserController()
const ConsumerModel = new ConsumerController()
const ActivityModel = new ActivityController()
const AssignmentModel = new AssignmentController()
const VisitModel = new VisitController()
const VisitDataModel = new VisitDataController()

export default class LTIController {
  initializeApp (app) {
    const _this = this
    this.app = app
    app.lti = this
    return Promise.resolve()
      .then(() => {
        let strategy = function (req, callback) {
          _this.strategyVerify(req, callback)
        }
        passport.use('ltiStrategy', new CustomStrategy(strategy))
        // serialize the user object into the session. Provide a function that
        // receives a user object and a done(err,id) callback
        passport.serializeUser(function (user, done) {
          if (user && user._id) {
            let id = user._id.valueOf()
            debug('serializeUser id:' + id)
            done(null, id)
          } else {
            console.log('Can not serialize user', user)
            done('Can not serialize user')
          }
        })
        // deserializeUser is to take the user id stored in the session and
        // go find the user object
        passport.deserializeUser(function (id, done) {
          UserModel.read(id)
          .then((results) => {
            let user = results.user
            debug('LTI deserializeUser result' + (user ? user.user_id : 'none'))
            done(null, user)
          })
        })
        app.use(passport.initialize())
        app.use(passport.session())
      })
  }

  /**
   * If user is already in the request because it was retrieved via session then just return user.
   * Otherwise perform validation and LTI authentication and then setup user.
   * In both cases place the tool consumer and LTI data into req for further processing
   * @param req
   * @param callback
   */
  strategyVerify (req, callback) {
    const _this = this
    // Do custom user finding logic here. If found valid user then send it back in the callbacl
    debug('strategyVerify ltiStrategy ')

    try {
      if (req.user) {
        debug('strategyVerify has the user.  TODO is this correct id? ' + req.user.id)
          // store the LTI data for further processing after setting up the user
        req.ltiData = req.body
        ConsumerModel.read(req.user.toolConsumer).then((holder) => {
          var tcid = holder.consumer ? holder.consumer._id : null
          debug(`strategyVerify. just searched for the tool consumer id: ${tcid}`)
          req.toolConsumer = holder.consumer
          callback(null, req.user)
        })
      } else {
        // process the launch request
        var ltiData = req.body
        if (!_this.validateLti(ltiData, callback)) {
          return
        }

        var consumerKey = ltiData['oauth_consumer_key']
        debug('strategyVerify find consumer by key ' + consumerKey)
        ConsumerModel.findOneConsumerByKey(consumerKey)
        .then((toolConsumer) => {
          // Grave error to not have found a tool consumer
          if (!toolConsumer) {
            let message = 'Unsupported consumer key ' + consumerKey
            debug('strategyVerify ' + message)
            return callback(new ParameterError(message))
          }
          req.toolConsumer = toolConsumer
          var provider = new lti.Provider(ltiData, toolConsumer.oauth_consumer_secret)
          debug('strategyVerify found tool consumer now validate msg with provider')
          provider.valid_request(req, function (err, isValid) {
            if (err) {
              return callback(new ParameterError(err.message), null)
            }

            // store the LTI data for further processing after setting up the user
            req.ltiData = ltiData
            let userId = ltiData['user_id']
            debug('strategyVerify find userId: ' + userId + ' consumer: ' + consumerKey)
            _this.findCreateUser(userId, toolConsumer._id, ltiData)
            .then((user) => {
              callback(null, user)
            })
          })
        })
      }
    } catch (err) {
      debug('strategyVerify authentication error: ' + err.message)
      callback(new SystemError(err.message), null)
    }
  }

  validateLti (ltiData, callback) {
    debug('strategyVerify validate request ')
    function invalid (message) {
      callback(new ParameterError(message))
      return false
    }
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
    let role = UserModel.getRoleFromLti(ltiData.roles)
    if (!role) {
      return invalid("EdEHR requires the LTI tool consumer to provide the user's roles. And these must be one of student, faculty, instructor or staff. " + ltiData.roles)
    }
    if (!ltiData['oauth_consumer_key']) {
      return invalid('Must provide consumer key')
    }
    if (!ltiData['context_id']) {
      return invalid('EdEHR requires the LTI tool consumer to provide a resource context_id')
    }
    if (!ltiData['custom_assignment']) {
      return invalid('EdEHR requires the LTI tool consumer to provide a custom assignment paramater named "custom_assignment"')
    }
    return true
  }

  findCreateUser (userId, toolConsumerId, ltiData) {
    return UserModel.findOne({$and: [{user_id: userId}, {toolConsumer: toolConsumerId}]})
    .then((foundUser, r) => {
      if (foundUser) {
        debug('Found user ' + foundUser._id)
        // will update the user record later
        return foundUser
      }
      debug('Create user ', userId)
      let user = {
        user_id: ltiData.user_id,
        givenName: ltiData.lis_person_name_given,
        familyName: ltiData.lis_person_name_family,
        emailPrimary: ltiData.lis_person_contact_email_primary,
        ltiData: [JSON.stringify(ltiData)],
        toolConsumer: toolConsumerId
      }
      return UserModel.create(user)
      .then((newUser, r) => {
        // create returns a structure with the new user inside
        let object = newUser.user
        debug('created new user ' + object._id)
        return object
      })
    })
  }

  updateToolConsumer (req) {
    const ltiData = req.ltiData
    const toolConsumer = req.toolConsumer
    if (!toolConsumer.tool_consumer_instance_guid) {
      debug('updateToolConsumer starting with ' + toolConsumer)
      toolConsumer.lti_version = ltiData.lti_version
      toolConsumer.tool_consumer_info_product_family_code = ltiData.tool_consumer_info_product_family_code
      toolConsumer.tool_consumer_info_version = ltiData.tool_consumer_info_version
      toolConsumer.tool_consumer_instance_guid = ltiData.tool_consumer_instance_guid
      toolConsumer.tool_consumer_instance_name = ltiData.tool_consumer_instance_name
      toolConsumer.tool_consumer_instance_description = ltiData.tool_consumer_instance_description
      debug('updateToolConsumer update tool consumer record ' + JSON.stringify(toolConsumer))
      return toolConsumer.save()
    } else {
      debug('tool consumer is up to date ')
      return Promise.resolve()
    }
  }

  updateOutcomeManagement (req) {
    return Promise.resolve(req)
    // see models/outcomes.js
  }

  locateAssignment (req) {
    return new Promise((resolve, reject) => {
      var externalId = req.ltiData.custom_assignment
      //     externalId = 'assignment1'
      AssignmentModel.locateAssignmentByExternalId(externalId)
      .then((assignment) => {
        console.log('assignment ', assignment)
        if (!assignment) {
          var msg = 'Could not locate assignment for ' + externalId
          reject(new AssignmentMismatchError(msg))
        }
        resolve(assignment)
      })
    })
  }
  updateActivity (req) {
    debug('updateActivity')
    if (!req.toolConsumer) {
      throw new SystemError('Missing tool consumer while updating activity records')
    }
    if (!req.ltiData) {
      throw new SystemError('Missing LTI data while updating activity records')
    }
    return ActivityModel.updateCreateActivity(req.ltiData, req.toolConsumer._id)
    .then((activity) => {
      console.log('store the activity in the req')
      req.activity = activity
    })
  }

  updateVisit (req) {
    debug('updateVisit')
    const ltiData = req.ltiData
    const user = req.user
    const activity = req.activity
    const toolConsumer = req.toolConsumer
    if (!user) {
      throw new SystemError('Missing user while updating visit')
    }
    if (!toolConsumer) {
      throw new SystemError('Missing tool consumer while updating visit')
    }
    if (!activity) {
      throw new SystemError('Missing activity while updating visit')
    }
    // note that the role field has been validated already
    let role = UserModel.getRoleFromLti(ltiData.roles)
    let isStudent = role === 'student'
    let isInstructor = role === 'instructor'
    let tid = toolConsumer._id
    let uid = user._id
    let aid = activity._id
    let filter = {
      $and: [
        {user: uid},
        {activity: aid},
        {toolConsumer: tid},
        {isStudent: isStudent},
        {isInstructor: isInstructor}
      ]
    }
    return VisitModel.findOne(filter)
    .then((visit) => {
      if (visit) {
        debug('updateVisit update previous visit')
        visit.lastVisitDate = Date.now()
        visit.lti_roles = ltiData.roles
        visit.launch_presentation_return_url = ltiData.launch_presentation_return_url

        return visit.save()
        .then(() => {
          // reuse a previous session for this activity
          if (user.currentVisit !== visit._id) {
            user.currentVisit = visit._id
            debug('updateVisit user ' + user._id + ' visit is changing to ' + activity.resource_link_title)
            return user.save()
          }
        })
      } else {
        // create a new activity session
        debug('Create an empty visitData record')
        let vd = {
          uid: uid.toString()
        }
        let visitdata = null
        let visit = null
        return VisitDataModel.create({user: uid, data: vd})
        .then((record) => {
          visitdata = record.visitdata
          const vid = visitdata._id
          debug('Now have a visitData  ' + vid)
          let data = {
            toolConsumer: tid,
            user: uid,
            activity: aid,
            visitData: vid,
            lti_roles: ltiData.roles,
            isStudent: isStudent,
            isInstructor: isInstructor,
            launch_presentation_return_url: ltiData.launch_presentation_return_url
          }
          debug('Create a visit record')
          return VisitModel.create(data)
        })
        .then((current) => {
          debug('Now have a visit record  ' + current._id)
          visit = current.visit
          user.currentVisit = visit._id
          if (isInstructor) {
            user.asInstructorVisits.push(visit)
          }
          if (isStudent) {
            user.asStudentVisits.push(visit)
          }
          debug('Save visit into user record and overwrite any previous "current" visit')
          return user.save()
        })
        .then((current) => {
          debug('link visit back into visit data')
          visitdata.visit = visit._id
          return visitdata.save()
        })
      }
    })
  }

  route () {
    const router = new Router()

    router.get('/', (req, res) => {
      res.status(200).send('OK')
    })

    router.post('/', passport.authenticate('ltiStrategy'), (req, res, next) => {
      const _this = this
      debug('have authenticated user. Now process the lti launch request')
      Promise.resolve()
      .then(() => { _this.updateToolConsumer(req) })
      .then(() => { return _this.updateOutcomeManagement(req) })
      .then(() => { return _this.locateAssignment(req) })
      .then(() => { return _this.updateActivity(req) })
      .then(() => { return _this.updateVisit(req) })
      .then(() => {
        debug('ready to redirect to the ehr')
        res.redirect('/launch_lti/userAuthenticated')
      })
      .catch((err) => {
        // console.log('ERRRORRRR', err)
        next(err)
      })
    })

    router.get('/userAuthenticated', (req, res) => {
      var session = req.session.passport
      // var cookies = req.cookies
      var user = req.user
      var url = 'http://localhost:28000?user=' + user._id

      console.log('authenticated user: ', user.user_id)
      console.log('authenticated session: ', session)
      console.log('authenticated url: ', url)
      // res.status = 302
      // res.setHeader('Location', url)
      res.redirect(url)
      // res.redirect('/users')
    })
    return router
  }
}
