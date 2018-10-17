const should = require('should')
const lti = require('ims-lti')

/* global describe it   */
describe('Signer', () =>
  it('should include query params', function (done) {
    const consumerKey = '1234'
    const consumerSecret = 'secret'
    const provider = new lti.Provider(consumerKey, consumerSecret)
    const signer = provider.signer
    const req = {
      url: '/developers/LTI/test/v1p1/tool.php?foo=123&foo=bar',
      method: 'POST',
      connection: {
        encrypted: undefined
      },
      headers: {
        host: 'www.imsglobal.org'
      }
    }
    const body = {
      resource_link_id: 'rsc1',
      lti_message_type: 'basic-lti-launch-request',
      lti_version: 'LTI-1p0',
      oauth_callback: 'about:blank',
      oauth_version: '1.0',
      oauth_nonce: '7ee33f6dc94117e792ff529898ce3953',
      oauth_timestamp: '1397708483',
      oauth_consumer_key: '12345',
      oauth_signature_method: 'HMAC-SHA1'
    }
    const expected = 'W0CaaD+UkYflap/1k++F5DKK/aE='

    const signature = signer.build_signature(req, body, consumerSecret)
    should.equal(signature, expected)

    done()
  }))
