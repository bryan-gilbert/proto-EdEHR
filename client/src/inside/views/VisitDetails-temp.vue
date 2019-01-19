<template lang="pug">
  div(:class="$options.name")
    ui-spinner(:loading="loading")
    ehr-panel-header
      div Visit Details
      div(slot="controls", v-show="isStudent")
        button(v-on:click="beginEdit", v-show="notEditing")
          fas-icon(icon="edit")
        button(v-on:click="saveEdit", v-show="!notEditing")
          fas-icon(icon="check-circle")
        button(v-on:click="cancelEdit", v-show="!notEditing")
          fas-icon(icon="times-circle")
    ehr-panel-content
      div(class="region ehr-page-content")
        div(class="columns")
          div(class="column is-one-third")
            label(for="admissionDay") Admission day
            input(class="input", v-bind:disabled="notEditing", name="admissionDay",v-model="visitDetails.admissionDay")
          div(class="column is-one-third")
            label(for="admissionTime") Admission time
            input(class="input", v-bind:disabled="notEditing", name="admissionTime",v-model="visitDetails.admissionTime")
          div(class="column is-one-third")
            input(class="checkbox", type="checkbox", name="consentForTreatment",v-model="visitDetails.consentForTreatment")
            label(class="label-checkbox", for="consentForTreatment") Consent for treatment
        div(class="columns")
          div(class="column is-two-third")
            label(for="admittingDiagnosis") Admitting diagnosis
            textarea(v-bind:disabled="notEditing", name="admittingDiagnosis",v-model="visitDetails.admittingDiagnosis")
          div(class="column is-one-third")
            label(for="admissionStatus") Admission status
            div(class="select")
              select(name="admissionStatus", v-bind:disabled="notEditing",v-model="visitDetails.admissionStatus")
                option(disabled,value="") Please select one
                option(v-for="option in admissionStatusOptions", v-bind:value="option.text") {{ option.text}}
        div
          div &nbsp;
        div
          div(v-show="isStudent")
            ui-button(v-on:buttonClicked="showDialog") Add a new patient location
          div
            table.table
              thead
                tr
                  th Patient location
                  th Admission day
                  th Admission time
                  th Transfer out day
                  th Transfer out time
              tbody
                tr(v-for="item in visitDetails.locations")
                  td {{ item.patientLocation }}
                  td {{ item.admissionDay}}
                  td {{ item.admissionTime }}
                  td {{ item.transferOutDay }}
                  td {{ item.transferOutTime }}

    app-dialog( v-if="showModal", :isModal="true", @cancel="cancelDialog", @save="saveDialog", v-bind:errors="errorList")
      h3(slot="header") Add new patient location
      div(slot="body", class="ehr-page-content")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-medium input-name")
              label Patient location
              input(type="text", v-model="inputs.patientLocation")
            div(class="input-element input-element-medium")
              label Admission day
              input(type="text", v-model="inputs.admissionDay")
            div(class="input-element input-element-small")
              label Time
              input(type="text", v-model="inputs.admissionTime")
            div(class="input-element input-element-small")
              label Transfer out day
              input(type="text", v-model="inputs.transferOutDay")
            div(class="input-element input-element-small")
              label Time
              input(type="text", v-model="inputs.transferOutTime")
      span(slot="save-button") Create and close
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import UiButton from '../../app/ui/UiButton.vue'
import UiSpinner from '../../app/ui/UiSpinner'
import AppDialog from '../../app/components/AppDialogShell'
import moment from 'moment'
import EhrHelp from '../ehr-helper'
const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

