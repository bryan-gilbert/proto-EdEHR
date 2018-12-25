import EventBus from '../event-bus'

export const DIALOG_INPUT_EVENT = 'dialogInputEvent'

export default class EhrDialogHelp {
  constructor(component, store) {
    this.component = component
    this.$store = store
    this.showModal = false
    const _this = this
    this.eventHandler = function(eData) { _this.receiveEvent(eData)}
    EventBus.$on(DIALOG_INPUT_EVENT, this.eventHandler) // eData => { this.receiveEvent(eData) })
    this.setupDialogDef(this.component.uiProps)
  }

  receiveEvent(eData) {
    // console.log(`On channel ${DIALOG_INPUT_EVENT} from key ${eData.key} got data: ${eData.value}`)
    this.component.inputs[eData.key] = eData.value
  }

  getInputValue(def) {
    var val = this.component.inputs[def.key]
    // console.log('helper provides val for key ', val, def.key)
    return val
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

  dialogEvent(eData) {
    const _this = this
    // register listener if needed
    this.eventHandler = function(eData) { _this.receiveEvent(eData)}
    EventBus.$on(this.eventChannelListen, this.eventHandler) // eData => { this.receiveEvent(eData) })

  }
}
