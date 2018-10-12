const lti = require('ims-lti')
const should = require('should')

/* global describe it before  */
describe('LTI', function () {
  before(() => {
    this.lti = lti
  })

  describe('.Provider', () => {
    it('should exist', () => {
      should.exist(this.lti.Provider)
    })

    it('should be an instance of Provider', () => {
      this.lti.Provider.should.be.an.instanceOf(Object)
    })
  })

  describe('.Consumer', () => {
    it('should exist', () => {
      should.exist(this.lti.Consumer)
    })

    it('should be an instance of Consumer', () => {
      this.lti.Consumer.should.be.an.instanceOf(Object)
    })
  })

  describe('.Stores', () => {
    it('should not be empty', () => {
      should.exist(this.lti.Stores)
    })
    it('should include NonceStore', () => {
      should.exist(this.lti.Stores.NonceStore)
    })
  })
})
