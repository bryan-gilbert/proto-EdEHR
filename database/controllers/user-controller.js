import BaseController from './base'
import User from '../models/user'

export default class UserController extends BaseController {
  constructor () {
    super(User, '_id')
  }

  controllerMethod () {
    console.log('here in a controller defined method of the User model')
  }
}
