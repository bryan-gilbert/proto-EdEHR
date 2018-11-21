import BaseController from './base'
import Assignment from '../models/assignment'

export default class AssignmentController extends BaseController {
  constructor () {
    super(Assignment, '_id')
  }

  locateAssignmentByExternalId (externalId) {
    var query = { external_id: externalId }
    console.log('Assignment search for ' + externalId)
    return this.findOne(query)
  }
}
