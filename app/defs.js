'use strict'
const currentVisit = require('../assets/topLevel/current-visit')
const patientProfile = require('../assets/topLevel/patient-profile')

class edSchema {
  constructor () {
    this.schema = Object.assign({},new currentVisit(),new patientProfile())

    this.pages = this._constructPages()
    this.navElements = this._constructNavElements()
  }

  getNavElements() {
    return this.navElements;
  }


  getPageElements() {
    return this.pages;
  }

  _constructNavElements() {
    const _this = this;
    let navElements =[];
    Object.entries(this.schema).forEach(([key, element]) => {
      if ('topLevel' === element.inputType) {
        element.children.forEach((child) => {
          navElements.push(child)
          if ('nav_group' === child.inputType) {
            child.children.forEach((gChild) => {
              navElements.push(gChild)
            })
          }
        })
      } else {
        throw new Error("Unexpected to find an element that is not a top level element " + element.inputType)
      }
    })
    return navElements
  }

  _constructPages () {
    const _this = this;
    let pages = []
    Object.entries(this.schema).forEach(([key, element]) => {
      if ('topLevel' === element.inputType) {
        element.children.forEach((child) => {
          if ('page' === child.inputType) {
              pages.push(child)
          }
        })
      } else {
        throw new Error("Unexpected to find an element that is not a top level element " + element.inputType)
      }
    })
    return pages
  }
}


module.exports = edSchema

