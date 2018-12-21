export default class EhrDialogHelp {
  constructor(component, store) {
    this.component = component
    this.$store = store
    this.showModal = false
  }

  setupDialogDef(uiProps) {
    function transfer(def) {
      var cells = uiProps.tableCells
      var key = def.key
      var cell = cells.find( c => key === c.propertyKey)
      def.label = cell.label
      def.type = cell.type
    }
    uiProps.formDef.topRow.forEach((def) => { transfer(def) })
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
            console.log(msg)
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
}
