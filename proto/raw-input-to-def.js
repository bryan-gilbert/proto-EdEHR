'use strict'

/**
 * Module dependencies.
 */
const fs = require('fs')
const camelCase = require('camelcase')

class RawInputToDef {
  getDefinitions (contentFileName) {
    this.fileName = contentFileName
    console.log('filename ', this.fileName)
    let c = this.getContents()
    c = RawInputToDef.zapGremlins(c)
    c = RawInputToDef.fixEmptyCells(c)
    c = RawInputToDef.fixTabs(c)
    // Fields may have data that spans multiple lines.
    // Replace linefeeds with a marker we can use to mark the end of each line.
    let mlFields = ['Options:', 'Data:', 'Label:', 'Helper_Text:', 'Notes:']
    mlFields.forEach((hdr) => {
      let nlSep = '-NL-'
      c = this.fixMultiLineFields(c, hdr, nlSep)
    })

    // Take the raw blob of content and split into entries
    let entries = this.rawToEntries(c)
    // Take the entries and place them into a map
    let schema = {}
    entries.map((entry) => {
      let fqn = entry.fqn
      let parts = fqn.split('.')
      parts.pop()
      let parentFQN = parts.length > 0 ? parts.join('.') : ''
      let schemaElem = { fqn: fqn, parentFQN: parentFQN, entry: entry }
      schema[fqn] = schemaElem
    })

    // take the map of entries and cross link entries with parents and parents with children.
    // TODO
    Object.entries(schema).forEach(([key, element]) => {
      if (element.parentFQN) {
        let parent = schema[element.parentFQN]
        if (!parent) {
          let msg = `Unexpectedly did not find a parent for this schema entry ${element.fqn}`
          console.error(msg)
          throw new Error(msg)
        } else {
          element.parent = parent
          parent.children = parent.children || []
          parent.children.push(element)
        }
      }
    })
    return schema
  }

  /**
   * The text content contains one line per entry.
   * Each line contains some key/value pairs.
   * Each k/v pair is wrapped in {}
   * Split the content into an array of entries each with a key/value map
   * @param content
   * @returns {Array}
   */
  rawToEntries (content) {
    let lines = content.split('\n')
    let entries = []
    lines.forEach((aLine) => {
      let entry = {}
      let regexp = /\{[^}]*\}/g
      let found = aLine.match(regexp)
      found.forEach((part) => {
        let seq = part.slice(1, -1)
        let parts = seq.split(':')
        let key = camelCase(RawInputToDef.cleanStr(parts[0]))
        entry[key] = RawInputToDef.cleanStr(parts[1])
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
  static cleanStr (str) {
    let res = str.trim()
    if (res.length >= 2 && res.charAt(0) === '"') {
      res = res.slice(1, -1)
    }
    return res
  }

  /**
   * Reads the input file
   * @returns {*}
   */
  getContents () {
    let contents = fs.readFileSync(this.fileName, 'utf8')
    return contents
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
  fixMultiLineFields (contents, root, sep) {
    let s = '"{' + root + '[^"]*}"'
    let optsAll = new RegExp(s, 'g')
    // let found1 = contents.match(optsAll);
    let newContents = contents.replace(optsAll, function (opts) {
      let re = '({' + root + ')([^}]*)(}")'
      let regexp = new RegExp(re)
      let found = opts.match(regexp)
      let raw = found[2].split('\n').map((e) => {
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
  static fixEmptyCells (contents) {
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
  static fixTabs (contents) {
    let optsAll = /\t/g
    let newContents = contents.replace(optsAll, ' ')
    return newContents
  }

  /**
   * Remove all non-ascii chars.  Sometimes a copy paste from Excel includes a whole bunch of junk
   * @param contents
   * @returns {string | * | void}
   */
  static zapGremlins (contents) {
    // eslint-disable-next-line no-control-regex
    return contents.replace(/[^\x00-\x7F]/g, '')
  }
}

module.exports = RawInputToDef
