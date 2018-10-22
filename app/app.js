'use strict'
const edSchema = require('./defs')

let ed = new edSchema()

console.log("All Nav Elements")
ed.getNavElements().forEach((nav)=>{
  console.log(nav.fqn, nav.inputType, nav.navUrl, nav.label)
})

console.log("All Page Elements")
ed.getPageElements().forEach((nav)=>{
  console.log(nav.fqn, nav.inputType, nav.navUrl, nav.label)
})
