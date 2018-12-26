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
  }

  showEditControls() {
    return this.$store.getters['visit/isStudent']
  }

  cacheData() {
    // console.log('ehr helper caching data ', data)
    this.cacheAsString = JSON.stringify(this.mergedProperty())
  }

  isEditing() {
    return this.$store.state.system.isEditing
  }

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
}
