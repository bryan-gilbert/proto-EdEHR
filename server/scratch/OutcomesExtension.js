const should = require('should')

const shared = require('./shared')
const lti = require('../')
/* global describe it before after */
describe('LTI.Extensions.Outcomes', () => {
  before(() => {
    this.server = shared.outcomesWebServer()
    this.provider = new lti.Provider('key', 'secret')

    this.server.listen(1337, '127.0.0.1')

    const req = {
      url: '/test',
      method: 'POST',
      body: {
        ext_outcome_data_values_accepted: 'text,url',
        lis_outcome_service_url: 'http://127.0.0.1:1337/service/url',
        lis_result_sourcedid: '12',
        lti_message_type: 'basic-lti-launch-request',
        lti_version: 'LTI-1p0'
      },
      get () {
        return 'localhost'
      }
    }

    this.provider.parse_request(req)
  })

  after(() => {
    this.server.close()
    this.server = null
  })

  describe('replace', () => {
    it('should be able to send a valid request', next => {
      this.provider.outcome_service.send_replace_result(0.5, (err, result) => {
        should.not.exist(err)
        result.should.equal(true)
        next()
      })
    })

    it('should handle a result higher than 1', () => {
      this.provider.outcome_service.send_replace_result(5, (err, result) => {
        should.exist(err)
        result.should.equal(false)
      })
    })

    it('should handle a result lower than 0', () => {
      this.provider.outcome_service.send_replace_result(-5, (err, result) => {
        should.exist(err)
        result.should.equal(false)
      })
    })

    it('should handle a result that is undefined', () => {
      this.provider.outcome_service.send_replace_result(null, (err, result) => {
        should.exist(err)
        result.should.equal(false)
      })
    })

    it('should be able to send a text payload', () => {
      this.provider.outcome_service.send_replace_result_with_text(
        0.5,
        'Hello, world!',
        (err, result) => {
          should.not.exist(err)
          result.should.equal(true)
        }
      )
    })

    it('should be able to send a text payload', () => {
      this.provider.outcome_service.send_replace_result_with_url(
        0.5,
        'http://test.com',
        (err, result) => {
          should.not.exist(err)
          result.should.equal(true)
        }
      )
    })

    it('should not be able to send a payload that the consumer does not support', () => {
      const provider = new lti.Provider('key', 'secret')
      provider.parse_request({
        body: {
          ext_outcome_data_values_accepted: 'url',
          lis_outcome_service_url: 'http://127.0.0.1:1337/service/url',
          lis_result_sourcedid: '12'
        }
      })

      provider.outcome_service.send_replace_result_with_text(
        0.5,
        'Hello, world!',
        (err, result) => {
          should.exist(err)
          result.should.equal(false)
        }
      )
    })

    it('should return the error message from the response', next => {
      const provider = new lti.Provider('key', 'wrong_secret')
      provider.parse_request({
        body: {
          lis_outcome_service_url: 'http://127.0.0.1:1337/service/url',
          lis_result_sourcedid: '12'
        }
      })

      provider.outcome_service.send_replace_result(0, (err, result) => {
        should.exist(err)
        err.message.should.equal('The signature provided is not valid')
        result.should.equal(false)
        next()
      })
    })
  })

  describe('read', () => {
    it('should be able to read a result given an id', next => {
      this.provider.outcome_service.send_read_result((err, result) => {
        should.not.exist(err)
        result.should.equal(0.5)
        next()
      })
    })
  })

  describe('delete', () => {
    it('should be able to delete a result given an id', next => {
      this.provider.outcome_service.send_delete_result((err, result) => {
        should.not.exist(err)
        result.should.equal(true)
        next()
      })
    })
  })
})
