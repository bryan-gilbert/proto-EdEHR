import BaseController from './base'
import Assignment from '../models/assignment'
const debug = require('debug')('server')

export default class AssignmentController extends BaseController {
  constructor () {
    super(Assignment, '_id')
    this.defaultNonAssignment = 'defaultNonAssignment'
  }

  locateAssignmentByExternalId (externalId) {
    const _this = this
    var query = { externalId: externalId }
    debug('Assignment search for ' + externalId)
    return this.findOne(query)
    .then((result) => {
      if (!result) {
        query = { externalId: _this.defaultNonAssignment }
        console.log('Could not find assignment for ' + externalId + '. Search for ' + _this.defaultNonAssignment)
        return _this.findOne(query)
      }
      return result
    })
  }
}
