import BaseController from './base'
import Assignment from '../models/assignment'

export default class AssignmentController extends BaseController {
  constructor () {
    super(Assignment, '_id')
  }
}
