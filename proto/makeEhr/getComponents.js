const fs = require('fs')
const pathUtil = require('path')
const camelcase = require('camelcase')

const defs = require('./defs')
// TODO add this on back into defs
//   { "p": "base/chart", "n": "progress-notes", "l": "Progress notes"},

const destVueFiles = './views'
const destRouteFiles = './routes'
const source = 'source'

main()
function main () {
  // makeVueFiles()
  var tree = makeTree()
  makeMenu(tree)
}

function findTreeItem (def, tree) {
  var paths = def.p.split('/')
  paths.shift()
  // console.log('Look for ', def.p, paths)
  var item = tree['base']
  paths.forEach((p) => {
    // console.log('item children', item.children)
    item.children.forEach((child) => {
      if (child.name === p) {
        item = child
      }
    })
  })
  return item
}
function makeTreeItem (def, tree) {
  var item = {}
  item.name = def.n
  item.label = def.l
  item.fPath = def.p + '/' + def.n
  item.fPath = item.fPath.replace(/base/, '/ehr')
  item.def = def
  item.children = []
  var parent = findTreeItem(def, tree)
  parent.children.push(item)
}

function makeTree () {
  var tree = {}
  tree.base = { children: [] }
  defs.forEach(def => {
    makeTreeItem(def, tree)
  })
  var txtContent = JSON.stringify(tree, null, 2)
  var outfilename = pathUtil.join(destRouteFiles, 'treeDef.json')
  fs.writeFileSync(outfilename, txtContent, 'utf8')
  return tree
}

function makeMenu (tree) {
  var content = []
  content.push('[')
  var elements = []
  tree.base.children.forEach((c) => elements.push(JSON.stringify(c, null, 2)))
  content.push(elements.join(','))
  content.push(']')
  var txtContent = content.join('\n')
  var outfilename = pathUtil.join(destRouteFiles, 'menuList.json')
  fs.writeFileSync(outfilename, txtContent, 'utf8')
}

function makeVueFiles () {
  const pathOutputFileName = pathUtil.join(__dirname, 'pathList.txt')
  const templateFileName = pathUtil.join(__dirname, source, 'baseTemplate.txt')
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

function makefile (def, ehrPaths, componentTemplate) {
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
  var outfilename = pathUtil.join(destVueFiles, proper + '.vue')
  fs.writeFileSync(outfilename, content, 'utf8')
}
