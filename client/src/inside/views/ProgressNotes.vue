<template lang="pug">
  div(class="ehr-page")
    ehr-panel-header {{ uiProps.pageTitle }}
    ehr-panel-content
      ehr-page-table(v-for="tableDef in uiProps.tables", :tableDef="tableDef", :theData="theData", :ehrHelp="ehrHelp", :showEditControls="showEditControls")
    div(style="display:none") {{currentData}}
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrPageTable from '../components/EhrPageTable'
import EhrHelp from '../ehr-helper'
import moment from 'moment'
import { getPhrase } from '../poc-utils'

export default {
  name: 'ProgressNotes',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageTable
  },
  data: function() {
    return {
      dataKey: 'progressNotes',
      theData: [],
      ehrHelp: {},
      hasForm: false,
      loading: false,
      dialogData: {
        dataKey: 'progressNotes'
      },
      inputs: {},
      errorList: []
    }
  },
  computed: {
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    currentData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.ehrHelp.mergedProperty([])
      return this.theData
    },
    uiProps() {
      let uiP = {
        pageTitle: 'Progress notes',
        dataKey: 'genitourinary',
        hasForm: false,
        hasDialog: true,
        hasTransposedTable: false
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
          propertyKey: 'notes',
          label: 'Progress notes',
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
              key: 'notes',
              classList: 'input-element-full'
            }
          ]
        ]
      }
      let table = {
        addButtonText: 'Add a new progress notes',
        tableCells: tableCells,
        formDef: formDef
      }
      uiP.tables.push(table)
      return uiP
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
.ProgressNotes {
}
</style>
