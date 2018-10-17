const Consumer = require('../server/consumer')
const should = require('should')
const consumerKey = 'key'
const consumerSecret = 'secret'
const providerUrl = 'http://10.2.2.3:3000/lti_launch'

/* global describe it before  */
describe('Consumer', function () {
  before(() => {
    this.consumer = new Consumer(consumerSecret, consumerKey, providerUrl)
  })

  describe('Consumer should exist', () => {
    it('should exist', () => {
      should.exist(this.consumer)
    })
    it('consumer should provide nonce', () => {
      var n = this.consumer.nonce()
      should.exist(n)
    })
    it('consumer  get initial params', () => {
      var params = this.consumer.getInitialParams()
      should.exist(params)
      params.lti_message_type.should.equal('basic-lti-launch-request')
      params.lti_version.should.equal('LTI-1p0')
    })
    it('consumer  get initial params', () => {
      var params = this.consumer.getInitialParams()
      should.exist(params)
      params.lti_message_type.should.equal('basic-lti-launch-request')
      params.lti_version.should.equal('LTI-1p0')
      params.oauth_consumer_key.should.equal(consumerKey)
      params.oauth_callback.should.equal('about:blank')
    })
  })

  describe('Consumer validate', () => {
    it('consumer validate some params', () => {
      var params = this.consumer.getInitialParams()
      params.resource_link_id = 'some resource'
      params.resource_link_title = 'title'
      params.resource_link_description = 'describe the resource'
      params.launch_presentation_return_url = 'http://lti.example.com/presentation_return'
      params.lis_result_sourcedid = 'source id'
      var isValid = this.consumer.validParameters(params)
      should.equal(isValid, true)
    })
    it('consumer validate invalid params', () => {
      var params = this.consumer.getInitialParams()
      params.resource_link_id = null
      var isValid = this.consumer.validParameters(params)
      should.equal(isValid, false)
    })
    it('consumer validate content item selection request params', () => {
      var params = this.consumer.getInitialParams()
      params.lti_message_type = 'ContentItemSelectionRequest'
      params.resource_link_id = null
      params.resource_link_title = null
      params.resource_link_description = null
      params.launch_presentation_return_url = null
      params.lis_result_sourcedid = null
      var isValid = this.consumer.validParameters(params)
      should.equal(isValid, true)
    })
  })

  describe('Consumer build and sign requests', () => {
    it('consumer build request url', () => {
      var req = this.consumer.buildRequestFromUrl(providerUrl)
      should.exist(req)
      req.url.href.should.equal(providerUrl)
      req.method.should.equal('post')
    })
    it('consumer sign some params', () => {
      var params = this.consumer.getInitialParams()
      params.resource_link_id = 'some resource'
      params.resource_link_title = 'title'
      params.resource_link_description = 'describe the resource'
      params.launch_presentation_return_url = 'http://lti.example.com/presentation_return'
      params.lis_result_sourcedid = 'source id'
      var isValid = this.consumer.signRequest(params, function (err, val) {
        should.not.exist(err)
      })
      should.exist(isValid.oauth_signature)
    })
    it('consumer sign invalid params', () => {
      var params = this.consumer.getInitialParams()
      params.resource_link_id = null
      var isValid = this.consumer.signRequest(params, function (err, val) {
        should.exist(err)
      })
      should.equal(isValid, undefined)
    })
  })
})
