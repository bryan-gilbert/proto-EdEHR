"use strict";
class MasterDefToPages {
  toPages(masterPageDefs) {
    // let defs = require("../ehr_defs/patient-profile")();
    let pages = {}
    Object.values(masterPageDefs).forEach(page => {
      let uiP = {};
      uiP.pageTitle = page.label;
      uiP.dataKey = page.elementKey;
      uiP.hasForm = page.hasForm;
      uiP.hasDialog = page.hasDialog;
      uiP.hasTransposedTable = page.hasTransposedTable;
      if (uiP.hasForm) {
        this._pageFormElement(uiP, page)
      }
      pages[uiP.dataKey] = uiP
    });
    return pages;
  }

  _pageFormElement(uiP, page) {
    let rowClasses = 'form-row columns'
    console.log('Build form for page', page.label)
    Object.keys(page.containers).forEach( key => {
      let container = page.containers[key]
      // TODO day, time types

      if(container.type === 'page_form') {
        uiP.hasForm = true
        let rows = []
        container.elements.forEach( element => {
          let rowNumber = element.rowNumber
          let row = rows[rowNumber - 1]
          if (!row) {
            row = {
              rowNumber: rowNumber,
              classList: rowClasses,
              uiContainer: element.uiContainer,
              elements: []
            }
            rows[rowNumber - 1] = row
          }
          row.elements.push(element)
        } )
        // sort the rows
        rows.sort( (a, b) => a.rowNumber - b.rowNumber)
        // sort the columns within a row
        rows.forEach( row => {
          row.elements.sort( (a, b) => a.colNumber - b.colNumber)
        })

        uiP.page_form = {
          rows: rows
        }

      } else if (container.type ==='table_row') {
        // uiP.rows.sort( (a, b) => a.rowNumber - b.rowNumber)

      }

    })
    // page.children.forEach(child => {
    //   if (child.ui_container) {
    //     let cnt = child.ui_container
    //   }
    //   if (child.row) {
    //     let rowNumber = child.row
    //     let colNumber = child.col
    //     let row = uiP.rows[rowNumber - 1]
    //     if (!row) {
    //       row = {
    //         rowNumber: rowNumber,
    //         classList: rowClasses,
    //         uiContainer: child.uiContainer,
    //         elements: []
    //       }
    //       uiP.rows[rowNumber - 1] = row
    //     }
    //     let element = {
    //       classList: child.css ? child.css : 'is-one-third',
    //       colNumber: colNumber,
    //       propertyKey: child.elementKey,
    //       label: child.label,
    //       type: child.inputType,
    //       mandatory: child.mandatory
    //     }
    //     row.elements.push(element)
    //   }
    // })
    // // sort the columns within a row
    // uiP.rows.forEach( row => {
    //   row.elements.sort( (a, b) => a.colNumber - b.colNumber)
    // })
    // // sort the rows
    // uiP.rows.sort( (a, b) => a.rowNumber - b.rowNumber)
  }
}

module.exports = MasterDefToPages;
