import EventBus from '../event-bus'
import Vue from 'vue'
const pageDefsPP = require('../inside/defs/patient-profile')()
const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

export const DIALOG_INPUT_EVENT = 'dialogInputEvent'

export default class EhrHelp {
  constructor(component, store, dataKey, uiProps) {
    // the commponent reference is needed to save page form data
    this.component = component
    this.$store = store
    this.dataKey = dataKey
    this.cacheAsString = ''
    const _this = this
    if (uiProps.hasForm) {
      window.addEventListener('beforeunload', function(event) {
        _this.beforeUnloadListener(event)
      })
    }
    this.dialogMap = {}
    this.eventHandler = function(eData) {
      _this._handleDialogInputChangeEvent(eData)
    }
    EventBus.$on(DIALOG_INPUT_EVENT, this.eventHandler)
    if (uiProps.hasTransposedTable) {
      this.setupColumnData(uiProps)
    }
  }
  /* ********************* DATA  */

  getPageDefinition(pageKey) {
    let pageDef = pageDefsPP[pageKey]
    // debugehr('getPageDefinition ' + pageKey, pageDef)
    return pageDef
  }

  cacheData(pageDataKey) {
    debugehr('ehr helper caching data ', pageDataKey)
    this.cacheAsString = JSON.stringify(this.mergedProperty(pageDataKey))
  }

  getTableData() {
    // TODO move tableData code from compoent here
  }
  /**
   * Get and return the merged (seed + student's work) for the current page
   *
   * @returns {any}
   */
  mergedProperty(pageKey) {
    if (!pageKey) {
      errorehr('Must provide page key to get mergedPropert')
      return
    }
    // debugehr('mergedProperty get for', pageKey)
    let p = this.getPageDefinition(pageKey)
    let defaultValue = p.pageData
    if (!defaultValue) {
      defaultValue = {}
      debugehr('mergedProperty page defs did not spec a default so create one ', defaultValue)
    } else {
      // debugehr('mergedProperty page default data is ', JSON.stringify(defaultValue))
    }
    let data = this.$store.getters['ehrData/mergedData'] || {}
    let pageDataAsStored = data[pageKey]
    let asStored = pageDataAsStored || defaultValue
    let results = JSON.parse(JSON.stringify(asStored))
    // debugehr('mergedProperty as stored all data', data)
    // debugehr('mergedProperty as stored page data', pageDataAsStored)
    // debugehr('mergedProperty return results', results)
    // Intentional conversion to string to object to break connection with Vuex store.
    // We need this step because the UI isn't allowed to modify the as stored value
    return results
  }

  // getCurrentData() {
  //   return {
  //     propertyName: this.dataKey,
  //     value: this.component.getCurrentData()
  //   }
  // }

  getInputValue(def) {
    let inputs = this.currentDialog.inputs
    var val = inputs[def.elementKey]
    debugehr('helper provides val for key ', val, def.key)
    return val
  }

  /**
   Take the component's uiProps and the component's data and combine it into one table.
   Then rotates the table to place the header labels into the first column and
   each following row in a column.
   Place the result into uiProps.transposedColumns
   * @param uiProps
   */
  setupColumnData(uiProps) {
    /*
     */
    // TO DO get page key and pass to mergerProperty
    console.log('TO DO get page key and pass to mergerProperty')
    let theData = this.mergedProperty()
    let assessments = Array.isArray(theData) ? theData : []
    let columns = []
    let row = []
    uiProps.tableCells.forEach(cell => {
      var entry = {
        class: 'column_label',
        title: cell.elementKey,
        value: cell.label
      }
      row.push(entry)
    })
    columns.push(row)
    assessments.forEach(item => {
      row = []
      uiProps.tableCells.forEach(cell => {
        var v = item[cell.elementKey]
        var entry = {
          class: 'column_value',
          title: v,
          value: v
        }
        row.push(entry)
      })
      columns.push(row)
    })
    var transpose = columns[0].map((col, i) => columns.map(row => row[i]))
    uiProps.transposedColumns = transpose
  }

