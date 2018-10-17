const app = require('../server/app')
const should = require('should')

/* global describe it before  */
describe('App', function () {
  before(() => {
    this.app = app
  })

  describe('App should exist', () => {
    it('should exist', () => {
      should.exist(this.app)
    })
  })
})
