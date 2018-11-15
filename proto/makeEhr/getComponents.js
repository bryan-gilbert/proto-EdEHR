
const fs = require('fs')
const path = require('path')
const camelcase = require('camelcase')

var defs = [
  { p: 'base', n: 'patient', l: 'Patient profile' },
  { p: 'base/patient', n: 'demographics', l: 'Demographics' },
  { p: 'base/patient', n: 'allegies', l: 'Allergies' },
  { p: 'base/patient', n: 'history', l: 'History' },
  { p: 'base/patient/history', n: 'medical', l: 'Medical' },
  { p: 'base/patient/history', n: 'psychosocial', l: 'Psychosocial' },
  { p: 'base/patient/history', n: 'surgical', l: 'Surgical' },
  { p: 'base/patient/history', n: 'immunization', l: 'Immunization' },
  { p: 'base/patient/history', n: 'cn', l: 'Patient' },
  { p: 'base/patient', n: 'care-team', l: 'Care team' },
  { p: 'base/patient', n: 'past-appt', l: 'Past appointments' },
  { p: 'base', n: 'current', l: 'Current visit' },
  { p: 'base/current', n: 'visit-details', l: 'Visit details' },
  { p: 'base/current', n: 'vital-signs', l: 'Vital signs' },
  {
    p: 'base/current',
    n: 'assessments',
    redirect: 'current/assessments/neurological'
  },
  { p: 'base/current/assessments', n: 'neurological', l: 'Neurological' },
  { p: 'base/current/assessments', n: 'respirator', l: 'Respiratory' },
  { p: 'base/current/assessments', n: 'cardiovascular', l: 'Cardiovascular' },
  {
    p: 'base/current/assessments',
    n: 'gastrointestinal',
    l: 'Gastrointestinal'
  },
  { p: 'base/current/assessments', n: 'genitourinary', l: 'Genitourinary' },
  { p: 'base/current/assessments', n: 'musculoskeletal', l: 'Musculoskeletal' },
  { p: 'base/current/assessments', n: 'pain', l: 'Pain' },
  { p: 'base/current/assessments', n: 'biopsychosocial', l: 'Biopsychosocial' },
  { p: 'base/current', n: 'no-med', redirect: 'current/no-med/no-med-orders' },
  {
    p: 'base/current/no-med',
    n: 'no-med-orders',
    l: 'Orders',
    title: 'Non-medication orders: Orders'
  },
  {
    p: 'base/current/no-med',
    n: 'referrals',
    l: 'Referrals to other disciplines',
    c: 'Referrals'
  },
  { p: 'base/current/no-med', n: 'lab-reqs', l: 'Lab requisitions' },
  {
    p: 'base/current',
    n: 'meds',
    l: 'Medication orders',
    title: 'Non-medication orders: Lab requisitions'
  },
  { p: 'base/current', n: 'mar', l: 'MAR' },
  { p: 'base/current', n: 'discharge', l: 'Discharge summary' },
  { p: 'base/current', n: 'billing', l: 'Billing' },
  { p: 'base', n: 'chart', l: 'Patient chart' },
  // {p: 'chart', n: 'progress-notes', l: 'Progress notes'},
  {
    p: 'base/chart',
    n: 'care-plan',
    l: 'Interprofessional plan of care',
    c: 'CarePlan'
  },
  {
    p: 'base/chart',
    n: 'reports',
    l: 'Reports and documents',
    redirect: 'chart/reports/consults'
  },
  { p: 'base/chart', n: 'reports/consults', l: 'Consults' },
  { p: 'base/chart', n: 'reports/lab-reports', l: 'Lab Reports' },
  { p: 'base/chart', n: 'reports/diagnostic-reports', l: 'Diagnostic reports' },
  {
    p: 'base/chart',
    n: 'reports/operative-anaesthesia',
    l: 'Operative reports and anaesthesia reccord'
  }
]

function main () {
  const pathOutputFileName = path.join(__dirname, 'pathList.txt')
  const templateFileName = path.join(__dirname, source, 'baseTemplate.txt')
  const componentTemplate = fs.readFileSync(templateFileName,'utf8')
  var ehrPaths = []
  defs.forEach(def => {
    makefile(def, ehrPaths, componentTemplate)
  })
  var pathOutput = ehrPaths.join('\n')
  fs.writeFileSync(pathOutputFileName, pathOutput, 'utf8')
}

// var dest = '../../client/src/inside/views'
const dest = './views'
const source = 'source'

// defs.forEach(def => {
//   // makefile(p))
//   var pp = def.p.split('/')
//   var container
//   var container = pathTree.base
//   for (var i = 0; i < pp.length; i++) {
//     var part = pp[i]
//     for (var k = 0; k < container.length; k++) {
//       var elem = container[k]
//       if (elem.n === part) {
//       }
//     }
//   }
//   pp.forEach(part => {
//     container = pathTree[part] = pathTree[part] || []
//   })
//   // container is the last in the path
//   container.push(def)
// })
// var pathOutput = JSON.stringify(pathTree, null, 2)
// fs.writeFileSync(pathOutputFileName, pathOutput, 'utf8')

// eslint-disable-next-line
function makefile(def, ehrPaths, componentTemplate) {
  var p = def.n
  ehrPaths.push(p)
  var parts = p.split('/')
  var name = camelcase(parts[parts.length - 1])
  var proper = name.charAt(0).toUpperCase() + name.slice(1)
  var redirect = def.redirect ? def.redirect : ''
  var content = componentTemplate
    .replace(/{name}/g, proper)
    .replace(/{componentName}/g, proper)
    .replace(/{redirect}/g, redirect)
    .replace(/{path}/g, p)
  var p = path.join(dest, proper + '.vue')
  fs.writeFileSync(p, content, 'utf8')
}
