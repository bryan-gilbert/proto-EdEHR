'use strict'

var mongoose = require('mongoose')
var Consumer = mongoose.model('Consumer')
const {ltiVersions} = require('../../controllers/utils')
const KEY = 'edehrkey'
const SECRET = 'edehrsecret'

module.exports = function () {
  return new Promise(function (resolve, reject) {
    console.log('Running application consumer seeding')
    Consumer.deleteMany()
    .then(() => {
      const def = {
        oauth_consumer_key: KEY,
        oauth_consumer_secret: SECRET,
        lti_version: ltiVersions()[0],
        tool_consumer_info_product_family_code: 'EdEHR',
        tool_consumer_info_version: 'prototype',
        tool_consumer_instance_description: 'Use for prototyping - seeded',
        tool_consumer_instance_guid: 'EdEHRPrototype',
        tool_consumer_instance_name: 'EdEHRPrototype'
      }
      Consumer.create(def)
      .then((response, reject) => {
        console.log('save results', response, reject)
        resolve()
      })
    })
  })
}
