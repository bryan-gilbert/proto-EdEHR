'use strict'

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
  getDefinitions (contents, fileBaseName) {
    let modName = camelCase(fileBaseName)
    let c = contents
    c = this._zapGremlins(c)
    c = this._fixEmptyCells(c)
    c = this._fixTabs(c)
    // Fields may have data that spans multiple lines.
    // Replace linefeeds with a marker we can use to mark the end of each line.
    let mlFields = ['Options:',
      'Data_first_case_study:',
      'Data_second_case_study',
      'Label:', 'Helper_Text:', 'Notes:',
      'Questions_for_the_group',
    'Mandatory']

    // Section	Label	Input_type	Options	Data_From	Input_format	Data_first_case_study	Data_second_case_study	Helper_Text	Mandatory	Validation	Notes	Questions_for_the_group	Element_Key	FQN	NavURL	Dependant_On_FQN
    mlFields.forEach((hdr) => {
      let nlSep = '-NL-'
      c = this._fixMultiLineFields(c, hdr, nlSep)
    })
    // The input string has now been cleaned up and is ready to transform into an object
    // compose the return value ...
    let schema = {}
    schema[modName] = { fqn: modName, inputType: 'topLevel', entry: {} }
    // make the schema object
    this._rawToSchema(c, schema, modName)
    // take the data in the entry property and transfer to the container
    this._transferEntryData(schema)
    // Now convert the flat structure into a nested parent/child/grandchild structure.
    // Key to remove are all the original children. They are now stored under the parent so the old objects can be removed
    var keysToRemove = this._schemaCrossLink(schema)
    keysToRemove.forEach((key) => {
      schema[key] = undefined
    })
    // return a string representation of a module
    // clean up the stringify to produce code that complies with 'standard' javascript
    var results = JSON.stringify(schema, null, 2)
    results = results.replace(/'/g, "\\'")
    results = results.replace(/"/g, "'")
    // var modDef = 'const ' + modName + ' = ' + results + '\n'
    // modDef += 'module.exports = ' + modName + '\n'
    // var modDef = 'const ' + modName + ' = ' + results + '\n'
    var modDef = 'module.exports = function() { return' + results + '\n}'

    return modDef
  }

  /**
   * Take the raw blob of content and split into entries
   * @private
   * @param contents
   * @param schema
   * @param modName
   */
  _rawToSchema (contents, schema, modName) {
    let entries = this._rawToEntries(contents)
    // Take the entries and place them into a map
    entries.map((entry) => {
      entry.fqn = modName + '.' + entry.fqn
      let fqn = entry.fqn
      let parts = fqn.split('.')
      parts.pop()
      let parentFQN = parts.length > 0 ? parts.join('.') : ''
      let schemaElem = { fqn: fqn, parentFQN: parentFQN, entry: entry }
      schema[fqn] = schemaElem
    })
  }

  /**
   * take the map of entries and cross link entries with parents and parents with children.
   * @param schema
   * @returns {Array}
   * @private
   */
  _schemaCrossLink (schema) {
    var keysToRemove = []
    Object.entries(schema).forEach(([key, element]) => {
      if (element.parentFQN) {
        let parent = schema[element.parentFQN]
        if (!parent) {
          let msg = `Unexpectedly did not find a parent for this schema entry ${element.fqn}`
          console.error(msg)
          // throw new Error(msg)
        } else {
          // Don't link element up to parent because it creates circular references.
          // element.parent = parent
          // let parent know about all of its children.
          parent.children = parent.children || []
          parent.children.push(element)
          keysToRemove.push(key)
        }
      }
    })
    return keysToRemove
  }

  /**
   * transfer data from the entry field (data from the raw import) onto the new schema element
   * Do this before cross linking so that all elements are fully flushed out.
   * @param schema
   */
  _transferEntryData (schema) {
    // take the map of entries and cross link entries with parents and parents with children.
    Object.entries(schema).forEach(([key, element]) => {
      if (element.entry) {
        Object.assign(element, element.entry)
        element.entry = undefined
        element.section = undefined
        element.elementKey = undefined
      }
    })
  }

  /**
   * The text content contains one line per entry.
   * Each line contains some key/value pairs.
   * Each k/v pair is wrapped in {}
   * Split the content into an array of entries each with a key/value map
   * @param content
   * @returns {Array}
   */
  _rawToEntries (content) {
    let lines = content.split('\n')
    let entries = []
    lines.forEach((aLine) => {
      let entry = {}
      let regexp = /\{[^}]*\}/g
      let found = aLine.match(regexp)
      if(!found){
        console.log("ERROR unable to find kv pair", aLine)
        return;
      }
      found.forEach((part) => {
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
  _cleanStr (str) {
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
  _fixMultiLineFields (contents, root, sep) {
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
  _fixEmptyCells (contents) {
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
  _fixTabs (contents) {
    let optsAll = /\t/g
    let newContents = contents.replace(optsAll, ' ')
    return newContents
  }

  /**
   * Remove all non-ascii chars.  Sometimes a copy paste from Excel includes a whole bunch of junk
   * @param contents
   * @returns {string | * | void}
   */
  _zapGremlins (contents) {
    // eslint-disable-next-line no-control-regex
    return contents.replace(/[^\x00-\x7F]/g, '')
  }
}

module.exports = RawInputToDef
