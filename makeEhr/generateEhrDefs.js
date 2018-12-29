const fs = require('fs')
const pathUtil = require('path')
const camelcase = require('camelcase')
const RawInputToDef = require('./generators/raw-input-to-def')


const destination = pathUtil.join(process.cwd(), 'ehr_defs')
const source = pathUtil.join(process.cwd(), 'raw_data')
const sourceFiles = ['current-visit', 'patient-profile']
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
    var df = new RawInputToDef()
    var moduleName = pathUtil.basename(fName, '.txt')
    console.log('moduleName', moduleName)
    var schemaModule = df.getDefinitions(contents, moduleName)
    var newContents = Buffer.from(schemaModule)
    // console.log('new contents', newContents)
    fs.writeFileSync(fDest, newContents)
  })
}

function splitCamelCase (string) {
  return string.split(/(?=[A-Z])/g).join(' ')
}
