import BaseController from './base'
import SeedData from '../models/seed-data'
const debug = require('debug')('server')

export default class SeedDataController extends BaseController {
  constructor () {
    super(SeedData, '_id')
  }
}
