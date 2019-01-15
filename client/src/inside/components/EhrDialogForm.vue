<template lang="pug">
  app-dialog(:class="$options.name", v-if="showDialog", :isModal="false", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
    h3(slot="header") {{ tableDef.addButtonText }}
    div(slot="body", class="ehr-page-content")
      div(class="input-fieldrow")
        ehr-dialog-form-element(v-for="fmEl in topRow.elements", :key="fmEl.elementKey", :inputs="inputs", :def="fmEl")
      hr
      div(v-for="row in middleRange")
        ehr-dialog-form-element(v-for="fmEl in row.elements", :key="fmEl.elementKey", :inputs="inputs", :def="fmEl")
      div(class="input-fieldrow")
        ehr-dialog-form-element(v-for="fmEl in lastRow.elements", :key="fmEl.elementKey", :inputs="inputs", :def="fmEl")
    span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import EhrDialogFormElement from '../components/EhrDialogFormElement.vue'
import EventBus from '../../event-bus'

export default {
  name: 'EhrDialogForm',
  components: {
    EhrDialogFormElement,
    AppDialog
  },
  data: function() {
    return {
      showDialog: false
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object },
    tableDef: { type: Object },
    inputs: { type: Object },
    errorList: { type: Array }
  },
  computed: {
    tableKey() {
      return this.tableDef.tableKey
    },
    topRow() {
      // console.log('dialog get top row from ', this.tableDef)
      if (!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let top = rows.length > 0 ? rows[0] : []
      // console.log('top row ', this.tableDef, top)
      return top
    },
    middleRange() {
      if (!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let middle = rows.length > 2 ? rows.slice(1, rows.length - 1) : []
      // console.log('middle', middle)
      return middle
    },
    lastRow() {
      if (!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let last = rows.length > 1 ? rows[rows.length - 1] : []
      // console.log('last row ', last)
      return last
    }
  },
  methods: {
    cancelDialog: function() {
      this.ehrHelp.cancelDialog(this.tableKey)
    },
    saveDialog: function() {
      this.ehrHelp.saveDialog(this.pageDataKey, this.tableKey)
    },
    receiveCloseEvent(eData) {
      let value = eData.value
      this.showDialog = value
    }
  },
  mounted: function() {
    console.log('EhrDialogForm mounted', this.pageDataKey)
    const _this = this
    let ch = this.ehrHelp.getCloseChannelHandle(this.tableKey)
    this.eventHandler = function(eData) {
      _this.receiveCloseEvent(eData)
    }
    EventBus.$on(ch, this.eventHandler)
  },
  beforeDestroy: function() {
    console.log('EhrDialogForm beforeDestroy', this.pageDataKey)
    let ch = this.ehrHelp.getCloseChannelHandle(this.tableKey)
    if (this.eventHandler) {
      console.log('beforeDestroy, remove listener', ch)
      EventBus.$off(ch, this.eventHandler)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/forms';
.EhrDialogForm {
}
</style>
