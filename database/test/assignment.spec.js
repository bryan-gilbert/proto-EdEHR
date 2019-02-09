var should = require('should');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
import Helper from './helper'
const helper = new Helper()
import Model from '../models/assignment';

const typeName = 'Assignment'
const collectionName = 'assignments'

/* global describe it */
describe(`${typeName} mongoose schema testing`, function () {
  before(function (done) {
    helper.before(done, mongoose)
  });

  after(function (done) {
    helper.after(done, mongoose, collectionName)
  });

  it(`${typeName} be valid params are empty`, function (done) {
    let m = new Model();
    m.validate(function (err) {
      // console.log('Expect error: ', err)
      should.not.exist(err);
      done();
    });
  });

  it(`${typeName} can save one`, function (done) {
    const newUser = new Model({
      externalId: '1234',
      name: 'test assignment',
      description: 'an assignment',
      ehrRoutePath: '/ehr/path',
      ehrRouteName: 'pathName',
      seedData: {'foo': 'bar'}
    });
    newUser
      .save()
      .then(() => {
        done();
      })
      .catch((err) => {
        should.not.exist(err);
        done();
      });
  });

  it(`${typeName} can find one`, function (done) {
    Model.findOne({ externalId: '1234' }, function (err, doc) {
      // console.log('results', doc)
      should.exist(doc);
      should.not.exist(err);
      doc.seedData.should.have.property('foo')
      done();
    })
    .catch( (e) => {
      console.log('find one error', e)
    })
  });
});
