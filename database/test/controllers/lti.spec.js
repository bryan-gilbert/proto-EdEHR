var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID
import HMAC_SHA1 from '../../node_modules/ims-lti/src/hmac-sha1'

import LTIController from '../../controllers/lti'
import Helper from '../helper'
const helper = new Helper()
const { ltiVersions, LTI_BASIC } = require('../../utils/lti')

/* global describe it */
describe('LTI controller testing', function() {
  before(function(done) {
    helper.before(done, mongoose)
  })
  after(function(done) {
    helper.afterDropDatabase(done, mongoose)
  })

  let theConsumer
  let oauth_consumer_key
  let oauth_consumer_secret
  it('Create a tool consumer for testing ', function(done) {
    helper.createConsumer()
    .then(doc => {
      theConsumer = doc
      oauth_consumer_key = theConsumer.oauth_consumer_key
      oauth_consumer_secret = theConsumer.oauth_consumer_secret
      done()
    })
  })

  let config = {
    clientUrl: 'some/url'
  }
  let ltiController
  it('create LTI controller', function(done) {
    ltiController = new LTIController(config)
    should.exist(ltiController)

    ltiController.should.have.property('route')
    ltiController.should.have.property('initializeApp')
    ltiController.should.have.property('strategyVerify')
    ltiController.should.have.property('validateLti')
    ltiController.should.have.property('findCreateUser')
    ltiController.should.have.property('locateAssignment')
    ltiController.should.have.property('updateToolConsumer')
    ltiController.should.have.property('updateActivity')
    ltiController.should.have.property('updateVisit')

    let route = ltiController.route()
    should.exist(route)
    done()
  })

  it('validate lti data', function(done) {
    function expectErrorCallback(error){
      should.exist(error)
      error.should.have.property('name')
      error.should.have.property('message')
      error.name.should.equal('ParameterError')
      console.log(error.message)
      done()
    }
    let ltiData = helper.sampleValidLtiData()
    let result = ltiController.validateLti(ltiData,expectErrorCallback)
    should.ok(result)
    done()
  })
  it('validate invalid lti data', function(done) {
    function expectErrorCallback(error){
      should.exist(error)
      error.should.have.property('name')
      error.should.have.property('message')
      error.name.should.equal('ParameterError')
      // console.log(error.message)
      done()
    }
    let ltiData = helper.sampleValidLtiData()
    delete ltiData.custom_assignment
    let result = ltiController.validateLti(ltiData,expectErrorCallback)
    should.fail(result)
    done()
  })

  it('should return true if good headers and oauth', done => {
    let ltiData = helper.sampleValidLtiData()
    ltiData.oauth_consumer_key = oauth_consumer_key
    ltiData.oauth_consumer_secret = oauth_consumer_secret;
    ltiData = Object.assign(ltiData,{
      resource_link_id: 'http://link-to-resource.com/resource',
      oauth_customer_key: 'key',
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: Math.round(Date.now() / 1000),
      oauth_nonce: Date.now() + Math.random() * 100,
    })
    const req = {
      url: 'http://example.org/test',
      method: 'POST',
      connection: {
        encrypted: undefined,
      },
      headers: {
        host: 'localhost',
      },
      body: ltiData,
    };
    let signer = new HMAC_SHA1();
    //sign the fake request
    const signature = signer.build_signature(
      req,
      req.body,
      'secret'
    );
    req.body.oauth_signature = signature;

    ltiController.strategyVerify(req, function(err, valid) {
      should.not.exist(err);
      valid.should.equal(true);
      done();
    });
  });

  // strategyVerify
  it.skip('lti strategyVerify', function(done) {
    let ltiData = helper.sampleValidLtiData()
    ltiData.oauth_consumer_key = oauth_consumer_key
    ltiData.oauth_consumer_secret = oauth_consumer_secret;
    let req = {
      body: ltiData,
      connection: ''
    }
    function emptyCallback(error, user){
      console.log('Inside callback', error, user)
    }
    let result = ltiController.strategyVerify(req,emptyCallback)
    console.log('after strategy verify ', result)
    done()
  })

})
