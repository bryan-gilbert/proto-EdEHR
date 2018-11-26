import BaseController from './base'
import User from '../models/user'
import {ok, fail} from './utils'
const debug = require('debug')('server')
// import VisitController from '../controllers/visit-controller'
// const Visit = new VisitController()

export default class UserController extends BaseController {
  constructor (config) {
    super(User, '_id')
    this.config = config
    // this.populate = 'toolConsumer'
    // this.populate = [{path: 'currentVisit', populate: {path: 'activity'}}]
  }

  /*
  updateSessionData (id, data) {
    return this.baseFindOneQuery(id)
    .then((modelInstance) => {
      if (modelInstance) {
        let visitId = modelInstance.currentVisit._id
        console.log('invoke Visit.updateSessionData ', data)
        return Visit.updateSessionData(visitId, data)
      }
    })
    .then((visit) => {
      console.log('updateSessionData return ...', visit.sessionData)
      return visit.sessionData
    })
  }
  */

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
    return this.baseFindOneQuery(id)
    .populate([{path: 'asInstructorVisits', model: 'Visit', populate: {path: 'activity', model: 'Activity'}}])
    .populate([{path: 'asInstructorVisits', model: 'Visit', populate: {path: 'assignment', model: 'Assignment'}}])
    .select('asInstructorVisits')
    .then((modelInstance) => {
      var cnt = modelInstance && modelInstance.asInstructorVisits ? modelInstance.asInstructorVisits.length : 0
      debug('listActivitiesAsInstructor found: ' + cnt)
      return modelInstance
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
  route () {
    const router = super.route()

    // router.get('/:key/userAuthenticated', (req, res) => {
    //   var session = req.session.passport
    //   // var cookies = req.cookies
    //   // var user = req.user
    //   var userId = req.params.key
    //   var url = 'http://localhost:28000?user=' + userId
    //
    //   console.log('authenticated user: ', userId)
    //   console.log('authenticated session: ', session)
    //   console.log('authenticated url: ', url)
    //   // res.status = 302
    //   // res.setHeader('Location', url)
    //   res.redirect(url)
    //   // res.redirect('/users')
    // })

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

/*
    router.get('/:key/sessionData', (req, res) => {
      this
      .read(req.params.key)
      .then((results) => {
        var user = results.user
        var visit = user.currentVisit || {sessionData: {}}
        var data = Object.assign({}, visit.sessionData)
        console.log('extact session data from results', data)
        return data
      })
      .then(ok(res))
      .then(null, fail(res))
    })

    router.put('/:key/sessionData', (req, res) => {
      this
      .updateSessionData(req.params.key, req.body)
      .then((result) => {
        let sd = result.sessionData
        console.log('result.sessionData', sd)
        return sd
      })
      .then(ok(res))
      .then(null, fail(res))
    })
    */
    return router
  }
}
