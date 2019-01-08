'use strict'
const fs = require('fs')

/**
ule dependencies.
 */
const camelCase = require('camelcase')
const DEFAULT_KEY = 'defaultValue'

class RawInputToDef {
  /**
   * Main entry point. Provide the raw text as extracted from the Inputs spreadsheet.
   * Returns a stringify'd module.
   * @param contents
   * @param fileBaseName
   * @returns {string}
   */
  getDefinitions(contents, fileBaseName) {
    let modName = camelCase(fileBaseName)
    let c = contents
    c = this._zapGremlins(c)
    c = this._fixEmptyCells(c)
    c = this._fixTabs(c)
    // Fields may have data that spans multiple lines.
    // Replace linefeeds with a marker we can use to mark the end of each line.
    let mlFields = [
      'Options:',
      'Data_case_study:',
      'Data_first_case_study:',
      'Data_second_case_study',
      'Label:',
      'Helper_Text:',
      'Notes:',
      'Questions_for_the_group',
      'Mandatory'
    ]

    // Section	Label	Input_type	Options	Data_From	Input_format	Data_first_case_study	Data_second_case_study	Helper_Text	Mandatory	Validation	Notes	Questions_for_the_group	Element_Key	FQN	NavURL	Dependant_On_FQN
    mlFields.forEach(hdr => {
      let nlSep = '-NL-'
      c = this._fixMultiLineFields(c, hdr, nlSep)
    })
    // The input string has now been cleaned up and is ready to transform into an object
    // compose the return value ...
    let schema = {}
    schema[modName] = { fqn: modName, inputType: 'topLevel', entry: {} }
    let entries = this._rawToEntries(c)
    // entries.forEach( e => delete e.topLevel)
    var pages = this._groupByPages(entries)
    return pages
  }

  toPages(masterPageDefs) {
    // let defs = require("../ehr_defs/patient-profile")();
    let pages = {}
    Object.values(masterPageDefs).forEach(page => {
      let uiP = {}
      uiP.pageTitle = page.label
      uiP.dataKey = page.elementKey
      if (page[DEFAULT_KEY]) {
        uiP[DEFAULT_KEY] = page[DEFAULT_KEY]
      } else {
        uiP[DEFAULT_KEY] = '{}'
      }
      this._page(uiP, page)
      pages[uiP.dataKey] = uiP
    })
    return pages
  }
  // TODO day, time types

  /* *************** definition helpers ******** */

  /**
   * Take the array of entries and regroup the entries by page
   * @private
   * @param entries
   */
  _groupByPages(entries) {
    let pages = {}
    let cntTypes = ['page_form', 'table_row', 'table_column', 'subgroup']
    entries.forEach(entry => {
      if (!entry.page) {
        console.log('Why no page for this entry?', entry)
        return
      }
      let p = entry.page
      // delete entry.page
      if (entry.inputType === 'page') {
        pages[p] = entry
        pages[p].children = []
        pages[p].rawElements = []
        pages[p].containers = {}
      } else if (cntTypes.indexOf(entry.inputType) >= 0) {
        let pg = pages[p]
        pg.rawElements.push(entry)
        let cnt = entry.fqn
        // console.log('add container to page', pg.label, 'cnt', cnt)
        let container = {
          fqn: entry.uiContainer,
          type: entry.inputType,
          css: entry.css,
          columnCount: entry.colNumber,
          elements: []
        }
        pg.containers[cnt] = container
      } else {
        let pg = pages[p]
        pg.rawElements.push(entry)
        let containerKey = entry.uiContainer
        let container = pg.containers[containerKey]
        // console.log('containerKey container', containerKey, container)
        // TODO day, time types

        let containerChild = {
          css: entry.css,
          colNumber: entry.colNumber,
          elementKey: entry.elementKey,
          elementName: entry.elementName,
          defaultValue: entry.defaultValue,
          fqn: entry.fqn,
          helperText: entry.helperText,
          inputType: entry.inputType,
          label: entry.label,
          mandatory: entry.mandatory,
          rowNumber: entry.rowNumber,
          uiContainer: entry.uiContainer,
          validation: entry.validation
        }
        if (entry.options) {
          let parts = entry.options.split('-NL-')
          let opts = parts.map(p => {
            return { text: p }
          })
          containerChild.options = opts
        }
        container.elements.push(containerChild)
        // DATA
        let dataChild = {
          label: entry.label,
          elementKey: entry.elementKey,
          fqn: entry.fqn,
          dataFrom: entry.dataFrom,
          dataCaseStudy: entry.dataCaseStudy,
          assignment: entry.assignment
        }
        pg.children.push(dataChild)
      }
    })
    return pages
  }

