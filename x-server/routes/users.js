var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('users  with req body ', req.body)
  res.send('respond with a resource')
})

module.exports = router
