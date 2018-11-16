import path from 'path'
var lti = require('./lti')

module.exports = function (app) {

  app.post('/lti', (req, res) => {
    console.log('--------------------\nlti')
    if (req.body.lti_message_type === 'basic-lti-launch-request') {
      lti.got_launch(req, res)
    }
  })


  // =======================================================
  // Catch all
  app.get('*', (req, res) => {
    console.log('catchall - (' + req.url + ')')
    res.sendFile(path.resolve('./public', 'index.html'))
  })
}
