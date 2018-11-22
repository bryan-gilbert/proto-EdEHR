import BaseController from './base'
import Assignment from '../models/assignment'
const debug = require('debug')('server')

export default class AssignmentController extends BaseController {
  constructor () {
    super(Assignment, '_id')
  }

  locateAssignmentByExternalId (externalId) {
    var query = { externalId: externalId }
    debug('Assignment search for ' + externalId)
    return this.findOne(query)
  }
}
