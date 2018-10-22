'use strict'

/**
 * Module dependencies.
 */
const config = require('./config')
const path = require('path')
const RawInputToDef = require('./raw-input-to-def')
const rawPatientFile = path.join(process.cwd(), 'config/schema', 'raw-patient-profile.txt')
const rawCurrentVisit = path.join(process.cwd(), 'config/schema', 'raw-current-visit.txt')

var DataDefinition = require('./dataDefinition')
const ddd = new DataDefinition()
const TYPES = config.dataDefs.types

go()

function go () {
  const converter = new RawInputToDef()
  const patientProfileSchema = converter.getDefinitions(rawPatientFile)
  const currentVisitSchema = converter.getDefinitions(rawCurrentVisit)
  console.log(patientProfileSchema['Care_Team'])
  console.log(currentVisitSchema)
  // let values = ddd.createDataDefinitions()
  // console.log('RESULTS: ' + JSON.stringify(values, null, 2))
}
