const should = require('should')
const lti = require('ims-lti')

/* global describe it before  */
describe('LTI.Provider', function () {
  before(() => {
    this.lti = lti
  })

  describe('Initialization', () => {
    it('should accept (consumerKey, consumerSecret)', () => {
      const consumerKey = '10204'
      const consumerSecret = 'secret-shhh'

      const provider = new this.lti.Provider(consumerKey, consumerSecret)
      provider.should.be.an.instanceOf(Object)
      provider.consumer_key.should.equal(consumerKey)
      provider.consumer_secret.should.equal(consumerSecret)
      provider.signer.toString().should.equal('HMAC_SHA1')
    })

    it('should accept (consumerKey, consumerSecret, nonceStore, sig)', () => {
      const sig = {
        me: 3,
        you: 1,
        total: 4
      }

      const provider = new this.lti.Provider(
        '10204',
        'secret-shhh',
        undefined,
        sig
      )
      provider.signer.should.equal(sig)
    })

    it('should accept (consumerKey, consumerSecret, nonceStore, sig)', () => {
      const nonceStore = {
        isNonceStore () {
          return true
        },
        isNew () {},
        setUsed () {}
      }

      const provider = new this.lti.Provider(
        '10204',
        'secret-shhh',
        nonceStore
      )
      provider.nonceStore.should.equal(nonceStore)
    })

    it('should throw an error if no consumerKey or consumerSecret', () => {
      (() => new this.lti.Provider()).should.throw(lti.Errors.ConsumerError);
      (() => new this.lti.Provider('consumer-key')).should.throw(
        lti.Errors.ConsumerError
      )
    })
  })

  describe('Structure', () => {
    before(() => {
      this.provider = new this.lti.Provider('key', 'secret')
    })
    it('should have valid_request method', () => {
      should.exist(this.provider.valid_request)
      this.provider.valid_request.should.be.a.Function()
    })
  })

  describe('.valid_request method', () => {
    before(() => {
      this.provider = new this.lti.Provider('key', 'secret')
      this.signer = this.provider.signer
    })

    it('should return false if missing lti_message_type', done => {
      const reqMissingType = {
        url: '/',
        body: {
          lti_message_type: '',
          lti_version: 'LTI-1p0',
          resource_link_id: 'http://link-to-resource.com/resource'
        }
      }
      this.provider.valid_request(reqMissingType, function (err, valid) {
        err.should.not.equal(null)
        err.should.be.instanceof(lti.Errors.ParameterError)
        valid.should.equal(false)
        done()
      })
    })

    it('should return false if incorrect LTI version', done => {
      const reqWrongVersion = {
        url: '/',
        body: {
          lti_message_type: 'basic-lti-launch-request',
          lti_version: 'LTI-0p0',
          resource_link_id: 'http://link-to-resource.com/resource'
        }
      }
      this.provider.valid_request(reqWrongVersion, function (err, valid) {
        err.should.not.equal(null)
        err.should.be.instanceof(lti.Errors.ParameterError)
        valid.should.equal(false)
        done()
      })
    })

    it('should return false if no resource_link_id', done => {
      const reqNoResourceLink = {
        url: '/',
        body: {
          lti_message_type: 'basic-lti-launch-request',
          lti_version: 'LTI-1p0'
        }
      }
      this.provider.valid_request(reqNoResourceLink, function (err, valid) {
        err.should.not.equal(null)
        err.should.be.instanceof(lti.Errors.ParameterError)
        valid.should.equal(false)
        done()
      })
    })

    it('should return false if bad oauth', done => {
      const req = {
        url: '/test',
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
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100
        }
      }

      // sign the fake request
      const signature = this.provider.signer.build_signature(req, 'secret')
      req.body.oauth_signature = signature

      // Break the signature
      req.body.oauth_signature += 'garbage'

      this.provider.valid_request(req, function (err, valid) {
        err.should.not.equal(null)
        err.should.be.instanceof(lti.Errors.SignatureError)
        valid.should.equal(false)
        done()
      })
    })

    it('should return true if good headers and oauth', done => {
      const req = {
        url: '/test',
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
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100
        }
      }

      // sign the fake request
      const signature = this.provider.signer.build_signature(
        req,
        req.body,
        'secret'
      )
      req.body.oauth_signature = signature

      this.provider.valid_request(req, function (err, valid) {
        should.not.exist(err)
        valid.should.equal(true)
        done()
      })
    })

    it('should return true if lti_message_type is ContentItemSelectionRequest', done => {
      const req = {
        url: '/test',
        method: 'POST',
        connection: {
          encrypted: undefined
        },
        headers: {
          host: 'localhost'
        },
        body: {
          lti_message_type: 'ContentItemSelectionRequest',
          lti_version: 'LTI-1p0',
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100
        }
      }

      // sign the fake request
      const signature = this.provider.signer.build_signature(
        req,
        req.body,
        'secret'
      )
      req.body.oauth_signature = signature

      this.provider.valid_request(req, function (err, valid) {
        should.not.exist(err)
        valid.should.equal(true)
        done()
      })
    });

    [
      'resource_link_id',
      'resource_link_title',
      'resource_link_description',
      'launch_presentation_return_url',
      'lis_result_sourcedid'
    ].forEach(invalidField => {
      it(`should return false if lti_message_type is ContentItemSelectionRequest and there is a "${invalidField}" field`, done => {
        const req = {
          url: '/test',
          method: 'POST',
          connection: {
            encrypted: undefined
          },
          headers: {
            host: 'localhost'
          },
          body: {
            lti_message_type: 'ContentItemSelectionRequest',
            lti_version: 'LTI-1p0',
            oauth_customer_key: 'key',
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: Math.round(Date.now() / 1000),
            oauth_nonce: Date.now() + Math.random() * 100
          }
        }
        req.body[invalidField] = 'Invalid Field'

        // sign the fake request
        const signature = this.provider.signer.build_signature(
          req,
          req.body,
          'secret'
        )
        req.body.oauth_signature = signature

        this.provider.valid_request(req, function (err, valid) {
          should.exist(err)
          valid.should.equal(false)
          done()
        })
      })
    })

    it('should special case and deduplicate Canvas requests', done => {
      const req = {
        url: '/test?test=x&test2=y&test2=z',
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
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100,
          test: 'x',
          test2: ['y', 'z'],
          tool_consumer_info_product_family_code: 'canvas'
        },
        query: {
          test: 'x',
          test2: ['z', 'y']
        }
      }

      const signature = this.provider.signer.build_signature(
        req,
        req.body,
        'secret'
      )
      req.body.oauth_signature = signature

      this.provider.valid_request(req, function (err, valid) {
        should.not.exist(err)
        valid.should.equal(true)
        done()
      })
    })

    it('should succeed with a hapi style req object', done => {
      const timestamp = Math.round(Date.now() / 1000)
      const nonce = Date.now() + Math.random() * 100

      // Compute signature from express style req
      const expressReq = {
        url: '/test',
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
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: timestamp,
          oauth_nonce: nonce
        }
      }

      const signature = this.provider.signer.build_signature(
        expressReq,
        expressReq.body,
        'secret'
      )

      const hapiReq = {
        raw: {
          req: {
            url: '/test',
            method: 'POST',
            connection: {
              encrypted: undefined
            },
            headers: {
              host: 'localhost'
            }
          }
        },
        payload: {
          lti_message_type: 'basic-lti-launch-request',
          lti_version: 'LTI-1p0',
          resource_link_id: 'http://link-to-resource.com/resource',
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: timestamp,
          oauth_nonce: nonce,
          oauth_signature: signature
        }
      }

      this.provider.valid_request(hapiReq, function (err, valid) {
        should.not.exist(err)
        valid.should.equal(true)
        done()
      })
    })

    it('should return false if nonce already seen', done => {
      const req = {
        url: '/test',
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
          oauth_customer_key: 'key',
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_nonce: Date.now() + Math.random() * 100
        }
      }

      // sign the fake request
      const signature = this.provider.signer.build_signature(
        req,
        req.body,
        'secret'
      )
      req.body.oauth_signature = signature

      this.provider.valid_request(req, (err, valid) => {
        should.not.exist(err)
        valid.should.equal(true)
        this.provider.valid_request(req, function (err, valid) {
          should.exist(err)
          err.should.be.instanceof(lti.Errors.NonceError)
          valid.should.equal(false)
          done()
        })
      })
    })
  })

  describe('mapping', () => {
    before(() => {
      this.provider = new this.lti.Provider('key', 'secret')

      const req = {
        url: '/test',
        method: 'POST',
        connection: {
          encrypted: undefined
        },
        headers: {
          host: 'localhost'
        },
        body: {
          context_id: '4',
          context_label: 'PHYS 2112',
          context_title: 'Introduction To Physics',
          custom_param: '23',
          ext_lms: 'moodle-2',
          ext_submit: 'Press to launch this activity',
          launch_presentation_locale: 'en',
          launch_presentation_return_url:
            'http://localhost:8888/moodle25/mod/lti/return.php?course=4&launch_container=4&instanceid=1',
          lis_outcome_service_url:
            'http://localhost:8888/moodle25/mod/lti/service.php',
          lis_person_contact_email_primary: 'james@courseshark.com',
          lis_person_name_family: 'Rundquist',
          lis_person_name_full: 'James Rundquist',
          lis_person_name_given: 'James',
          lis_result_sourcedid:
            '{"data":{"instanceid":"1","userid":"4","launchid":1480927086},"hash":"03382572ba1bf35bcd99f9a9cbd44004c8f96f89c96d160a7b779a4ef89c70d5"}',
          lti_message_type: 'basic-lti-launch-request',
          lti_version: 'LTI-1p0',
          oauth_callback: 'about:blank',
          oauth_consumerKey: 'moodle',
          oauth_nonce: Date.now() + Math.random() * 100,
          oauth_signature_method: 'HMAC-SHA1',
          oauth_timestamp: Math.round(Date.now() / 1000),
          oauth_version: '1.0',
          resource_link_description: "<p>A test of the student's wits </p>",
          resource_link_id: '1',
          resource_link_title: 'Fun LTI example!',
          roles: 'Learner',
          role_scope_mentor: '1234,5678,12%2C34',
          tool_consumer_info_product_family_code: 'moodle',
          tool_consumer_info_version: '2013051400',
          tool_consumer_instance_guid: 'localhost',
          user_id: '4'
        }
      }

      // sign the request
      req.body.oauth_signature = this.provider.signer.build_signature(
        req,
        'secret'
      )

      this.provider.parse_request(req)
    })

    it('should create a filled @body', () => {
      should.exist(this.provider.body)
      this.provider.body.should.have.property('context_id')
      this.provider.body.should.have.property('context_label')
      this.provider.body.should.have.property('context_title')
      this.provider.body.should.have.property('custom_param')
      this.provider.body.should.have.property('ext_lms')
      this.provider.body.should.have.property('ext_submit')
      this.provider.body.should.have.property('launch_presentation_locale')
      this.provider.body.should.have.property('launch_presentation_return_url')
      this.provider.body.should.have.property('lis_outcome_service_url')
      this.provider.body.should.have.property(
        'lis_person_contact_email_primary'
      )
      this.provider.body.should.have.property('lis_person_name_family')
      this.provider.body.should.have.property('lis_person_name_full')
      this.provider.body.should.have.property('lis_person_name_given')
      this.provider.body.should.have.property('lis_result_sourcedid')
      this.provider.body.should.have.property('lti_message_type')
      this.provider.body.should.have.property('lti_version')
      this.provider.body.should.have.property('resource_link_description')
      this.provider.body.should.have.property('resource_link_id')
      this.provider.body.should.have.property('resource_link_title')
      this.provider.body.should.have.property('roles')
      this.provider.body.should.have.property('role_scope_mentor')
      this.provider.body.should.have.property(
        'tool_consumer_info_product_family_code'
      )
      this.provider.body.should.have.property('tool_consumer_info_version')
      this.provider.body.should.have.property('tool_consumer_instance_guid')
      this.provider.body.should.have.property('user_id')
    })

    it('should have stripped oauth_ properties', () => {
      this.provider.body.should.not.have.property('oauth_callback')
      this.provider.body.should.not.have.property('oauth_consumerKey')
      this.provider.body.should.not.have.property('oauth_nonce')
      this.provider.body.should.not.have.property('oauth_signature')
      this.provider.body.should.not.have.property('oauth_signature_method')
      this.provider.body.should.not.have.property('oauth_timestamp')
      this.provider.body.should.not.have.property('oauth_version')
    })

    it('should have helper booleans for roles', () => {
      this.provider.student.should.equal(true)
      this.provider.instructor.should.equal(false)
      this.provider.content_developer.should.equal(false)
      this.provider.member.should.equal(false)
      this.provider.manager.should.equal(false)
      this.provider.mentor.should.equal(false)
      this.provider.admin.should.equal(false)
      this.provider.ta.should.equal(false)
    })

    it('should have username accessor', () => {
      this.provider.username.should.equal('James')
    })

    it('should have user id accessor', () => {
      this.provider.userId.should.equal('4')
    })

    it('should handle the role_scope_mentor id array', () => {
      this.provider.mentor_user_ids.should.eql(['1234', '5678', '12,34'])
    })

    it('should have context accessors', () => {
      this.provider.context_id.should.equal('4')
      this.provider.context_label.should.equal('PHYS 2112')
      this.provider.context_title.should.equal('Introduction To Physics')
    })

    it('should have response outcome_service object', () => {
      should.exist(this.provider.outcome_service)
    })

    it('should account for the standardized urn prefix', () => {
      const provider = new this.lti.Provider('key', 'secret')
      provider.parse_request({
        body: {
          roles: 'urn:lti:role:ims/lis/Instructor'
        }
      })

      provider.instructor.should.equal(true)
    })

    it('should test for multiple roles being passed into the body', () => {
      const provider = new this.lti.Provider('key', 'secret')
      provider.parse_request({
        body: {
          roles: 'Instructor,Administrator'
        }
      })
    })

    it('should handle different role types from the specification', () => {
      const provider = new this.lti.Provider('key', 'secret')
      provider.parse_request({
        body: {
          roles:
            'urn:lti:role:ims/lis/Student,urn:lti:sysrole:ims/lis/Administrator,urn:lti:instrole:ims/lis/Alumni'
        }
      })

      provider.student.should.equal(true)
      provider.admin.should.equal(true)
      provider.alumni.should.equal(true)
    })

    it('should handle garbage roles that do not match the specification', () => {
      const provider = new this.lti.Provider('key', 'secret')
      provider.parse_request({
        body: {
          roles:
            'urn:lti::ims/lis/Student,urn:lti:sysrole:ims/lis/Administrator/,/Alumni'
        }
      })

      provider.student.should.equal(false)
      provider.admin.should.equal(false)
      provider.alumni.should.equal(false)
    })
  })
})
