const User = require('../models/User')

const UserUtil = {}

UserUtil.lookupUser = function lookupUser (userId) {
  return User.find({userId: userId})
}
UserUtil.updateUserFromLti = function updateUser (ltiData) {
  let userId = ltiData.user_id
  User.findOne({ userId: userId }, function (err, doc) {
    console.log('In user util updateUserFromLti', doc, err)
    if (!doc) {
      const newUser = new User({
        userId: ltiData.user_id,
        givenName: ltiData.lis_person_name_given,
        familyName: ltiData.lis_person_name_family,
        ltiData: [ ltiData ]
      })
      newUser.save()
    } else {
      doc.ltiData.push(ltiData)
      doc.lastVisitDate = Date.now
      doc.save()
    }
  })
}
UserUtil.storeUserFromLti = function storeUser (userId, ltiData) {

}

UserUtil.findCreateUpdate = function findCreate (userId, ltiData) {
  this.lookupUser(userId)
  // .then((user) => {
  //   // todo update
  // })
  // .catch((error) => {
  //   // todo create
  // })
}

UserUtil.extractUniqueUserId = function extractUniqueUserId (user, done) {
  const userId = user.id
  // TODO create some namespace based on tool consumer key
  done(null, userId)
}

module.exports = { UserUtil }

// eslint-disable-next-line no-unused-vars
const sampleLtiData = {
  'context_id': '4',
  'context_label': 'POC',
  'context_title': 'Proof of Concept',
  'context_type': 'CourseSection',
  'custom_assignment': '1',
  'custom_poc': 'true',
  'custom_POC': 'true',
  'ext_lms': 'moodle-2',
  'ext_user_username': 'admin',
  'id': '2',
  'launch_presentation_document_target': 'window',
  'launch_presentation_locale': 'en',
  'launch_presentation_return_url': 'http://localhost:8888/moodle35/mod/lti/return.php?course=4&launch_container=4&instanceid=1&sesskey=NrAr721ncy',
  'lis_course_section_sourcedid': '9876',
  'lis_outcome_service_url': 'http://localhost:8888/moodle35/mod/lti/service.php',
  'lis_person_contact_email_primary': 'admin@localhost',
  'lis_person_name_family': ' ',
  'lis_person_name_full': 'Administrator  ',
  'lis_person_name_given': 'Administrator',
  'lis_person_sourcedid': '',
  'lis_result_sourcedid': '{"data":{"instanceid":"1","userid":"2","typeid":"4","launchid":1795439156},"hash":"2d6d9002348618eba188f21cd95b152ef2fc59d42c0b1faafd8ca3e5339e5b13"}',
  'lti_message_type': 'basic-lti-launch-request',
  'lti_version': 'LTI-1p0',
  'oauth_callback': 'about:blank',
  'oauth_consumer_key': 'edehrkey',
  'oauth_nonce': '915cd52959477b9b6bbde858f8e01400',
  'oauth_signature_method': 'HMAC-SHA1',
  'oauth_signature': 'vNM/VHzWKCO8KwT913VRk8INLgo=',
  'oauth_timestamp': '1541004113',
  'oauth_version': '1.0',
  'resource_link_description': 'Using one of the preset LTI external tools this assignment is to view the proof of concept EdEHR.  You will not do any work except: view the patient progress notes page and add a note. You will then return via the links provided to this course.',
  'resource_link_id': '1',
  'resource_link_title': 'Pretend assignement 1',
  'roles': 'Instructor,urn:lti:sysrole:ims/lis/Administrator,urn:lti:instrole:ims/lis/Administrator',
  'sid': 's:238b2951-0d8b-4330-abd9-b21aca9e158b.GeBMP+0lgZhG3X79D1PCDUhCL20uBo2rFu2Ck5xGk+U',
  'ss': '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/","sameSite":"lax"},"__lastAccess":1541009116142,"passport":{"user":"2"},"views":9}',
  'tool_consumer_info_product_family_code': 'moodle',
  'tool_consumer_info_version': '2018051702',
  'tool_consumer_instance_description': 'Moodle 3.5',
  'tool_consumer_instance_guid': 'localMoodle',
  'tool_consumer_instance_name': 'Moodle 3.5',
  'user_id': '2',
  'visits': 10,
  'vistsSession': 9
}
