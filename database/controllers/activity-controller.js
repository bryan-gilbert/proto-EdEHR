import BaseController from './base'
import Activity from '../models/activity'

export default class ActivityController extends BaseController {
  constructor () {
    super(Activity, '_id')
  }
}
