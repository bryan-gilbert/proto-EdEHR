<template lang="pug">
  app-dialog(:class="$options.name", v-if="showingModal", :isModal="false", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
    h3(slot="header") Create a new progress note
    div(slot="body", class="ehr-page-content")
      div(class="input-fieldrow")
        ehr-dialog-form-element(v-for="fmEl in topRow", :key="fmEl.key", :inputs="inputs", :def="fmEl")
      hr
      div(v-for="block in middleRange")
        ehr-dialog-form-element(v-for="fmEl in block.column", :key="fmEl.key", :inputs="inputs", :def="fmEl")
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
    uiProps: { type: Object },
    inputs: { type: Object },
    errorList: { type: Array }
  },
  computed: {
    showingModal() {
      return this.ehrHelp.showingDialog()
    },
    topRow() {
      return this.uiProps.formDef.topRow
    },
    middleRange() {
      return this.uiProps.formDef.middleRange
    },
    lastRow() {
      return this.uiProps.formDef.lastRow
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
