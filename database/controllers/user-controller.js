import BaseController from './base'
import User from '../models/user'
import {ok, fail} from './utils'
import VisitController from '../controllers/visit-controller'
const Visit = new VisitController()
export default class UserController extends BaseController {
  constructor () {
    super(User, '_id')
    // this.populate = [
    //   {path: 'currentVisit', populate: {path: 'activity'}}
    // ]
    // this.populate = [
    //   {path: 'currentVisit'}
    // ]
      // 'currentVisit toolConsumer currentVisit/activity'
  }

  /**
   */
  updateSessionData (id, data) {
    return this.baseFindOneQuery(id)
    .then((modelInstance) => {
      if (modelInstance) {
        let visitId = modelInstance.currentVisit._id
        console.log('current visit')
        return Visit.updateSessionData(visitId, data)
      }
    })
    .then(() => {
      return this.read(id)
    })
  }
  listActivitiesAsStudent (id) {
    return this.baseFindOneQuery(id)
    .populate([
      {path: 'asStudentVisits', model: 'Visit', populate: {path: 'activity', model: 'Activity'}}
    ])
    .select('_id asStudentVisits')
    .then((modelInstance) => {
      console.log(modelInstance)
      var response = {}
      response[this.modelName] = modelInstance
      return response
    })
  }

  listActivitiesAsInstructor (id) {
    return this.baseFindOneQuery(id)
    .populate([
      {path: 'asInstructorVisits', model: 'Visit', populate: {path: 'activity', model: 'Activity'}}
    ])
    .select('_id asInstructorVisits')
    .then((modelInstance) => {
      // db.visits.find({activity: ObjectId("5be34dd9f0dc0e11d6120485")},{user:1})
      console.log(modelInstance)
      var response = {}
      response[this.modelName] = modelInstance
      return response
    })
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

  /**
   * Convert the LTI role value into our course roles. Only support student and instructor which is mapped to
   * instructor, staff and faculty from the LTI consumer side.
   *
   * @param roles
   * @return {*}
   */
  getRoleFromLti (roles) {
    var role
    if (roles) {
      let r = roles.toLowerCase()
      let student = r.includes('student')
      let instructor = r.includes('instructor') || r.includes('staff') || r.includes('faculty')
      role = student ? 'student' : (instructor ? 'instructor' : null)
    }
    return role
  }

  route () {
    const router = super.route()
    router.get('/:key/sessionData', (req, res) => {
      this
      .read(req.params.key)
      .then((results) => {
        var user = results.user
        var visit = user.currentVisit || {sessionData: {}}
        var data = visit.sessionData || {}
        console.log('extact session data from results', data)
        return data
      })
      .then(ok(res))
      .then(null, fail(res))
    })

    router.get('/:key/asInstructor', (req, res) => {
      this
      .listActivitiesAsInstructor(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })

    router.get('/:key/asStudent', (req, res) => {
      this
      .listActivitiesAsStudent(req.params.key)
      .then(ok(res))
      .then(null, fail(res))
    })

    router.put('/:key/sessionData', (req, res) => {
      this
      .updateSessionData(req.params.key, req.body)
      .then(ok(res))
      .then(null, fail(res))
    })
    return router
  }
}
