<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Patient Notes
    ehr-panel-content
      div(v-show="showEditControls")
        ui-button(v-on:buttonClicked="showDialog") Add a new progress notes
      div(:class="`${$options.name}__main`")
        table.table
          thead
            tr
              th(v-for="cell in uiProps.tableCells", :class="cell.propertyKey", :title="cell.propertyKey") {{ cell.label }}
          tbody
            tr(v-for="item in theData")
              td(v-for="cell in uiProps.tableCells", :class="cell.propertyKey") {{ item[cell.propertyKey] }}
    div(style="display:none") {{currentData}}
    ehr-dialog-form(:ehrHelp="ehrHelp", :ui-props="uiProps", :inputs="inputs", :errorList="errorList" )

</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrDialogForm from '../components/EhrDialogForm.vue'
import EhrHelp from '../ehr-helper'
import UiButton from '../../app/ui/UiButton.vue'
import moment from 'moment'
import { getPhrase } from '../poc-utils'

export default {
  name: 'ProgressNotes',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrDialogForm,
    UiButton
  },
  data: function() {
    return {
      dataKey: 'progressNotes',
      theData: {},
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
      this.theData = this.ehrHelp.mergedProperty()
      return this.theData
    },
    uiProps() {
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
        topRow: [
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
        middleRange: [{ column: [] }],
        lastRow: [
          {
            key: 'notes',
            classList: 'input-element-full'
          }
        ]
      }
      return { tableCells: tableCells, formDef: formDef }
    }
  },
  methods: {
    showDialog: function() {
      this.ehrHelp.showDialog()
    }
  },
  created() {
    this.ehrHelp = new EhrHelp(this, this.$store, this.dataKey, this.hasForm)
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
