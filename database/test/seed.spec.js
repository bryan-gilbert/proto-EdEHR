var should = require('should');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
import Helper from './helper'
const helper = new Helper()
import Model from '../models/seed';

const typeName = 'Seed'
const collectionName = 'seeddatas'

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
      name: '1234',
      description: 'a test seed',
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
    Model.findOne({ name: '1234' }, function (err, doc) {
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
