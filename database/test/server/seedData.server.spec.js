const should = require('should')
const request = require('supertest')
const mongoose = require('mongoose')
import Helper from '../helper'
const helper = new Helper()
import EhrApp from '../../server/app'
import Config from '../../config/config'

const config = new Config('test')
const configuration = config.config
const TYPE = 'SeedData'
const BASE = '/api/seed-data'
const ehrApp = new EhrApp()

describe(`Make server calls on ${TYPE}`, function() {
  let app
  before(function(done) {
    ehrApp
      .setup(configuration)
      .then(() => {
        app = ehrApp.application
      })
      .then(() => {
        return helper.before(done, mongoose)
      })
  })

  it('should POST JSON', function(done) {
    let url = BASE
    let data = Helper.sampleSeedDataSpec()
    request(app)
      .post(url)
      .send(data)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err
        // console.log(res.body)
        done()
      })
  })

  let sd_id

  it('send /api/seed-data', function(done) {
    let url = BASE
    request(app)
      .get(url)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err)
        should.exist(res)
        should.exist(res.body)
        res.body.should.be.object
        res.body.should.have.property('seeddata')
        res.body.seeddata.should.be.array
        res.body.seeddata.should.have.length(1)
        let sd = res.body.seeddata[0]
        // console.log('results from api/seed-data', sd._id)
        sd_id = sd._id
        done()
      })
  })

  it('find seeddata with id', function(done) {
    let url = BASE + '/get/' + sd_id
    request(app)
    .get(url)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      should.not.exist(err, url)
      should.exist(res)
      should.exist(res.body)
      res.body.should.be.object
      res.body.should.have.property('seeddata')
      done();
    });
  })
})
