'use strict'
var expect = require('chai').expect
const should = require('should')
var { UserInfo } = require('../src/user-info.js')

/* global describe it before */
describe('Test User Info', function () {
  let user = {}
  before(() => {
    user = {id: 22}
  })
  it('UserInfo has methods... ', function () {
    expect(UserInfo).itself.to.respondTo('lookupUser')
    expect(UserInfo).itself.to.respondTo('updateUser')
    expect(UserInfo).itself.to.respondTo('storeUser')
    expect(UserInfo).itself.to.respondTo('extractUniqueUserId')
  })
  it('UserInfo extract id', function (done) {
    UserInfo.extractUniqueUserId(user, (err, res) => {
      should.not.exist(err)
      should.exist(res)
      should.equal(22, res)
      done(null, res)
    })
  })
})
