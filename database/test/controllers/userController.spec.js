var should = require('should')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID
import Helper from '../helper'
const helper = new Helper()
import UserController from '../../controllers/user-controller'
import Model from '../../models/user'

const typeName = 'UserController'
const modelName = 'User'

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} controller testing`, function() {
  before(function(done) {
    helper.before(done, mongoose)
  })

  after(function(done) {
    helper.afterDropDatabase(done, mongoose)
  })

  it(`${typeName} create controller `, function(done) {
    let m = new UserController()
    let id = new ObjectID('56955ca46063c5600627f393')
    m.should.have.property('listActivitiesAsStudent')
    m.should.have.property('listAsInstructorCourses')
    m.should.have.property('list')
    m.should.have.property('route')
    m.listAsInstructorCourses(id)
    .catch((err) => {
      // console.log('expected err: ', err)
      done()
      })

    // should(function ()  {
    //   m.listAsInstructorCourses(id)
    // }).throw('what were you thinking, batman?')
    // m.list()
    // done()
  })

  it(`${typeName} create model`, function(done) {
    let m = new UserController(Model, 'user_id')
    let data = {
      toolConsumer: new ObjectID('56955ca46063c5600627f393'),
      user_id: '1234'
    }
    m.create(data)
      .then(doc => {
        should.exist(doc)
        done()
      })
  })

  it.skip(`${typeName} use locateAssignmentByExternalId`, function(done) {
    let m = new UserController(Model, 'name')
    m.locateAssignmentByExternalId(key)
      .then(doc => {
        // console.log('results', doc)
        should.exist(doc)
        doc.seedData.should.have.property('foo')
        done()
      })
  })

})
