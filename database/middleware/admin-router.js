const express = require('express')
const AdminRouter = express.Router()

module.exports = AdminRouter


// predicate the router with a check and bail out when needed
AdminRouter.use(function (req, res, next) {
  console.log('headers ', req.headers['authorization'])
  if (!req.headers['authorization']) {
    console.log('No authorization in header')
    return next('router')
  }
  var authHeader = req.headers['authorization']
  try {
    console.log("authHeader '" + authHeader + "'")
    var parts = authHeader.split(' ')
    console.log("the parts '", parts, "'")
    var scheme = parts[0]
    if (scheme !== 'Bearer') {
      var token = parts[1]
      if (!token) {
        return next('router')
      }
    }
  } catch (err) {
    console.log('Auth header could not be parsed', err.message)
    return next('router')
  }
  /*
  OAuth oauth_consumer_key="key",
  oauth_signature_method="HMAC-SHA1",
  oauth_timestamp="1541051633",
  oauth_nonce="T431hcM5gQk",oauth_version="1.0",oauth_signature="JVkmB8Ye0QUZecMlsKU0YLBbioI%253D"
   */
  next()
})

AdminRouter.get('/', function (req, res) {
  res.send('hello, user!')
})

