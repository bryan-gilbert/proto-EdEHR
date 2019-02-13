var request = require('supertest');
import EhrApp from '../server/app';
import Config from '../config/config'

const config = new Config('test')
const configuration = config.config

const ehrApp = new EhrApp()

describe('Correct users returned', function () {
  let app
  before(function (done) {
    ehrApp.setup(configuration)
    .then( () => {
      app = ehrApp.application
      done()
    })
  })

  it('run it', function(done) {
    request(app)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      done();
    });
  })
});