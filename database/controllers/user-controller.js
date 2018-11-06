import BaseController from './base'
import User from '../models/user'
import {ok, fail} from './utils'

export default class UserController extends BaseController {
  constructor () {
    super(User, '_id')
  }

  controllerMethod () {
    console.log('here in a controller defined method of the User model')
  }

  list () {
    let flds = 'user_id toolConsumer givenName familyName currentActivity asStudentActivities asInstructorActivities createDate lastVisitDate'
    let xflds = '-ltiData'
    return this.model
    .find({})
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

  // route () {
  //   const router = super.route()
  //
  //   return router
  // }
}
