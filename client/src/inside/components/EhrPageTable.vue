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
    ehr-dialog-form(:ehrHelp="ehrHelp", :tableDef="tableDef", :inputs="inputs", :errorList="errorList" )
    div(style="display:none") {{currentData}}
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
      tableDef: {},
      theData: [],
      inputs: {}
    }
  },
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object },
    showEditControls: { type: Boolean }
  },
  computed: {
    tableForm() {
      let form = this.tableDef.tableForm
      console.log('ehr page table get table form', this.tableDef)
      return form
    },
    errorList() {
      return this.ehrHelp.getErrorList(this.tableDef.tableKey)
    }
  },
  methods: {
    showDialog: function() {
      this.ehrHelp.showDialog(this.tableDef, this.inputs)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/forms';
.EhrPageTable {
}
</style>
