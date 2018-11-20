'use strict'
import { getPhrase, getName } from './poc-utils'

var mongoose = require('mongoose')
var Assignment = mongoose.model('Assignment')

module.exports = function () {
  return new Promise(function (resolve, reject) {
    console.log('Running application consumer seeding')
    Assignment.deleteMany()
    .then(() => {
      var newRow = {
        name: getName(),
        position: 'Nurse',
        unit: 'ER',
        day: '0',
        time: '07:00',
        notes: getPhrase(15)
      }
      const def = {
        external_id: 'assignment1',
        name: 'Progress Notes',
        ehrRoute: 'progress-notes',
        seedData: {progressNotes: [newRow]}
      }
      Assignment.create(def)
      .then((response, reject) => {
        console.log('save results', response, reject)
        resolve()
      })
    })
  })
}
