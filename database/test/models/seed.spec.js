var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID
import Helper from '../helper'
const helper = new Helper()
import Model from '../../models/seed-data'

const typeName = 'Seed'
const collectionName = 'seeddatas'

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

  let sampleData = {
    name: '1234',
    description: 'a test seed',
    version: '1.0',
    seedData: { foo: 'bar' }
  }

  it(`${typeName} can save one`, function(done) {
    const newUser = new Model(sampleData)
    newUser
      .save()
      .then(() => {
        done()
      })
      .catch(err => {
        should.not.exist(err)
        done()
      })
  })

  it(`${typeName} can find one`, function(done) {
    Model.findOne({ name: '1234' }, function(err, doc) {
      // console.log('results', doc)
      should.exist(doc)
      should.not.exist(err)
      doc.should.have.property('seedData')
      doc.seedData.should.have.property('foo')
      doc.should.have.property('version')
      doc.version.should.equal(sampleData.version)
      done()
    }).catch(e => {
      console.log('find one error', e)
    })
  })
})
