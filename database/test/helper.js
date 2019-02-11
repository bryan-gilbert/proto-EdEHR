import Consumer from '../models/consumer'
import Assignment from '../models/assignment'
const { ltiVersions, LTI_BASIC } = require('../utils/lti')

export default class Helper {
  constructor() {
    this.clear = true
  }
  setClear(bool) {
    this.clear = bool
  }

  before(done, mongoose) {
    mongoose.connect(
      'mongodb://localhost:27018/unittest',
      { useNewUrlParser: true }
    )
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error'))
    db.once('open', function() {
      // console.log('We are connected to test database!');
      done()
    })
  }

  afterTests(done, mongoose, collection) {
    function close() {
      mongoose.connection.close(function() {
        // console.log('Close test database!');
        done()
      })
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropCollection(collection, function(err) {
        // console.log(`dropped collection ${collection}!`);
        close()
      })
    } else {
      close()
    }
  }

  afterDropDatabase(done, mongoose) {
    function close() {
      mongoose.connection.close(function() {
        // console.log('Close test database!');
        done()
      })
    }
    if (this.clear) {
      // console.log(`drop collection ${collection}!`);
      mongoose.connection.db.dropDatabase(function(err) {
        console.log('dropped dropDatabase')
        close()
      })
    } else {
      close()
    }
  }

  sampleActivity(consumer, assignment) {
    return {
      toolConsumer: consumer._id,
      resource_link_id: '1234',
      context_id: 'context id',
      context_label: 'test context label',
      context_title: 'title',
      context_type: 'context type',
      resource_link_title: 'resource link title',
      resource_link_description: 'blah blah',
      assignment: assignment
    }
  }

  sampleAssignmentSpec(seedDataObject, key) {
    return {
      externalId: key || '1234',
      name: 'test assignment',
      description: 'an assignment',
      ehrRoutePath: '/ehr/path',
      ehrRouteName: 'pathName',
      seedData: seedDataObject
    }
  }
  sampleConsumerSpec() {
    return {
      oauth_consumer_key: '1234',
      oauth_consumer_secret: '1234',
      lti_version: '1.0'
    }
  }

  sampleValidLtiData() {
    let ltiData = {
      resource_link_id: '1234',
      user_id: '1',
      lti_version: ltiVersions()[0],
      lti_message_type: LTI_BASIC,
      roles:'student',
      oauth_consumer_key: 'aKey',
      oauth_consumer_secret: 'aSecrete',
      context_id: 'some context id',
      custom_assignment: '1'
    }
    return ltiData
  }

  createConsumer() {
    const model = new Consumer(this.sampleConsumerSpec())
    return model.save()
  }

  createAssignment(seedData) {
    const model = new Assignment(this.sampleAssignmentSpec(seedData))
    return model.save()
  }
}
