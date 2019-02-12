import BaseController from './base'
import Consumer from '../models/consumer'
const {ltiVersions} = require('../utils/lti')
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
      }
    })
  }

  findOneConsumerByKey (key) {
    return Consumer.find({oauth_consumer_key: key})
    .then((found) => {
      if (found && found.length > 0) {
        const consumer = found[0]
        // console.log('Consumer key ', key, 'found consumer', consumer.tool_consumer_instance_name)
        return consumer
      }
      return null
    })
  }
}
