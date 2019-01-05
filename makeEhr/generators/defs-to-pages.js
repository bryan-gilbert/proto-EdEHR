"use strict";
class MasterDefToPages {
  toPages(masterPageDefs) {
    // let defs = require("../ehr_defs/patient-profile")();
    let pages = {}
    Object.values(masterPageDefs).forEach(page => {
      let uiP = {};
      uiP.pageTitle = page.label;
      uiP.dataKey = page.elementKey;
      this._page(uiP, page)
      pages[uiP.dataKey] = uiP
    });
    return pages;
  }
  // TODO day, time types

  _page(uiP, page) {
    console.log('Build form for page', page.label)
    Object.keys(page.containers).forEach( key => {
      let container = page.containers[key]
      if(container.type === 'page_form') {
        uiP.hasForm = true
        let rows = this._pageFormElement(container)
        uiP.page_form = {
          rows: rows
        }
      } else if (container.type ==='table_row') {
        uiP.hasTable = true
        uiP.tables = uiP.tables || []
      }
    })
  }

  _pageFormElement(container) {
    let rows = []
    container.elements.forEach(element => {
      let rowNumber = element.rowNumber
      let row = rows[rowNumber - 1]
      if (!row) {
        row = {
          rowNumber: rowNumber,
          classList: 'form-row columns',
          uiContainer: element.uiContainer,
          elements: []
        }
        rows[rowNumber - 1] = row
      }
      row.elements.push(element)
    })
    // sort the rows
    rows.sort((a, b) => a.rowNumber - b.rowNumber)
    // sort the columns within a row
    rows.forEach(row => {
      row.elements.sort((a, b) => a.colNumber - b.colNumber)
    })
    return rows
  }

  _pageTableElement(container) {
    let rows = []
    container.elements.forEach(element => {
      let rowNumber = element.rowNumber
      let row = rows[rowNumber - 1]
      if (!row) {
        row = {
          rowNumber: rowNumber,
          classList: 'form-row columns',
          uiContainer: element.uiContainer,
          elements: []
        }
        rows[rowNumber - 1] = row
      }
      row.elements.push(element)
    })
    // sort the rows
    rows.sort((a, b) => a.rowNumber - b.rowNumber)
    // sort the columns within a row
    rows.forEach(row => {
      row.elements.sort((a, b) => a.colNumber - b.colNumber)
    })
    return rows
  }

}

module.exports = MasterDefToPages;
