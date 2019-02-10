var should = require('should');
const mongoose = require('mongoose');
import Helper from '../helper';
const helper = new Helper();
import AssignmentController from '../../controllers/assignment-controller';
import {DEFAULT_ASSIGNMENT_EXTERNAL_ID} from '../../controllers/assignment-controller';
import Model from '../../models/seed';

const typeName = 'AssignmentController';
const modelName = 'Assignment';
const collectionName = 'assignments';

// Use following to leave results in test database for inspection
// helper.setClear(false)

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.before(done, mongoose);
  });

  after(function (done) {
    helper.after(done, mongoose, collectionName);
  });

  it(`${typeName} be valid with model and key`, function (done) {
    let m = new AssignmentController(Model, 'user_id');
    // These are tested in baseController.spec.js
    // m.should.have.property('baseFindOneQuery');
    // m.should.have.property('read');
    // m.should.have.property('delete');
    // m.should.have.property('list');
    // m.should.have.property('create');
    // m.should.have.property('route');
    m.should.have.property('locateAssignmentByExternalId');
    done();
  });

  it(`${typeName} create model`, function (done) {
    let m = new AssignmentController(Model, 'name');
    let data = {
      externalId: '1',
      name: '1234',
      description: 'a test assignment',
      seedData: { foo: 'bar' }
    };
    m.create(data)
      .then(doc => {
        should.exist(doc);
        // doc.seedData.should.have.property('foo');
        done();
      })
      .catch(err => {
        console.log(`${typeName} create ${modelName} error ${err}`);
        done();
      });
  });

  it(`${typeName} use locateAssignmentByExternalId`, function (done) {
    let m = new AssignmentController(Model, 'name');
    m.locateAssignmentByExternalId('1')
      .then(doc => {
        // console.log('results', doc)
        should.exist(doc);
        doc.seedData.should.have.property('foo');
        done();
      })
      .catch(e => {
        console.log('find one error', e);
      });
  });

  it(`${typeName} ask for assignment that doesn't exist`, function (done) {
    let m = new AssignmentController(Model, 'name');
    let data = {
      externalId: DEFAULT_ASSIGNMENT_EXTERNAL_ID,
      name: '1234',
      description: 'a default ' + DEFAULT_ASSIGNMENT_EXTERNAL_ID,
      seedData: { foo: 'bar' }
    };
    m.create(data)
    .then(doc => {
      should.exist(doc);
    })
    .then( () => {
      return m.locateAssignmentByExternalId('999')
    })
    .then(defaultDoc => {
      should.exist(defaultDoc);
      defaultDoc.externalId.should.equal(DEFAULT_ASSIGNMENT_EXTERNAL_ID)
      done();
    })

  });

});
