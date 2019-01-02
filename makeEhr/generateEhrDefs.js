const fs = require('fs')
const pathUtil = require('path')
const camelcase = require('camelcase')
const RawInputToDef = require('./generators/raw-input-to-def')
const MasterDefToPages = require('./generators/defs-to-pages')


const destination = pathUtil.join(process.cwd(), 'generated', 'ehrDefs')
const source = pathUtil.join(process.cwd(), 'raw_data')
// const sourceFiles = ['current-visit', 'patient-profile']
const sourceFiles = ['patient-profile']
const tp = new MasterDefToPages()


main()

function main () {
  console.log('destination', destination)
  console.log('source', source)
  sourceFiles.forEach(fName => convertFile(fName))
}

function convertFile(fName) {
  let fSrc = pathUtil.join(source, fName) + '.txt'
  let fDest = pathUtil.join(destination, fName)  + '.js'
  console.log('read file ', fSrc)
  fs.readFile(fSrc, 'utf8', function (err, contents) {
    var inputToDef = new RawInputToDef()
    var moduleName = pathUtil.basename(fName, '.txt')
    console.log('moduleName', moduleName)
    var masterPageDefs = inputToDef.getDefinitions(contents, moduleName)
    var pages = tp.toPages(masterPageDefs)

    var results = JSON.stringify(pages, null, 2)
    results = results.replace(/'/g, "\\'")
    results = results.replace(/"/g, "'")
    var modDef = 'module.exports = function () {\n  return ' + results + '\n}'

    fs.writeFileSync(fDest, modDef)
  })
}

function splitCamelCase (string) {
  return string.split(/(?=[A-Z])/g).join(' ')
}
