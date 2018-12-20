<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Patient Notes
    ehr-panel-content
      div(v-show="showEditControls")
        ui-button(v-on:buttonClicked="showDialog") Add a new progress notes
        div(style="display: inline-block; margin-left: 1rem;")
          input(type="checkbox", id="populate", v-model="populate")
          label(style="margin-left: 3px;", for="populate") {{ populateMsg }}
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
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-medium")
              label Name
              input(type="text", v-model="inputs.name")
            div(class="input-element input-element-medium")
              label Profession
              input(type="text", v-model="inputs.profession")
            div(class="input-element input-element-small")
              label Unit
              input(type="text", v-model="inputs.unit")
            div(class="input-element input-element-small")
              label Day
              input(type="text", v-model="inputs.day")
            div(class="input-element input-element-small")
              label Time
              input(type="text", v-model="inputs.time")
        hr
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              label Progress notes
              textarea(v-model="inputs.notes")
      span(slot="save-button") Create and close
    div(style="display:none") {{currentData}}
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
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
      errorList:[],

      populate: true
    }
  },
  computed: {
    populateMsg() {
      return 'Add with sample data ' + (this.populate ? 'enabled' : 'disabled')
    },
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
          validationRules:[
            { required: true }
          ]
        },
        {
          propertyKey: 'profession',
          label: 'Profession',
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
            return '0'
          }
        },
        {
          propertyKey: 'time',
          label: 'Time',
          type: 'text'
        },
        {
          propertyKey: 'notes',
          label: 'Progress notes',
          type: 'textarea',
          validationRules:[
            { required: true }
          ]
        }
      ]
      let formInputs = [
        {
          propertyKey: 'name',
          label: 'Name',
          type: 'text'
        },
        {
          propertyKey: 'profession',
          label: 'Profession',
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
          type: 'text'
        },
        {
          propertyKey: 'time',
          label: 'Time',
          type: 'text'
        },
        {
          propertyKey: 'notes',
          label: 'Progress notes',
          type: 'textarea'
        }
      ]
      return { tableCells: tableCells, formInputs: formInputs }
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
  },
  beforeRouteLeave(to, from, next) {
    this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
.ProgressNotes {
  &__main {
  }
}
</style>
