"use strict";
class MasterDefToPages {
  toPages(masterPageDefs) {
    // let defs = require("../ehr_defs/patient-profile")();
    let rowClasses = 'form-row columns'
    let pages = {}
    Object.values(masterPageDefs).forEach(page => {
      let uiP = {};
      uiP.pageTitle = page.label;
      uiP.dataKey = page.elementKey;
      uiP.hasForm = page.hasForm;
      uiP.hasDialog = page.hasDialog;
      uiP.hasTransposedTable = page.hasTransposedTable;
      if (uiP.hasForm) {
        console.log('Build form for page', page.label)
        uiP.rows = []
        page.children.forEach (child => {
          if (child.row) {
            let rowNumber = child.row
            let colNumber = child.col
            let row = uiP.rows[rowNumber-1]
            if (!row) {
              row = {
                rowNumber: rowNumber,
                colNumber: colNumber,
                classList: rowClasses,
                uiContainer: child.uiContainer,
                elements: []
              }
              uiP.rows[rowNumber-1] = row
            }
            let element = {
              classList: child.css ? child.css : 'is-one-third',
              propertyKey: child.elementKey,
              label: child.label,
              type: child.inputType,
              mandatory: child.mandatory
            }
            if (child.options) {
              let parts = child.options.split('-NL-')
              let opts = parts.map( p => {
                return { text: p }
              })
              element.options = opts
            }
            // TODO day, time types
            row.elements.push(element)
          }
        })
      }
      pages[uiP.dataKey] = uiP
    });
    return pages;
  }
}

module.exports = MasterDefToPages;
