'use strict'
var expect = require('chai').expect
const should = require('should')
var { DB } = require('../src/db.js')

/* global describe it before */
describe('Test DB', function () {
  let user = {}
  before(() => {
    user = {id: 22}
  })
  it('UserInfo has methods... ', function () {
    expect(DB).itself.to.respondTo('createNamespace')
    expect(DB).itself.to.respondTo('lookup')
  })
  it('UserInfo createNamespace', function (done) {
    var sn = 'somenamespace'
    DB.createNamespace(sn, (err, res) => {
      // should.not.exist(err)
      should.exist(res)
      should.equal(sn, res)
      done(null, res)
    })
  })
})
