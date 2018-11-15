const fs = require('fs')
const path = require('path')
const camelcase = require('camelcase')

const defs = require('./defs')
// TODO add this on back into defs
//   { "p": "base/chart", "n": "progress-notes", "l": "Progress notes"},

const dest = './views'
const source = 'source'

main()

function main () {
  const pathOutputFileName = path.join(__dirname, 'pathList.txt')
  const templateFileName = path.join(__dirname, source, 'baseTemplate.txt')
  const componentTemplate = fs.readFileSync(templateFileName, 'utf8')
  var ehrPaths = []
  defs.forEach(def => {
    makefile(def, ehrPaths, componentTemplate)
  })
  var pathOutput = ehrPaths.join('\n')
  fs.writeFileSync(pathOutputFileName, pathOutput, 'utf8')
}

function splitCamelCase (string) {
  return string.split(/(?=[A-Z])/g)
}

// var dest = '../../client/src/inside/views'

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
  var route = def.p + '/' + def.n
  ehrPaths.push(p)
  var parts = p.split('/')
  var name = camelcase(parts[parts.length - 1])
  var proper = name.charAt(0).toUpperCase() + name.slice(1)
  var title = p.title || splitCamelCase(proper)
  var redirect = def.redirect ? def.redirect : 'none'
  var content = componentTemplate
    .replace(/{title}/g, title)
    .replace(/{name}/g, proper)
    .replace(/{componentName}/g, proper)
    .replace(/{redirect}/g, redirect)
    .replace(/{rName}/g, def.n)
    .replace(/{path}/g, route)
  var outfilename = path.join(dest, proper + '.vue')
  fs.writeFileSync(outfilename, content, 'utf8')
}
