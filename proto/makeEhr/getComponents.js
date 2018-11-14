const fs = require('fs')
const path = require('path')
const camelcase = require('camelcase')

var defs = [
  {n: 'base/patient', l: 'Patient profile'},
  {n: 'base/patient/demographics', l: 'Demographics'},
  {n: 'base/patient/allegies', l: 'Allergies'},
  {n: 'base/patient/history', l: 'History'},
  {n: 'base/patient/history/medical', l: 'Medical'},
  {n: 'base/patient/history/psychosocial', l: 'Psychosocial'},
  {n: 'base/patient/history/surgical', l: 'Surgical'},
  {n: 'base/patient/history/immunization', l: 'Immunization'},
  {n: 'base/patient/history/cn', l: 'Patient'},
  {n: 'base/patient/care-team', l: 'Care team'},
  {n: 'base/patient/past-appt', l: 'Past appointments'},
  {n: 'base/current', l: 'Current visit'},
  {n: 'base/current/visit-details', l: 'Visit details'},
  {n: 'base/current/vital-signs', l: 'Vital signs'},
  {n: 'base/current/assessments', redirect: 'base/current/assessments/neurological'},
  {n: 'base/current/assessments/neurological', l: 'Neurological'},
  {n: 'base/current/assessments/respirator', l: 'Respiratory'},
  {n: 'base/current/assessments/cardiovascular', l: 'Cardiovascular'},
  {n: 'base/current/assessments/gastrointestinal', l: 'Gastrointestinal'},
  {n: 'base/current/assessments/genitourinary', l: 'Genitourinary'},
  {n: 'base/current/assessments/musculoskeletal', l: 'Musculoskeletal'},
  {n: 'base/current/assessments/pain', l: 'Pain'},
  {n: 'base/current/assessments/biopsychosocial', l: 'Biopsychosocial'},
  {n: 'base/current/no-med', redirct: 'base/current/no-med/no-med-orders'},
  {n: 'base/current/no-med/no-med-orders', l: 'Orders', title: 'Non-medication orders: Orders'},
  {n: 'base/current/no-med/referrals', l: 'Referrals to other disciplines', c: 'Referrals'},
  {n: 'base/current/no-med/lab-reqs', l: 'Lab requisitions'},
  {n: 'base/current/meds', l: 'Medication orders', title: 'Non-medication orders: Lab requisitions'},
  {n: 'base/current/mar', l: 'MAR'},
  {n: 'base/current/discharge', l: 'Discharge summary'},
  {n: 'base/current/billing', l: 'Billing'},
  {n: 'base/chart', l: 'Patient chart'},
  {n: 'base/chart/care-plan', l: 'Interprofessional plan of care', c: 'CarePlan'},
  {n: 'base/chart/reports', l: 'Reports and documents', redirect: 'base/chart/reports/consults'},
  {n: 'base/chart/reports/consults', l: 'Consults'},
  {n: 'base/chart/reports/lab-reports', l: 'Lab Reports'},
  {n: 'base/chart/reports/diagnostic-reports', l: 'Diagnostic reports'},
  {n: 'base/chart/reports/operative-anaesthesia', l: 'Operative reports and anaesthesia reccord'},
]
var paths = []
var template = fs.readFileSync('./baseTemplate.txt', 'utf8')
defs.forEach((p) => makefile(p))
console.log('Paths:', paths)
var dest = '../../client/src/inside/views'
// console.log(template)
function makefile (def) {
  var p = def.n
  paths.push(p)
  var parts = p.split('/')
  var name = camelcase(parts[parts.length-1])
  var proper = name.charAt(0).toUpperCase() + name.slice(1)
  var redirect = def.redirect ? def.redirect : ''
  var content = template.replace(/{name}/g, proper)
  .replace(/{componentName}/g, proper)
  .replace(/{redirect}/g, redirect)
  .replace(/{path}/g, p)
  var p = path.join(dest, proper + '.vue')
  fs.writeFileSync(p, content, 'utf8')
}
