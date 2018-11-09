import BaseController from './base'
import Consumer from '../models/consumer'
const {ltiVersions} = require('./utils')
const KEY = 'edehrkey'
const SECRET = 'edehrsecret'

export default class ConsumerController extends BaseController {
  constructor () {
    super(Consumer, '_id')
  }

  initializeApp (app) {
    app.toolConsumer = this
    this.app = app
    return this.findOneConsumerByKey(KEY)
    .then((found) => {
      console.log('Initialize consumer and look for default ', KEY)
      if (found) {
        console.log('found default consumer', found.tool_consumer_instance_name)
      } else {
        console.log('No default found so create one')
        const def = {
          oauth_consumer_key: KEY,
          oauth_consumer_secret: SECRET,
          lti_version: ltiVersions()[0],
          tool_consumer_info_product_family_code: 'EdEHR',
          tool_consumer_info_version: 'prototype',
          tool_consumer_instance_description: 'Use for prototyping',
          tool_consumer_instance_guid: 'EdEHRPrototype',
          tool_consumer_instance_name: 'EdEHRPrototype'
        }
        Consumer.create(def)
        .then((response, reject) => {
          console.log('save results', response, reject)
        })
      }
    })
  }

  findOneConsumerByKey (key) {
    return Consumer.find({oauth_consumer_key: key})
    .then((found) => {
      if (found && found.length > 0) {
        const consumer = found[0]
        console.log('Consumer key ', key, 'found consumer', consumer.tool_consumer_instance_name)
        return consumer
      }
      return null
    })
  }
}
