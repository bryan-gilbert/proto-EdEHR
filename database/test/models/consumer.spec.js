var should = require('should');
const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
import Consumer from '../../models/consumer';
import Helper from '../helper';
const helper = new Helper();

/* global describe it */
describe('Consumer mongoose schema testing', function () {
  before(function (done) {
    helper.before(done, mongoose);
  });

  after(function (done) {
    let collection = 'consumers';
    helper.afterTests(done, mongoose, collection);
  });

  it('consumer should be invalid if key and secret Are empty', function (done) {
    var m = new Consumer();
    m.validate(function (err) {
      // console.log('Expect error: ', err)
      should.exist(err);
      done();
    });
  });
  it('can save one ', function (done) {
    const model = new Consumer(helper.sampleConsumerSpec());
    model
      .save()
      .then(() => {
        done();
      })
      .catch(err => {
        should.not.exist(err);
        done();
      });
  });
  it('can find one ', function (done) {
    Consumer.findOne({ oauth_consumer_key: '1234' }, function (err, doc) {
      // console.log('results', doc)
      should.exist(doc);
      should.not.exist(err);
      doc.lti_version.should.equal('1.0');
      done();
    }).catch(e => {
      console.log('find one error', e);
    });
  });
});
