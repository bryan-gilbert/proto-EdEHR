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
    app-dialog( v-if="showingModal", :isModal="true", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") Create a new progress note
      div(slot="body", class="ehr-page")
        div(class="input-fieldrow")
          ehr-dialog-form-element(v-for="formElement in uiProps.formDef.topRow", class="input-element", :class="formElement.classList", :def="formElement", :value="inputs[formElement.key]", @input="inputs[formElement.key] = $event")
        hr
        div(class="input-fieldrow")
          ehr-dialog-form-element(v-for="formElement in uiProps.formDef.lastRow", class="input-element", :class="formElement.classList", :def="formElement", :value="inputs[formElement.key]", @input="inputs[formElement.key] = $event")
      span(slot="save-button") Create and close
    div(style="display:none") {{currentData}}
</template>

<script>
  /*
            div(v-for="formElement in uiProps.formDef.lastRow", class="input-element", :class="formElement.classList")
            label {{formElement.label }}
            input(type="text", v-model="inputs[formElement.key]")

label {{formElement.label }}
input(type="text", v-model="inputs[formElement.key]")

   */
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrDialogFormElement from '../components/EhrDialogFormElement.vue'
import EhrHelp from '../ehr-helper'
import EhrDialogHelp from '../ehr-dialog-helper'
import UiButton from '../../app/ui/UiButton.vue'
import AppDialog from '../../app/components/AppDialogShell'
import moment from 'moment'
import { getPhrase } from '../poc-utils'

export default {
  name: 'ProgressNotes',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrDialogFormElement,
    AppDialog,
    UiButton
  },
  data: function() {
    return {
      dataKey: 'progressNotes',
      theData: {},
      ehrHelp: {},
      hasForm: false,
      loading: false,

      ehrDialogHelp: {},
      dialogData: {
        dataKey: 'progressNotes'
      },
      inputs: {},
      errorList: []
    }
  },
  computed: {
    showingModal() {
      return this.ehrDialogHelp.showingDialog()
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    currentData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.ehrHelp.theData()
      return this.theData
    },
    progressNotes() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let pn = data.progressNotes || []
      console.log('get PN ', data, pn)
      return pn
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
          defaultValue: function($store) {
            return 'Nurse'
          },
          type: 'text'
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
          defaultValue: function($store) {
            return moment().format('HH:mm')
          },
          type: 'text'
        },
        {
          propertyKey: 'notes',
          label: 'Progress notes',
          type: 'textarea',
          defaultValue: function($store) {
            return 'Some random words: ' + getPhrase(14)
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
        middleRange: [],
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
      this.ehrDialogHelp.showDialog()
    },
    cancelDialog: function() {
      this.ehrDialogHelp.cancelDialog()
    },
    saveDialog: function() {
      this.ehrDialogHelp.saveDialog()
    }
  },
  created() {
    this.ehrHelp = new EhrHelp(this, this.$store, this.dataKey, this.hasForm)
    this.ehrDialogHelp = new EhrDialogHelp(this, this.$store)
    this.ehrDialogHelp.setupDialogDef(this.uiProps)
  },
  beforeRouteLeave(to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss">
@import '../../scss/settings/forms';
.ProgressNotes {
  &__main {
  }
}
</style>
