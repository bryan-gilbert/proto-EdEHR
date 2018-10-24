'use strict'
const app = require('./app')
var debug = require('debug')('server')

// Todo remove this file use
// node bin/www

const server = app.listen(3000, function () {
  var port = server.address().port
  debug('server app listening at port %s', port)
})

module.exports = server
