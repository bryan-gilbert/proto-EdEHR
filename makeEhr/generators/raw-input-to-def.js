'use strict'
const fs = require('fs')

/**
ule dependencies.
 */
const camelCase = require('camelcase')

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

  /**
   * Take the array of entries and regroup the entries by page
   * @private
   * @param entries
   */
  _groupByPages(entries) {
    let pages = {}
    let cntTypes = ['form', 'table', 'subgroup']
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
        console.log('add container to page', pg.label, 'cnt', cnt)
        let container = {
          fqn: entry.uiContainer,
          type: entry.inputType,
          css: entry.css,
          children: []
        }
        pg.containers[cnt] = container
      } else {
        let pg = pages[p]
        pg.rawElements.push(entry)
        let containerKey = entry.uiContainer
        let container = pg.containers[containerKey]
        let containerChild = {
          css: entry.css,
          col: entry.col,
          elementKey: entry.elementKey,
          elementName: entry.elementName,
          defaultValue: entry.defaultValue,
          fqn: entry.fqn,
          helperText: entry.helperText,
          inputType: entry.inputType,
          label: entry.label,
          mandatory: entry.mandatory,
          options: entry.options,
          row: entry.row,
          uiContainer: entry.uiContainer,
          validation: entry.validation
        }
        container.children.push(containerChild)
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
        console.log('ERROR unable to find kv pair', aLine)
        return
      }
      found.forEach(part => {
        let seq = part.slice(1, -1)
        let parts = seq.split(':')
        let key = camelCase(this._cleanStr(parts[0]))
        entry[key] = this._cleanStr(parts[1])
      })
      entries.push(entry)
    })
    return entries
  }

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
