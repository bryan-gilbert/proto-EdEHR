var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.render('start', { title: 'LTI SETTINGS',
    CourseID: 'CourseID: ' + req.body['context_id'],
    userID: 'UserID: ' + req.body['user_id'],
    UserRole: 'Course Role: ' + req.body['roles'],
    FulllogTitle: 'Full Log: ',
    Fulllog: JSON.stringify(req.body) })
})

module.exports = router
