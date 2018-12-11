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

    function makeDef (id, name, description) {
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
        description: description,
        ehrRoutePath: '/ehr/chart/progress-notes',
        ehrRouteName: 'progress-notes',
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
        description: 'This assignment is the default assignment that has no seed data and brings the user to the page that lists which assignments are available.',
        ehrRoutePath: '/assignments-listing',
        ehrRouteName: 'assignments-listing',
        seedData: {}
      }
      addOne(def)

      def = makeDef('assignment1', 'Proof of concept assignment 1',
        'This assignment demonstrates the ability to add progress notes into the proof of concept version of the EdEHR')
      addOne(def)
      def = makeDef('assignment2', 'Proof of concept assignment 2',
        'This assignment demonstrates the ability to add progress notes into the proof of concept version of the EdEHR')
          addOne(def)
    })
  })
}
