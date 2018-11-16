const should = require('should')
const ourAssert = require('../src/prod-dev-assert')

/* global describe it  */
describe('Assert', function () {
  describe('equals', () => {
    it('should support equals', () => {
      ourAssert.equal(1, 1)
    })
    it('should support notEqual', () => {
      ourAssert.notEqual(1, 2)
    })
    it('should support isTrue', () => {
      ourAssert.isTrue(1 !== 2)
    })
    it('should support isDefined', () => {
      var t = 6
      ourAssert.isDefined(t)
    })
    it('should support typeOf', () => {
      ourAssert.typeOf('asdasd', 'string')
    })
  })
})
