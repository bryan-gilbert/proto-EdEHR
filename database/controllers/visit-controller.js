import { Router } from 'express'
import {ok, fail} from './utils'
import BaseController from './base'
import Visit from '../models/visit'
import Role from './roles'
const debug = require('debug')('server')

export default class VisitController extends BaseController {
  constructor () {
    super(Visit, '_id')
  }

  findVisit (id) {
    return this.baseFindOneQuery(id)
    .populate('activity')
    .populate('assignment')
    .populate('user')
    .populate('toolConsumer')
  }

  route () {
    const router = new Router()
    router.get('/flushed/:key', (req, res) => {
      this
      .findVisit(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })
    return router
  }

  updateCreateVisit (user, toolConsumer, activity, assignment, ltiData) {
    debug('updateVisit')
    var role = new Role(ltiData.roles)
    let filter = {
      $and: [
        {user: user._id},
        {activity: activity._id},
        {toolConsumer: toolConsumer._id},
        {isStudent: role.isStudent},
        {isInstructor: role.isInstructor}
      ]
    }
    var theVisit
    return Visit.findOne(filter)
    .then((visit) => {
      if (visit) {
        theVisit = visit
        debug('updateVisit update previous visit')
        visit.lastVisitDate = Date.now()
        // update the return URL for this visit in case it has changed
        visit.returnUrl = ltiData.launch_presentation_return_url
        return visit.save()
        .then(() => {
          if (user.currentVisit !== visit._id) {
            user.currentVisit = visit._id
            debug('updateVisit user ' + user._id + ' visit is changing to ' + activity.resource_link_title)
            return user.save()
          }
        })
      } else {
        debug('Create a new visit record')
        let data = {
          toolConsumer: toolConsumer._id,
          user: user._id,
          activity: activity._id,
          assignment: assignment._id,
          isStudent: role.isStudent,
          isInstructor: role.isInstructor,
          returnUrl: ltiData.launch_presentation_return_url
        }
        return Visit.create(data)
        .then((visit) => {
          theVisit = visit
          debug('Now have a visit record  ' + visit._id + ' Push new visit into user record')
          user.currentVisit = visit._id
          if (role.isInstructor) {
            user.asInstructorVisits.push(visit)
          }
          if (role.isStudent) {
            user.asStudentVisits.push(visit)
          }
          return user.save()
        })
      }
    })
    .then(() => {
      return theVisit
      // return this.findVisit(theVisit._id)
    })
  }
}
