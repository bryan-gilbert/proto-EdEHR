<template lang="pug">
  app-dialog(:class="$options.name", v-if="showingModal", :isModal="false", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
    h3(slot="header") Create a new progress note
    div(slot="body", class="ehr-page-content")
      div(class="input-fieldrow")
        ehr-dialog-form-element(v-for="fmEl in topRow", :key="fmEl.key", :inputs="inputs", :def="fmEl")
      hr
      div(v-for="row in middleRange")
        ehr-dialog-form-element(v-for="fmEl in row", :key="fmEl.key", :inputs="inputs", :def="fmEl")
      div(class="input-fieldrow")
        ehr-dialog-form-element(v-for="fmEl in lastRow", :key="fmEl.key", :inputs="inputs", :def="fmEl")
    span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import EhrDialogFormElement from '../components/EhrDialogFormElement.vue'

export default {
  name: 'EhrDialogForm',
  components: {
    EhrDialogFormElement,
    AppDialog
  },
  props: {
    ehrHelp: { type: Object },
    formDef: { type: Object },
    inputs: { type: Object },
    errorList: { type: Array }
  },
  computed: {
    showingModal() {
      return this.ehrHelp.showingDialog()
    },
    topRow() {
      let rows = this.formDef.rows
      let top = rows.length > 0 ? rows[0] : []
      console.log('top row ', top)
      return top
    },
    middleRange() {
      let rows = this.formDef.rows
      let middle = rows.length > 2 ? rows.slice(1, rows.length - 1) : []
      console.log('middle', middle)
      return middle
    },
    lastRow() {
      let rows = this.formDef.rows
      let last = rows.length > 1 ? rows[rows.length - 1] : []
      console.log('last row ', last)
      return last
    }
  },
  methods: {
    cancelDialog: function() {
      this.ehrHelp.cancelDialog()
    },
    saveDialog: function() {
      this.ehrHelp.saveDialog()
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/forms';
.EhrDialogForm {
}
</style>
