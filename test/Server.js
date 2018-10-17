// const app = require('../server/app')
// const should = require('should')
const request = require('supertest')
const lti = require('ims-lti')

/* global describe it  beforeEach afterEach */
describe('Server ', function () {
  describe('Server loading express', function () {
    var server
    beforeEach(function () {
      delete require.cache[require.resolve('./server')]
      server = require('../server/server')
      console.log('create server')
    })
    afterEach(function (done) {
      if (server) {
        console.log('close server')
        server.close(() => {
          server = undefined
          done()
        })
      }
    })
    it('responds to /', function testSlash (done) {
      request(server)
      .get('/')
      .expect(200)
      .end(done)
    })
    it('responds to /users', function testSlash (done) {
      request(server)
      .get('/users')
      .expect(200)
      .end(done)
    })
    it('404 foo bar', function testPath (done) {
      request(server)
      .get('/foo/bar')
      .expect(404)
      .end(done)
    })
  })

  describe('LTI tests', function () {
    const ltiKey = 'edehrkey'
    const ltiSecret = 'edehrsecret'
    const provider = new lti.Provider(ltiKey, ltiSecret)

    it('responds to /launch_lti with invalid data', function testSlash (done) {
      console.log('responds to /launch_lti with invalid data')

      request(server)
        .post('/launch_lti')
        .send({oauth_consumer_key: 'mykeyagain', oauth_signature: 'oauth_signature'})
        .set('Accept', 'application/json')
        .expect(403)
        .end(done)
    })
    it('should return true if good headers and oauth', done => {
      console.log('responds to /launch_lti with good headers and oauth')
      const url = '/launch_lti'
      const req = {
        url: url,
        method: 'POST',
        connection: {
          encrypted: undefined
        },
        headers: {
          host: 'localhost'
        },
        body: {
          lti_message_type: 'basic-lti-launch-request',
          lti_version: 'LTI-1p0',
          resource_link_id: 'http://link-to-resource.com/resource',
          oauth_consumer_key: ltiKey,
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100
        }
      }
        // sign the fake request
      const signature = provider.signer.build_signature(
          req,
          req.body,
          ltiSecret
        )
      req.body.oauth_signature = signature
      request(server)
        .post(url)
        .send(req.body)
        .set('Accept', 'application/json')
        .expect(403)
        .end(done)
    })
  })
})
