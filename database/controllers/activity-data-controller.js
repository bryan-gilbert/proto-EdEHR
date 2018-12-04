import {ok, fail} from './utils'
import BaseController from './base'
import ActivityData from '../models/activity-data'

const debug = require('debug')('server')

export default class VisitController extends BaseController {
  constructor () {
    super(ActivityData, '_id')
  }
  updateAssignmentData (id, data) {
    return this.baseFindOneQuery(id)
    .then((activityData) => {
      if (activityData) {
        activityData.assignmentData = data
        return activityData.save()
      }
    })
  }

  updateEvaluationData (id, data) {
    return this.baseFindOneQuery(id)
    .then((activityData) => {
      if (activityData) {
        activityData.evaluationData = data.evaluationData
        return activityData.save()
      }
    })
  }

  route () {
    const router = super.route()

    router.put('/assignment-data/:key', (req, res) => {
      var id = req.params.key
      var data = req.body
      this
      .updateAssignmentData(id, data)
      .then(ok(res))
      .then(null, fail(res))
    })

    router.put('/evaluation-data/:key', (req, res) => {
      var id = req.params.key
      var data = req.body
      this
      .updateEvaluationData(id, data)
      .then(ok(res))
      .then(null, fail(res))
    })
    return router
  }
}