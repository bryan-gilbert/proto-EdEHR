<template lang="pug">
  div
    div(v-show="showEditControls")
      ui-button(v-on:buttonClicked="showDialog") {{ tableDef.addButtonText }}
    div(class="row_table")
      table.table
        thead
          tr
            th(v-for="cell in tableDef.tableCells", :class="cell.propertyKey", :title="cell.propertyKey") {{ cell.label }}
        tbody
          tr(v-for="item in theData")
            td(v-for="cell in tableDef.tableCells", :class="cell.propertyKey") {{ item[cell.propertyKey] }}
    ehr-dialog-form(:ehrHelp="ehrHelp", :formDef="tableDef.tableForm", :inputs="inputs", :errorList="errorList" )
</template>

<script>
import EhrDialogForm from '../components/EhrDialogForm.vue'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrPageTable',
  components: {
    EhrDialogForm,
    UiButton
  },
  data: function() {
    return {
      inputs: {}
    }
  },
  props: {
    tableDef: { type: Object },
    theData: { type: Array },
    ehrHelp: { type: Object },
    showEditControls: { type: Boolean }
  },
  computed: {
    errorList() {
      return this.ehrHelp.getErrorList()
    }
  },
  methods: {
    showDialog: function() {
      this.ehrHelp.showDialog(this.tableDef, this.inputs)
    },
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
.EhrPageTable {
}
</style>
