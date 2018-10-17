const NonceStore = require('../src/nonce-store')
const should = require('should')
/* global describe it before  */
describe('NonceStore [Interface Class]', function () {
  before(() => {
    this.store = new NonceStore('consumer_key')
  })

  // Standard nonce tests
  //
  // -- do not change below this line--

  describe('NonceStore', () => {
    it('should have extend NonceStore', () => {
      should.exist(this.store.isNonceStore)
      this.store.isNonceStore().should.be.ok()
    })
  })

  describe('.isNew', () => {
    it('should exist', () => {
      should.exist(this.store.isNew)
    })

    it('should return Not Implemented', done => {
      this.store.isNew(undefined, undefined, function (err, valid) {
        err.should.not.equal(null)
        err.message.should.match(/NOT/i)
        valid.should.equal(false)
        done()
      })
    })
  })

  describe('.setUsed', () => {
    it('should exist', () => {
      should.exist(this.store.setUsed)
    })

    it('should return Not Implemented', done => {
      this.store.setUsed(undefined, undefined, function (err, valid) {
        err.should.not.equal(null)
        err.message.should.match(/NOT/i)
        valid.should.equal(false)
        done()
      })
    })
  })
})
