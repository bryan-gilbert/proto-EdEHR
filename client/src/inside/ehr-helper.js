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
      _this.receiveEvent(eData)
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
    // console.log('helper provides val for key ', val, def.key)
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
    let key = tableDef.tableKey
    let eData = { key: key, value: true }
    let channel = 'modal:' + key
    EventBus.$emit(channel, eData)

    let dialog  = { tableDef: tableDef, inputs: dialogInputs }
    this.dialogMap[key] = dialog
    console.log('showDialog for this tableDef', tableDef)
    let rows = tableDef.tableForm.rows
    console.log('set helper into each form element', tableDef.tableForm)
    rows.forEach(row => {
      row.elements.forEach(def => {
        def.helper = _this
      })
    })
    this._clearDialogInputs(key)
    tableDef.showModal = true
  }

  cancelDialog(key) {
    console.log('cancel dialog ', key)
    this._clearDialogInputs(key)
    let d = this.dialogMap[key]
    d.tableDef.showModal = false
  }

  saveDialog(key) {
    if (this._validateInputs(key)) {
      this.loading = true
      let data = this.$store.getters['ehrData/assignmentData'] || {}
      let d = this.dialogMap[key]
      d.tableDef.showModal = false
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
      const _this = this
      this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
        _this.loading = false
      })
    }
  }

  showingDialog(key) {
    let d = this.dialogMap[key]
    return d ? d.tableDef.showModal : false
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
    let cells = d.tableDef.tableCells
    let inputs = d.inputs
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
            // console.log('validateInput', msg)
            d.errorList.push(msg)
          }
        })
      }
    })
    return d.errorList.length === 0
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

  dialogEvent(eData) {
    const _this = this
    // register listener if needed
    this.eventHandler = function(eData) {
      _this.receiveEvent(eData)
    }
    EventBus.$on(this.eventChannelListen, this.eventHandler) // eData => { this.receiveEvent(eData) })
  }

  receiveEvent(eData) {
    console.log(`On channel ${DIALOG_INPUT_EVENT} from key ${eData.key} got data: ${eData.value}`)
    // let inputs = this.currentDialog.inputs
    // inputs[eData.key] = eData.value
  }
}
