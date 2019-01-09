import EventBus from '../event-bus'

export const DIALOG_INPUT_EVENT = 'dialogInputEvent'

const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

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

  cacheData() {
    // console.log('ehr helper caching data ', data)
    this.cacheAsString = JSON.stringify(this.mergedProperty())
  }

  /**
   * Get and return the merged (seed + student's work) for the current page
   *
   * @returns {any}
   */
  mergedProperty(defaultValue) {
    defaultValue = defaultValue || {}
    let data = this.$store.getters['ehrData/mergedData'] || {}
    let asStored = data[this.dataKey] || defaultValue
    return JSON.parse(JSON.stringify(asStored))
  }

  getCurrentData() {
    return {
      propertyName: this.dataKey,
      value: this.component.getCurrentData()
    }
  }

  getInputValue(def) {
    let inputs = this.currentDialog.inputs
    var val = inputs[def.elementKey]
    console.log('helper provides val for key ', val, def.key)
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
    // console.log('showDialog for this tableDef', tableDef)
    EventBus.$emit(channel, eData)
    // add this dialog to the map
    this.dialogMap[key] = dialog
    // console.log('set helper into each form element', tableDef.tableForm)
    let rows = tableDef.tableForm.rows
    rows.forEach(row => {
      row.elements.forEach(def => {
        def.helper = _this
      })
    })
    this._clearDialogInputs(key)
  }

  cancelDialog(key) {
    console.log('cancel dialog ', key)
    this._clearDialogInputs(key)
  }

  saveDialog(key) {
    const _this = this
    if (this._validateInputs(key)) {
      _this.$store.commit('system/setLoading', true)
      let data = this.$store.getters['ehrData/assignmentData'] || {}
      let d = this.dialogMap[key]
      let inputs = d.inputs
      // let key = d.tableDef.tableKey
      console.log('save dialog data into ', key)
      var modifiedValue = data[key] || []
      modifiedValue = modifiedValue ? JSON.parse(JSON.stringify(modifiedValue)) : []
      modifiedValue.push(inputs)
      console.log('storing this: ', modifiedValue)
      // Prepare a payload to tell the API which property inside the assignment data to change
      let payload = {
        propertyName: key,
        value: modifiedValue
      }
      this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
        _this.$store.commit('system/setLoading', false)
      })
    }
  }

  getErrorList(key) {
    let d = this.dialogMap[key]
    return d ? d.errorList : []
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
    // let cells = d.tableDef.tableCells
    let inputs = d.inputs
    console.log('what is in the inputs? ', inputs)
    return false
    // d.errorList = []
    // cells.forEach(cell => {
    //   if (cell.type === 'text') {
    //     inputs[cell.elementKey] = inputs[cell.elementKey].trim()
    //   }
    //   if (cell.validationRules) {
    //     cell.validationRules.forEach(rule => {
    //       var value = inputs[cell.elementKey]
    //       if (rule.required && value.length === 0) {
    //         var msg = cell.label + ' is required'
    //         // console.log('validateInput', msg)
    //         d.errorList.push(msg)
    //       }
    //     })
    //   }
    // })
    // return d.errorList.length === 0
  }

  /* ********************* FORM  */

  showEditControls() {
    return this.$store.getters['visit/isStudent']
  }

  isEditing() {
    return this.$store.state.system.isEditing
  }

  beginEdit() {
    this.$store.commit('system/setEditing', true)
    this.cacheData()
  }

  cancelEdit() {
    const _this = this
    _this.$store.commit('system/setLoading', true)
    this.$store.dispatch('ehrData/restoreActivityData').then(() => {
      _this.$store.commit('system/setEditing', false)
      _this.$store.commit('system/setLoading', false)
    })
  }

  saveEdit() {
    const _this = this
    _this.$store.commit('system/setEditing', false)
    _this.$store.commit('system/setLoading', true)
    let payload = this.getCurrentData()
    // console.log('saveEdit payload', JSON.stringify(payload))
    _this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
      _this.$store.commit('system/setLoading', false)
    })
  }

  unsavedData() {
    var isEditing = this.$store.state.system.isEditing
    var result = false
    if (isEditing) {
      let dataDef = this.getCurrentData()
      let currentData = JSON.stringify(dataDef.value)
      // console.log('current data', currentData)
      // console.log('cacheAsString', this.cacheAsString)
      result = this.cacheAsString !== currentData
      // console.log('unsavedData changes detected', this.cacheAsString, currentData)
    }
    return result
  }

  /* ********************* EVENTS  */

  beforeRouteLeave(to, from, next) {
    // console.log('beforeRouteLeave ...', to)
    let unsaved = this.unsavedData()
    // console.log('beforeRouteLeave ...', unsaved)
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

  beforeUnloadListener(event) {
    let e = event || window.event
    // console.log('beforeunload ...', e)
    let unsaved = this.unsavedData()
    console.log('beforeunload ...', unsaved)
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

  _handleDialogInputChangeEvent(eData) {
    let def = eData.def
    let tableKey = def.tableKey
    let elementKey = def.elementKey
    let value = eData.value
    let d = this.dialogMap[tableKey]
    let inputs = d.inputs
    console.log(
      `On channel ${DIALOG_INPUT_EVENT} event from ${tableKey} ${elementKey} with data: ${value}`
    )
    inputs[elementKey] = value
  }
}
