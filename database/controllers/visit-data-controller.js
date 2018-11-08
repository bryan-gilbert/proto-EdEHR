import BaseController from './base'
import VisitData from '../models/visit-data'

export default class VisitController extends BaseController {
  constructor () {
    super(VisitData, '_id')
  }
}
