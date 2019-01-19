<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
    ehr-panel-content
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrDialogForm from '../components/EhrDialogForm.vue'
import EhrHelp from '../ehr-helper'
import UiButton from '../../app/ui/UiButton.vue'
import moment from 'moment'
import { getPhrase } from '../poc-utils'
/*
      div(v-show="showEditControls")
        ui-button(v-on:buttonClicked="showDialog") {{ uiProps.addButtonText }}
      div(class="column_table")
        table.table
          tbody
            tr(v-for="column in columnData")
              td(v-for="cell in column", :class="cell.class") {{ cell.value }}
    div(style="display:none") {{currentData}}
    ehr-dialog-form(:ehrHelp="ehrHelp", :ui-props="uiProps", :inputs="inputs", :errorList="errorList" )

 */
export default {
  name: 'Genitourinary',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrDialogForm,
    UiButton
  },
  data: function() {
    return {
      dataKey: 'genitourinary',
      theData: {},
      hasForm: false,
      loading: false,

      ehrHelp: {},
      dialogData: {
        dataKey: 'genitourinary'
      },
      inputs: {},
      errorList: []
    }
  },
  computed: {
    uiProps() {
      let uiP = {
        pageTitle: 'Genitourinary',
        dataKey: 'genitourinary',
        hasForm: false,
        hasDialog: true,
        hasTransposedTable: true
      }
      uiP.tables = []
      let tableCells = [
        {
          propertyKey: 'name',
          label: 'Name',
          type: 'text',
          defaultValue: function($store) {
            return $store.state.visit.sUserInfo.fullName
          },
          validationRules: [{ required: true }]
        },
        {
          propertyKey: 'profession',
          label: 'Profession',
          type: 'text',
          defaultValue: function($store) {
            return 'Nurse'
          }
        },
        {
          propertyKey: 'unit',
          label: 'Unit',
          type: 'text'
        },
        {
          propertyKey: 'day',
          label: 'Day',
          type: 'text',
          defaultValue: function() {
            return moment().format('DD MMM')
          }
        },
        {
          propertyKey: 'time',
          label: 'Time',
          type: 'text',
          defaultValue: function($store) {
            return moment().format('HH:mm')
          }
        },
        {
          propertyKey: 'urinarySymptoms',
          label: 'Urinary symptoms',
          type: 'checklistWithOther',
          options: [
            { text: 'None' },
            { text: 'Increased frequency' },
            { text: 'Dysuria' },
            { text: 'Hernaturia' }
          ]
        },
        {
          propertyKey: 'lastVoidedDay',
          label: 'Last voided day',
          type: 'text'
        },
        {
          propertyKey: 'lastVoidedTime',
          label: 'Last voided time',
          type: 'text'
        },
        {
          propertyKey: 'foley',
          label: 'Foley',
          type: 'select',
          options: [{ text: 'No' }, { text: 'Yes' }]
        },
        {
          propertyKey: 'comments',
          label: 'Comments',
          type: 'textarea',
          defaultValue: function($store) {
            return 'Random: ' + getPhrase(4)
          },
          validationRules: [{ required: true }]
        }
      ]
      let formDef = {
        rows: [
          [
            {
              key: 'name',
              classList: 'input-element-medium'
            },
            {
              key: 'profession',
              classList: 'input-element-medium'
            },
            {
              key: 'unit',
              classList: 'input-element-small'
            },
            {
              key: 'day',
              classList: 'input-element-small'
            },
            {
              key: 'time',
              classList: 'input-element-small'
            }
          ],
          [
            {
              key: 'urinarySymptoms'
            },
            {
              key: 'lastVoidedDay'
            },
            {
              key: 'lastVoidedTime'
            },
            {
              key: 'foley'
            }
          ],
          [
            {
              key: 'comments',
              classList: 'input-element-full'
            }
          ]
        ]
      }
      let table = {
        addButtonText: 'Add a assessment',
        tableCells: tableCells,
        formDef: formDef
      }
      uiP.tables.push(table)
      return uiP
    },
    columnData() {
      // The EHR Helper combines the uiProps and this component's data into a transposed table
      return this.uiProps.transposedColumns
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    currentData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.ehrHelp.mergedProperty()
      return this.theData
    }
  },
  methods: {
    showDialog: function() {
      this.ehrHelp.showDialog()
    }
  },
  created() {
    this.ehrHelp = new EhrHelp(this, this.$store, this.dataKey, this.uiProps)
  },
  beforeRouteLeave(to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/forms';
</style>