  /**
   * The text content contains one line per entry.
   * Each line contains some key/value pairs.
   * Each k/v pair is wrapped in {}
   * Split the content into an array of entries each with a key/value map
   * @param content
   * @returns {Array}
   */
  _rawToEntries(content) {
    let lines = content.split('\n')
    let entries = []
    lines.forEach(aLine => {
      let entry = {}
      let regexp = /\{[^}]*\}/g
      let found = aLine.match(regexp)
      if (!found) {
        console.log('ERROR unable to find any kv pairs in this content:', aLine)
        return
      }
      found.forEach(part => {
        // slice off the surrounding {}
        let seq = part.slice(1, -1)
        let indexOfFirst = seq.indexOf(':')
        let key = seq.slice(0, indexOfFirst)
        let value = seq.slice(indexOfFirst + 1)
        key = camelCase(this._cleanStr(key))
        value = this._cleanStr(value)
        if (DEFAULT_KEY === key) {
          indexOfFirst = value.indexOf(':')
          if (indexOfFirst > 0) {
            value = '{' + value + '}'
            console.log('adjust ' + DEFAULT_KEY + ' to object syntax', value)
          }
        }
        entry[key] = value
      })
      entries.push(entry)
    })
    return entries
  }

  /* *************** to pages helpers ******** */

  _page(uiP, page) {
    console.log('Build form for page', page.label)
    Object.keys(page.containers).forEach(key => {
      let container = page.containers[key]
      if (container.type === 'page_form') {
        uiP.hasForm = true
        let rows = this._pageFormElement(container)
        uiP.page_form = {
          rows: rows
        }
      } else if (container.type === 'table_row') {
        uiP.hasTable = true
        uiP.tables = uiP.tables || []
        let tableCells = this._pageTableCells(container)
        let table = {
          addButtonText: 'testongggg',
          tableCells: tableCells
          // formDef:
        }
        uiP.tables.push(table)
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

  _pageTableCells(container) {
    let tableCells = []
    container.elements.forEach(element => {
      tableCells.push(element)
    })
    return tableCells
  }

  /* *************** UTILITIES ******** */

  /**
   * Trim white space.
   * Trim surrounding double quotes (part of the results when selecting, copying and pasting data from Excel
   * @param str
   * @returns {string}
   */
  _cleanStr(str) {
    let res = str.trim()
    if (res.length >= 2 && res.charAt(0) === '"') {
      res = res.slice(1, -1)
    }
    return res
  }

  /**
   * Fields may have data that spans multiple lines.
   * Search the entire contents for "{ sometext followed by multiline content up to the closing }"
   * Replace with { sometext followed by the contents of each line surrounded by double quotes
   * For example the following ...
   * "{Options: married
   *    single
   *    life partner
   *    divorced
   *    separated
   *    widowed}"
   * Becomes ....
   *    {Options: "married-NL-single-NL-life partner-NL-divorced-NL-separated-NL-widowed"}
   * @param contents
   * @param root
   * @param sep
   * @returns {string | * | void}
   */
  _fixMultiLineFields(contents, root, sep) {
    let s = '"{' + root + '[^"]*}"'
    let optsAll = new RegExp(s, 'g')
    // let found1 = contents.match(optsAll);
    let newContents = contents.replace(optsAll, function(opts) {
      let re = '({' + root + ')([^}]*)(}")'
      let regexp = new RegExp(re)
      let found = opts.match(regexp)
      let raw = found[2].split('\n').map(e => {
        return e.trim()
      })
      let results = '{' + root + ' "' + raw.join(sep) + '"}'
      return results
    })
    return newContents
  }

  /**
   * Assumption that empty cells contain a tab followed by 'eCell'.
   * Remove these from the content
   * @param contents
   * @returns {string}
   */
  _fixEmptyCells(contents) {
    let optsAll = /\teCell/g
    let newContents = contents.replace(optsAll, '')
    let emptyLine = /(eCell\n)/g
    newContents = newContents.replace(emptyLine, '')
    return newContents
  }

  /**
   * Replace all tabs with a space
   * @param contents
   * @returns {string | * | void}
   */
  _fixTabs(contents) {
    let optsAll = /\t/g
    let newContents = contents.replace(optsAll, ' ')
    return newContents
  }

  /**
   * Remove all non-ascii chars.  Sometimes a copy paste from Excel includes a whole bunch of junk
   * @param contents
   * @returns {string | * | void}
   */
  _zapGremlins(contents) {
    // eslint-disable-next-line no-control-regex
    return contents.replace(/[^\x00-\x7F]/g, '')
  }
}

module.exports = RawInputToDef
