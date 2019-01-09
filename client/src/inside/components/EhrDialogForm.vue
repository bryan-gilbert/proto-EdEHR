<template lang="pug">
  app-dialog(:class="$options.name", v-if="showDialog", :isModal="false", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
    h3(slot="header") Create a new progress note
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
      console.log('dialog get top row from ', this.tableDef)
      if(!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let top = rows.length > 0 ? rows[0] : []
      console.log('top row ', this.tableDef, top)
      return top
    },
    middleRange() {
      if(!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let middle = rows.length > 2 ? rows.slice(1, rows.length - 1) : []
      console.log('middle', middle)
      return middle
    },
    lastRow() {
      if(!this.tableDef.tableForm) {
        return []
      }
      let rows = this.tableDef.tableForm.rows
      let last = rows.length > 1 ? rows[rows.length - 1] : []
      console.log('last row ', last)
      return last
    },
    eventChannelListen() {
      return 'modal:' + this.tableKey
    }
  },
  methods: {
    emitCloseEvent() {
      const _this = this
      let eData = { key: this.tableKey, value: false }
      this.$nextTick(function() {
        // Send an event on our transmission channel
        // with a payload containing this false
        console.log('emit event',eData, _this.eventChannelListen)
        EventBus.$emit(_this.eventChannelListen, eData)
      })
    },
    cancelDialog: function() {
      this.emitCloseEvent()
      this.ehrHelp.cancelDialog(this.tableKey)
    },
    saveDialog: function() {
      this.emitCloseEvent()
      this.ehrHelp.saveDialog(this.tableKey)
    },
    receiveEvent(eData) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.showDialog = eData.value;//this.tableKey === eData.key ?  eData.value : this.showDialog
      console.log(`On channel ${this.eventChannelListen} from key ${eData.key} got hit? ${this.showDialog}`)
    }
  },
  mounted: function() {
    const _this = this
    this.eventHandler = function(eData) {
      _this.receiveEvent(eData)
    }
    EventBus.$on(this.eventChannelListen, this.eventHandler) // eData => { this.receiveEvent(eData) })
  },
  beforeDestroy: function() {
    if (this.eventChannelListen && this.eventHandler) {
      // console.log('beforeDestroy, remove listener',this.eventChannelListen)
      EventBus.$off(this.eventChannelListen, this.eventHandler)
    }
  },
}
</script>

<style lang="scss">
@import '../../scss/settings/forms';
.EhrDialogForm {
}
</style>
