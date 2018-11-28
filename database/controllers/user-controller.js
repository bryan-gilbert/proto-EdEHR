import mongoose from 'mongoose'
import BaseController from './base'
import User from '../models/user'
import Activity from '../models/activity'
import Visit from '../models/visit'
import {ok, fail} from './utils'
const debug = require('debug')('server')

export default class UserController extends BaseController {
  constructor (config) {
    super(User, '_id')
    this.config = config
  }

  listActivitiesAsStudent (id) {
    debug('listActivitiesAsStudent for ' + id)
    return this.baseFindOneQuery(id)
    .populate([{path: 'asStudentVisits', model: 'Visit', populate: {path: 'activity', model: 'Activity'}}])
    .populate([{path: 'asStudentVisits', model: 'Visit', populate: {path: 'assignment', model: 'Assignment'}}])
    .select('asStudentVisits')
    .then((modelInstance) => {
      var cnt = modelInstance && modelInstance.asStudentVisits ? modelInstance.asStudentVisits.length : 0
      debug('listActivitiesAsStudent found: ' + cnt)
      return modelInstance
    })
  }

  listActivitiesAsInstructor (id) {
    debug('listActivitiesAsInstructor for ' + id)
    var results = {user: id}
    return this.baseFindOneQuery(id)
    .populate([{path: 'asInstructorVisits', model: 'Visit', populate: {path: 'activity', model: 'Activity'}}])
    .populate([{path: 'asInstructorVisits', model: 'Visit', populate: {path: 'assignment', model: 'Assignment'}}])
    .select('asInstructorVisits')
    .then((modelInstance) => {
      results.asInstructorVisits = modelInstance.asInstructorVisits
      var list = modelInstance.asInstructorVisits
      var aids = list.map((visit) => {
        return visit.activity._id
      })
      var cnt = aids.length
      debug('listActivitiesAsInstructor found: ' + cnt)
      results.aids = aids
      return Visit.find({ $and: [
        {'isStudent': true},
        {'activity': {$in: aids}}
      ]})
      .populate('user')
    })
    .then((visits) => {
      results.visits = visits
      return Activity.find({'_id': {$in: results.aids}})
      .populate('assignment')
    })
    .then((activities) => {
      var courses = this.composeCourses(activities, results.visits)
      var finalResults = {
        courses: courses,
        asInstructorVisits: results.asInstructorVisits
      }
      return finalResults
    })
  }

  composeCourses (activities, visits) {
    var courses = []
    activities.forEach((activity) => {
      console.log('activity', activity._id)
      var cId = activity.context_id
      var course = courses.find((c) => {
        return c.id === cId
      })
      if (!course) {
        course = {
          id: cId,
          name: activity.context_title,
          label: activity.context_label,
          activities: []
        }
        courses.push(course)
      }
      var ract = {
        id: activity.resource_link_id,
        _id: activity._id,
        name: activity.resource_link_title,
        label: activity.resource_link_description,
        assignment: activity.assignment.name,
        seed: activity.assignment.seedData,
        route: activity.assignment.ehrRoute,
        externalId: activity.assignment.externalId,
        students: []
      }
      var aVisits = []
      visits.forEach((visit) => {
        if (visit.activity.equals(activity._id)) {
          console.log('   v', visit._id, visit.activity)
          aVisits.push(visit)
        }
      })
      aVisits.forEach((visit) => {
        var user = visit.user
        var student = {
          familyName: user.familyName,
          givenName: user.givenName,
          email: user.emailPrimary,
          id: user.user_id,
          _id: user._id,
          assignmentData: visit.assignmentData
        }
        // console.log('push student', student)
        ract.students.push(student)
      })
      // console.log('push ract', ract)
      course.activities.push(ract)
    })
    return courses
  }

// TODO essentially this is a special case filter. Make a generic way to filter for any class
  list () {
    var self = this
    let xflds = '-ltiData'
    return this.model
    .find({})
    .populate(self.populate)
    .select(xflds)
    .sort('toolConsumer user_id createdDate')
    .limit(10)
    .then((modelInstances) => {
      var response = {}
      response['user'] = modelInstances
      return response
    })
  }
  route () {
    const router = super.route()

    router.get('/asInstructor/:key', (req, res) => {
      this
      .listActivitiesAsInstructor(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })

    router.get('/asStudent/:key', (req, res) => {
      this
      .listActivitiesAsStudent(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })
    return router
  }
}