export default {
  name: 'VisitDetails',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    AppDialog,
    UiButton,
    UiSpinner
  },
  data: function() {
    return {
      ehrHelp: {},
      notEditing: true,
      cacheAsString: '',
      loading: false,
      showModal: false,
      inputs: {},
      errorList: [],
      admissionStatusOptions: [
        { text: 'Admission in progress', value: 'Admission in progress' },
        { text: 'Admitted', value: 'Admitted' },
        { text: 'Inpatient', value: 'Inpatient' },
        { text: 'Outpatient', value: 'Outpatient' },
        { text: 'Surgical day care', value: 'Surgical day care' },
        { text: 'Discharge pending', value: 'Discharge pending' },
        { text: 'Discharged', value: 'Discharged' }
      ]
    }
  },
  computed: {
    isStudent() {
      return this.$store.getters['visit/isStudent']
    },
    username() {
      let info = this.$store.state.visit.sUserInfo
      return info ? info.fullName : ''
    },
    visitDetails() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.visitDetails || {}
      return JSON.parse(JSON.stringify(asStored))
    }
  },
  methods: {
    clearDialogInputs: function() {
      this.inputs = {
        patientLocation: '',
        admissionDay: '',
        admissionTime: '',
        transferOutDay: '',
        transferOutTime: ''
      }
      this.errorList = []
    },
    validateInputs: function() {
      var inputs = this.inputs
      // console.log('validate the inputs', inputs.name, this.inputs.name)
      inputs.patientLocation = inputs.patientLocation.trim()
      inputs.admissionDay = inputs.admissionDay.trim()
      inputs.admissionTime = inputs.admissionTime.trim()
      inputs.transferOutDay = inputs.transferOutDay.trim()
      inputs.transferOutTime = inputs.transferOutTime.trim()
      var vm = this
      function check(prop, msg) {
        if (prop.length == 0) {
          vm.errorList.push(msg)
        }
      }
      check(this.inputs.patientLocation, 'Location is required')
      // check(this.inputs.admissionDay, 'Admission day is required')
      // check(this.inputs.admissionTime, 'Admission time is required')
      // check(this.inputs.transferOutDay, 'Transfer out day is required')
      // check(this.inputs.transferOutTime, 'Transfer out time is required')
      return this.errorList.length === 0
    },
    showDialog: function() {
      this.clearDialogInputs()
      var today = moment().format('DD MMM')
      var time = moment().format('HH:mm')
      var inputs = this.inputs
      console.log('date is ', today, time)
      inputs.transferOutDay = today
      inputs.transferOutTime = time
      this.showModal = true
    },
    cancelDialog: function() {
      this.clearDialogInputs()
      this.showModal = false
    },
    saveDialog: function() {
      if (this.validateInputs()) {
        const _this = this
        this.loading = true
        this.showModal = false
        // console.log('Saving Progress Notes', this.inputs)
        // We wish to send a modified object to the API server and not directly update our client side copy.
        // Because the data is stored in our Vuex store we need to make a deep clone to prevent this error:
        // "Do not mutate vuex store state outside mutation handlers."
        let data = this.$store.getters['ehrData/assignmentData'] || {}
        console.log('in saving', data)
        console.log('in saving details', data.visitDetails)
        // let visitDetails = data.visitDetails || {}
        // let modifiedValue = JSON.parse(JSON.stringify(visitDetails))
        let modifiedValue = data.visitDetails || {}
        modifiedValue = modifiedValue ? JSON.parse(JSON.stringify(modifiedValue)) : []
        modifiedValue.locations = modifiedValue.locations || []
        modifiedValue.locations.push(this.inputs)
        // Prepare a payload to tell the API which property inside the assignment data to change
        console.log('saving updated data', modifiedValue)
        let payload = {
          property: 'visitDetails',
          value: modifiedValue
        }
        this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
          _this.loading = false
        })
      }
    },

    beginEdit: function() {
      this.notEditing = false
      this.cacheAsString = JSON.stringify(this.visitDetails)
    },
    cancelEdit: function() {
      let activityId = localStorage.getItem('activityId')
      this.$store.dispatch('ehrData/loadActivityData', { forStudent: true, id: activityId })
      this.notEditing = true
    },
    saveEdit: function() {
      const _this = this
      this.loading = true
      let payload = {
        property: 'visitDetails',
        value: this.visitDetails
      }
      this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
        _this.notEditing = true
        _this.loading = false
      })
    },
    unsavedData: function() {
      let result = false
      if (!this.notEditing) {
        let currentData = JSON.stringify(this.visitDetails)
        result = this.cacheAsString !== currentData
        console.log('unsavedData changes detected', this.cacheAsString, currentData)
      }
      return result
    }
  },
  created() {
    // this.ehrHelp = new EhrHelp(this, this.$store, this.dataKey, this.hasForm)
  },
  beforeRouteLeave(to, from, next) {
    // this.ehrHelp.beforeRouteLeave(to, from, next)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
.VisitDetails {
}
</style>
