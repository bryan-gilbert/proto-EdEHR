import BaseController from './base'
import Visit from '../models/visit'

export default class VisitController extends BaseController {
  constructor () {
    super(Visit, '_id')
  }
}
