import EventBus from '../event-bus'

export const DIALOG_INPUT_EVENT = 'dialogInputEvent'

const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

export default class EhrHelp {
  constructor(component, store, dataKey, hasForm) {
    this.component = component
    this.$store = store
    this.dataKey = dataKey
    this.cacheAsString = ''
    const _this = this
    if (hasForm) {
      window.addEventListener('beforeunload', function(event) {
        _this.beforeUnloadListener(event)
      })
    }
    this.showModal = false
    this.eventHandler = function(eData) { _this.receiveEvent(eData)}
    EventBus.$on(DIALOG_INPUT_EVENT, this.eventHandler) // eData => { this.receiveEvent(eData) })
    this.setupDialogDef(this.component.uiProps)
    this.setupColumnData(this.component.uiProps)
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
  mergedProperty() {
    let data = this.$store.getters['ehrData/mergedData'] || {}
    let asStored = data[this.dataKey] || {}
    return JSON.parse(JSON.stringify(asStored))
  }

  getCurrentData() {
    return {
      propertyName: this.dataKey,
      value: this.component.getCurrentData()
    }
  }

  getInputValue(def) {
    var val = this.component.inputs[def.key]
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
        title: cell.propertyKey,
        value: cell.label
      }
      row.push(entry)
    })
    columns.push(row)
    assessments.forEach(item => {
      row = []
      uiProps.tableCells.forEach(cell => {
        var v = item[cell.propertyKey]
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

  setupDialogDef(uiProps) {
    const _this = this
    function transfer(def, defsList) {
      var cells = uiProps.tableCells
      var cell = cells.find(c => def.key === c.propertyKey)
      def.label = cell.label
      def.type = cell.type
      def.options = cell.options
      def.helper = _this
      if (cell.parent) {
        // console.log('look for cell parent', cell.parent, 'in', defsList)
        var parent = defsList.find(c => cell.parent === c.key)
        def.parent = parent
        def.targetValue = cell.targetValue
        // console.log('resulting def', def)
      }
    }
    uiProps.formDef.topRow.forEach((def) => { transfer(def) })
    uiProps.formDef.middleRange.forEach((column) => {
      column.column.forEach((def) => {
        transfer(def, column.column)
      })
    })
    uiProps.formDef.lastRow.forEach((def) => { transfer(def) })
  }

  /* ********************* DIALOG  */

  showingDialog() {
    return this.showModal
  }

  clearDialogInputs() {
    var cells = this.component.uiProps.tableCells
    cells.forEach((cell)=>{
      this.component.inputs[cell.propertyKey] = cell.defaultValue ? cell.defaultValue(this.$store) : ''
    })
    // empty the error list array
    this.component.errorList.length = 0
  }

  validateInputs() {
    var inputs = this.component.inputs
    var cells = this.component.uiProps.tableCells
    this.component.errorList.length = 0
    cells.forEach((cell)=>{
      if(cell.type === 'text') {
        inputs[cell.propertyKey] = inputs[cell.propertyKey].trim()
      }
      if(cell.validationRules) {
        cell.validationRules.forEach((rule) => {
          var value = inputs[cell.propertyKey]
          if (rule.required && value.length === 0) {
            var msg = cell.label + ' is required'
            // console.log('validateInput', msg)
            this.component.errorList.push(msg)
          }
        })
      }
    })
    return this.component.errorList.length === 0
  }

  showDialog() {
    this.clearDialogInputs()
    this.showModal = true
  }

  cancelDialog() {
    this.clearDialogInputs()
    this.showModal = false
  }

  saveDialog() {
    if (this.validateInputs()) {
      this.showModal = false
      this.loading = true
      let data = this.$store.getters['ehrData/assignmentData'] || {}
      let key = this.component.dialogData.dataKey
      console.log('save dialog data into ', key)
      var modifiedValue = data[key] || []
      modifiedValue = modifiedValue ? JSON.parse(JSON.stringify(modifiedValue)) : []
      modifiedValue.push(this.component.inputs)
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
    _this.$store.commit('system/setEditing', false)
    _this.$store.commit('system/setLoading', true)
    setTimeout(function() {
      _this.$store.commit('system/setLoading', false)
    }, 1000)
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
    this.eventHandler = function(eData) { _this.receiveEvent(eData)}
    EventBus.$on(this.eventChannelListen, this.eventHandler) // eData => { this.receiveEvent(eData) })

  }

  receiveEvent(eData) {
    // console.log(`On channel ${DIALOG_INPUT_EVENT} from key ${eData.key} got data: ${eData.value}`)
    this.component.inputs[eData.key] = eData.value
  }

}