  /* ********************* DIALOG  */

  showDialog(tableDef, dialogInputs) {
    const _this = this
    let dialog = { tableDef: tableDef, inputs: dialogInputs }
    let key = tableDef.tableKey
    let eData = { key: key, value: true }
    let channel = 'modal:' + key
    // debugehr('showDialog for this tableDef', tableDef)
    EventBus.$emit(channel, eData)
    // add this dialog to the map
    this.dialogMap[key] = dialog
    // debugehr('set helper into each form element', tableDef.tableForm)
    let rows = tableDef.tableForm.rows
    rows.forEach(row => {
      row.elements.forEach(def => {
        def.helper = _this
      })
    })
    this._clearDialogInputs(key)
  }

  cancelDialog(key) {
    // debugehr('cancel dialog ', key)
    this._clearDialogInputs(key)
    this._emitCloseEvent(key)
  }

  saveDialog(key) {
    const _this = this
    if (this._validateInputs(key)) {
      _this.$store.commit('system/setLoading', true)
      let data = this.$store.getters['ehrData/assignmentData'] || {}
      let d = this.dialogMap[key]
      debugehr('saveDialog', d, 'data', data)
      let inputs = d.inputs
      debugehr('save dialog data into ', key)
      var modifiedValue = data[key] || []
      modifiedValue = modifiedValue ? JSON.parse(JSON.stringify(modifiedValue)) : []
      modifiedValue.push(inputs)
      debugehr('storing this: ', modifiedValue, key, d.tableKey)
      // Prepare a payload to tell the API which property inside the assignment data to change
      let payload = {
        propertyName: key,
        value: modifiedValue
      }
      this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
        _this._emitCloseEvent(key)
        _this.$store.commit('system/setLoading', false)
      })
    }
  }

  getCloseChannelHandle(key) {
    let channel = 'modal:' + key
    return channel
  }

  getErrorList(key) {
    let d = this.dialogMap[key]
    return d ? d.errorList : []
  }

  _emitCloseEvent(key) {
    let eData = { key: key, value: false }
    let channel = this.getCloseChannelHandle(key)
    Vue.nextTick(function() {
      // Send an event on our transmission channel
      // with a payload containing this false
      // debugehr('emit event', eData, 'on', channel)
      EventBus.$emit(channel, eData)
    })
  }

  _clearDialogInputs(key) {
    let d = this.dialogMap[key]
    let cells = d.tableDef.tableCells
    let inputs = d.inputs
    // TODO check that default values are working
    cells.forEach(cell => {
      inputs[cell.elementKey] = cell.defaultValue ? cell.defaultValue(this.$store) : ''
    })
    // empty the error list array
    d.errorList = []
  }

  // TODO validation will need rework as part of the DDD refactor
  _validateInputs(key) {
    let d = this.dialogMap[key]
    let cells = d.tableDef.tableCells
    let inputs = d.inputs
    debugehr('what is in the inputs? ', inputs)
    d.errorList = []
    cells.forEach(cell => {
      if (cell.type === 'text') {
        inputs[cell.elementKey] = inputs[cell.elementKey].trim()
      }
      if (cell.validationRules) {
        cell.validationRules.forEach(rule => {
          var value = inputs[cell.elementKey]
          if (rule.required && value.length === 0) {
            var msg = cell.label + ' is required'
            debugehr('validateInput', msg)
            d.errorList.push(msg)
          }
        })
      }
    })
    d.errorList.push('TODO remove force success once ready')
    // TODO remove force success once ready
    return true // d.errorList.length === 0
  }

  /* ********************* FORM  */

  /**
   * Show or don't show page edit controls or table open dialog buttons.
   * Currently the rule is simply "is the user a student" but this will need to
   * be changed if there is a need to let instructors "do the assignment" or
   * if we want to let the application be the place to edit seed data.
   * @return {*}
   */
  showEditControls() {
    return this.$store.getters['visit/isStudent']
  }

  /**
   * Return true if a page form is open for edit.
   * @return {(function())|default.computed.isEditing|boolean|*}
   */
  isEditing() {
    return this.$store.state.system.isEditing
  }

  /**
   * Begin editing a page form
   */
  beginEdit(pageDataKey) {
    this.$store.commit('system/setEditing', true)
    this.cacheData(pageDataKey)
  }

  /**
   * Cancel the edit on a page form. Restore values from the database.
   */
  cancelEdit() {
    const _this = this
    _this.$store.commit('system/setLoading', true)
    this.$store.dispatch('ehrData/restoreActivityData').then(() => {
      _this.$store.commit('system/setEditing', false)
      _this.$store.commit('system/setLoading', false)
    })
  }

  /**
   * Save changes made on a page form
   */
  saveEdit() {
    const _this = this
    _this.$store.commit('system/setEditing', false)
    _this.$store.commit('system/setLoading', true)
    let payload = this.getCurrentData()
    // debugehr('saveEdit payload', JSON.stringify(payload))
    _this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
      _this.$store.commit('system/setLoading', false)
    })
  }

  /**
   * Report if there is a page form open for edit and the data on the form has been modified
   * @return {boolean}
   */
  unsavedData() {
    var isEditing = this.$store.state.system.isEditing
    var result = false
    if (isEditing) {
      let dataDef = this.getCurrentData()
      let currentData = JSON.stringify(dataDef.value)
      // debugehr('current data', currentData)
      // debugehr('cacheAsString', this.cacheAsString)
      result = this.cacheAsString !== currentData
    }
    return result
  }

  /* ********************* EVENTS  */

  /**
   * If a page form is in edit mode and there are changes then warn the user before they navigate to
   * another part of this app.
   * @param to
   * @param from
   * @param next
   * @return {*}
   */
  beforeRouteLeave(to, from, next) {
    // debugehr('beforeRouteLeave ...', to)
    let unsaved = this.unsavedData()
    // debugehr('beforeRouteLeave ...', unsaved)
    if (unsaved) {
      if (!window.confirm(LEAVE_PROMPT)) {
        // unsaved data and the user wants to stay
        return next(false)
      }
    }
    var isEditing = this.$store.state.system.isEditing
    if (isEditing) {
      this.$store.commit('system/setEditing', false)
    }
    next()
  }

  /**
   * If the page form is in edit mode and there are changes then warn the user before they navigate
   * to another site
   * @param event
   */
  beforeUnloadListener(event) {
    let e = event || window.event
    // debugehr('beforeunload ...', e)
    let unsaved = this.unsavedData()
    debugehr('beforeunload ...', unsaved)
    if (unsaved) {
      // according to specs use preventDefault too.
      e.preventDefault()
      // many browsers ignore the prompt and provide their own
      e.returnValue = LEAVE_PROMPT
      // } else {
      // if you set any value into e.returnValue it will be converted to a string and that makes the prompt appear
      // So avoid this ...
      // e.returnValue = null
    }
    // e.returnValue = LEAVE_PROMPT
  }

  /**
   * When a dialog form input changes we get an update message here.
   * DIALOG_INPUT_EVENT
   * This message is from a child component and it's passing the new value up to the parent's helper (here).
   * Take the value and stash it into the appropriate input so we have access to the inputs when it's time to save.
   * @param eData
   * @private
   */
  _handleDialogInputChangeEvent(eData) {
    let def = eData.def
    let tableKey = def.tableKey
    let elementKey = def.elementKey
    let value = eData.value
    let d = this.dialogMap[tableKey]
    console.log(`On event from ${tableKey} ${elementKey} with dialog: ${d}`)
    let inputs = d.inputs
    inputs[elementKey] = value
  }
}

function debugehr(msg) {
  var args = Array.prototype.slice.call(arguments)
  args.shift()
  console.log('EHRhlp', msg, args)
}
function errorehr(msg, ...args) {
  console.log('ERROR EHRhlp', msg, args)
}
