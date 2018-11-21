import BaseController from './base'
import Activity from '../models/activity'
import {ConfigurationChangeError} from '../utils/errors'

const debug = require('debug')('server')

export default class ActivityController extends BaseController {
  constructor () {
    super(Activity, '_id')
  }

  updateCreateActivity (ltiData, toolConsumerId) {
    const _this = this
    debug('updateCreateActivity search for existing activity ' + ltiData.resource_link_id)
    return new Promise(function (resolve, reject) {
      _this.findOne({$and: [{resource_link_id: ltiData.resource_link_id}, {toolConsumer: toolConsumerId}]})
      .then((activity) => {
        if (activity) {
          debug('updateCreateActivity found activity ' + activity._id)
          // Don't allow substantial changes
          if (activity.context_id !== ltiData.context_id) {
            let msg = 'Unexpected change in activity context id.  Was: ' + activity.context_id + ' now ' + ltiData.context_id
            debug('updateActivity ' + msg)
            reject(new ConfigurationChangeError(msg))
          }
          if (activity.custom_assignment !== ltiData.custom_assignment) {
            let msg = 'Unexpected change in activity custom assignment id.  Was: ' + activity.custom_assignment + ' now ' + ltiData.custom_assignment
            debug('updateCreateActivity ' + msg)
            reject(new ConfigurationChangeError(msg))
          }
          // update cosmetic changes
          let current = JSON.stringify(activity)
          activity.context_label = ltiData.context_label
          activity.context_title = ltiData.context_title
          activity.context_type = ltiData.context_type
          activity.resource_link_title = ltiData.resource_link_title
          activity.resource_link_description = ltiData.resource_link_description
          let updated = JSON.stringify(activity)

          // If anything has changed then update the database
          if (current !== updated) {
            debug('updateCreateActivity there is something different in the activity. Saving new activity data ' + updated)
            return activity.save()
          } else {
            return activity
          }
        } else {
          // create a new activity record
          return _this.createActivityRecord(ltiData, toolConsumerId)
        }
      })
      .then((activity) => {
        debug('updateCreateActivity resolve ' + activity._id)
        resolve(activity)
      })
    })
  }

  createActivityRecord (ltiData, toolConsumerId) {
    var data = {
      resource_link_id: ltiData.resource_link_id,
      toolConsumer: toolConsumerId,
      custom_assignment: ltiData.custom_assignment,
      context_id: ltiData.context_id,
      context_label: ltiData.context_label,
      context_title: ltiData.context_title,
      context_type: ltiData.context_type,
      resource_link_title: ltiData.resource_link_title,
      resource_link_description: ltiData.resource_link_description
    }
    console.log('updateCreateActivity create new activity record ' + JSON.stringify((data)))
    return this.create(data)
    .then((newActivity) => {
      console.log('updateCreateActivity new activity ' + newActivity._id)
      return newActivity
    })
  }
}
