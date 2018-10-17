'use strict'
const app = require('./app')
var debug = require('debug')('server')

const server = app.listen(3001, function () {
  var port = server.address().port
  debug('server app listening at port %s', port)
})

module.exports = server
