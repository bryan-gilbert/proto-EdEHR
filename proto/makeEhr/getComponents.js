const fs = require('fs')
const pathUtil = require('path')
const camelcase = require('camelcase')

const defs = require('./defs')
// TODO add this on back into defs
//   { "p": "ehr/chart", "n": "progress-notes", "l": "Progress notes"},

const destVueFiles = './generated'
const destRouteFiles = './routes'
const source = 'source'

main()
function main () {
  flushDefs()
  var tree = makeTree()
  makeVueFiles()
  makeMenu(tree)
  makeRoutes()
}

function flushDefs () {
  defs.forEach(def => {
    def.componentName = camelcase(def.rn, { pascalCase: true })
    def.routeName = def.rn
    def.fullPath = def.path + '/' + def.rn
    def.title = def.title || splitCamelCase(def.componentName)
    def.label = def.label || def.title
    def.redirect = def.redirect ? def.redirect : ''
  })
}

function makeRoutes () {
  var routes = []
  var s1 = '    '
  var s2 = '      '
  var s3 = '        '
  routes.push('export function inside() {\n' + '  return [')
  var parts = []
  defs.forEach(def => {
    var rt = ''
    rt += `${s1}{\n`
    rt += `${s2}path: '${def.fullPath}',\n`
    rt += `${s2}name: '${def.routeName}',\n`
    rt += `${s2}component: () =>\n`
    rt += `${s3}import(/* webpackChunkName: "chunk-[request][index]" */ './inside/views/${def.componentName}.vue'),\n`
    rt += `${s2}meta: { layout: 'inside', label: '${def.label}' }\n`
    rt += `${s1}}`
    parts.push(rt)
  })
  routes.push(parts.join(',\n'))
  routes.push('  ]\n' + '}\n')
  var pathOutput = routes.join('\n')
  var outfilename = pathUtil.join(destRouteFiles, 'insideRoutes.js')
  fs.writeFileSync(outfilename, pathOutput, 'utf8')
}
function findTreeItem (def, tree) {
  var paths = def.path.split('/')
  paths.shift()
  // console.log('Look for ', def.path, paths)
  var item = tree['root']
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
  item.name = def.rn
  item.label = def.label
  item.fPath = def.path + '/' + def.rn
  item.def = def
  item.children = []
  var parent = findTreeItem(def, tree)
  parent.children.push(item)
}

function makeTree () {
  var tree = {}
  tree.root = { children: [] }
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
  tree.root.children.forEach((c) => elements.push(JSON.stringify(c, null, 2)))
  content.push(elements.join(','))
  content.push(']')
  var txtContent = content.join('\n')
  var outfilename = pathUtil.join(destRouteFiles, 'menuList.json')
  fs.writeFileSync(outfilename, txtContent, 'utf8')
}

function makeVueFiles () {
  const templateFileName = pathUtil.join(__dirname, source, 'baseTemplate.txt')
  const componentTemplate = fs.readFileSync(templateFileName, 'utf8')
  defs.forEach(def => {
    if (!def.novue) {
      makeVueFile(def, componentTemplate)
    }
  })
}

function splitCamelCase (string) {
  return string.split(/(?=[A-Z])/g).join(' ')
}

function makeVueFile (def, componentTemplate) {
  var content = componentTemplate
    .replace(/{title}/g, def.title)
    .replace(/{componentName}/g, def.componentName)
    .replace(/{redirect}/g, def.redirect)
    .replace(/{rName}/g, def.routeName)
    .replace(/{path}/g, def.fullPath)
  content = '// Generated VUE file. Before modifying see docs about Vue file generation \n' + content
  var outfilename = pathUtil.join(destVueFiles, def.componentName + '.vue')
  fs.writeFileSync(outfilename, content, 'utf8')
}
