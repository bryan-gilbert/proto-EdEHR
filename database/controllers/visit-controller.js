import BaseController from './base'
import Visit from '../models/visit'

export default class VisitController extends BaseController {
  constructor () {
    super(Visit, '_id')
    this.populate = 'activity'
  }

  /**
   */
  updateSessionData (id, data) {
    var filter = {}
    filter[this.key] = id

    return this.model
    .findOne(filter)
    .then((modelInstance) => {
      if (modelInstance) {
        modelInstance.sessionData = data
        return modelInstance.save()
      }
    })
    // .then((modelInstance) => {
    //   var response = {}
    //   response[this.modelName] = modelInstance
    //   return response
    // })
  }
}
