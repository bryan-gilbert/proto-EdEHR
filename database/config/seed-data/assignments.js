'use strict'
import { getPhrase, getName } from './poc-utils'

var mongoose = require('mongoose')
var Assignment = mongoose.model('Assignment')

module.exports = function () {
  return new Promise(function (resolve, reject) {
    console.log('Running application consumer seeding')

    function addOne (def) {
      Assignment.create(def)
      .then((response, reject) => {
        console.log('save results', response, reject)
        resolve()
      })
    }

    function makeDef (id, name) {
      var newRow = {
        name: getName(),
        profession: 'Nurse',
        unit: 'ER',
        day: '0',
        time: '07:00',
        notes: getPhrase(15)
      }
      const def = {
        externalId: id,
        name: name,
        ehrRoute: '/ehr/chart/progress-notes',
        seedData: {progressNotes: [newRow]}
      }
      return def
    }

    Assignment.deleteMany()
    .then(() => {
      var def
      def = {
        externalId: 'defaultNonAssignment',
        name: 'Default Non Assignment',
        ehrRoute: '/assignments-listing',
        seedData: {}
      }
      addOne(def)

      def = makeDef('assignment1', 'Dummy assignment 1')
      addOne(def)
      def = makeDef('assignment2', 'Dummy assignment 2')
      addOne(def)
    })
  })
}
