import BaseController from './base'
import ActivitySession from '../models/activity-session'

export default class ActivitySessionController extends BaseController {
  constructor () {
    super(ActivitySession, '_id')
  }
}
