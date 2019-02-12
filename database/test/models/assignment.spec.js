var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID
import Helper from '../helper'
const helper = new Helper()
import Model from '../../models/assignment'

const typeName = 'Assignment'
const collectionName = 'assignments'
let seedData = { foo: 'bar' }

/* global describe it */
describe(`${typeName} mongoose schema testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  after(function(done) {
    helper.afterTests(done, mongoose, collectionName)
  })

  it(`${typeName} be valid params are empty`, function(done) {
    let m = new Model()
    m.validate(function(err) {
      // console.log('Expect error: ', err)
      should.not.exist(err)
      done()
    })
  })

  let key
  it(`${typeName} can save one`, function(done) {
    let data = Helper.sampleAssignmentSpec(seedData)
    key = data.externalId
    const newUser = new Model(data)
    newUser
      .save()
      .then(() => {
        done()
      })
  })

  it(`${typeName} can find one`, function(done) {
    Model.findOne({ externalId: key }, function(err, doc) {
      // console.log('results', doc)
      should.not.exist(err)
      should.exist(doc)
      doc.seedData.should.have.property('foo')
      done()
    }).catch(e => {
      console.log('find one error', e)
    })
  })
})
