// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header
      div Demographics
      div(slot="controls", v-show="showEditControls")
        ehr-edit-controls(v-bind:ehrHelp="ehrHelp", @controlsCallback="controlsCallback")
    ehr-panel-content
      div(class="region ehr-page")

        div(:class="row.classList", v-for="row in uiProps.rows", v-bind:key="row.rowNumber")
          div(:class="element.classList", v-for="element in row.elements", v-bind:key="element.propertyKey")
            label(v-bind:for="element.propertyKey") {{element.label}}
            input(class="input", v-bind:disabled="notEditing", v-bind:name="element.propertyKey",v-model="theData[element.propertyKey]")


        div(class="columns")
          div(class="column is-one-third")
            label(for="preferredName") Preferred name
             input(class="input", v-bind:disabled="notEditing", name="preferredName",v-model="theData.preferredName")
          div(class="column is-one-third")
            label(for="dateOfBirth") Date of birth
             input(class="input", v-bind:disabled="notEditing", name="dateOfBirth",v-model="theData.dateOfBirth")
          div(class="column is-one-third")
            label(for="personAge") Age
             input(class="input", v-bind:disabled="notEditing", name="personAge",v-model="theData.personAge")
        div(class="columns")
          div(class="column is-one-third")
            label(for="gender") Gender {{theData.gender}}
            div(class="select")
              select(name="gender", v-bind:disabled="notEditing", v-model="theData.gender")
                option(disabled,value="") Please select one
                option(v-for="option in genders", v-bind:value="option.text") {{ option.text}}
          div(class="column is-one-third")
            label(for="martialStatus") Martial Status
            div(class="select")
              select(name="martialStatus", v-bind:disabled="notEditing",v-model="theData.martialStatus")
                option(disabled,value="") Please select one
                option(v-for="option in mStatuses", v-bind:value="option.text") {{ option.text}}
          div(class="column is-one-third")
            label(for="codeStatus") Code status
            div(class="select")
              select(name="codeStatus", v-bind:disabled="notEditing",v-model="theData.codeStatus")
                option(disabled,value="") Please select one
                option(v-for="option in codeStatuses", v-bind:value="option.text") {{ option.text}}
        div(class="columns")
          div(class="column is-one-third")
            label(for="languagePrimary") Primary language
            div(class="select")
              select(name="languagePrimary", v-bind:disabled="notEditing",v-model="theData.languagePrimary")
                option(disabled,value="") Please select one
                option(v-for="option in languages", v-bind:value="option.text") {{ option.text}}
          div(class="column is-one-third")
            label(for="religion") Religion
             input(class="input", v-bind:disabled="notEditing", name="religion",v-model="theData.religion")
          div(class="column is-one-third")
            label(for="indigenous") Do you identify as an indigenous person?
            div(class="select")
              select(name="indigenous", v-bind:disabled="notEditing",v-model="theData.indigenous")
                option(disabled,value="") Please select one
                option(value='no') No
                option(value='yes') Yes
        div(class="columns")
          div(class="column is-two-third")
            label(for="streetAddress") Street address
             input(class="input", v-bind:disabled="notEditing", name="streetAddress",v-model="theData.streetAddress")
          div(class="column is-one-third")
            label(for="sity") City
             input(class="input", v-bind:disabled="notEditing", name="city",v-model="theData.city")
        div(class="columns")
          div(class="column is-one-third")
            label(for="country") Country
             input(class="input", v-bind:disabled="notEditing", name="country",v-model="theData.country")
          div(class="column is-one-third")
            label(for="postalCode") Postal code
             input(class="input", v-bind:disabled="notEditing", name="postalCode",v-model="theData.postalCode")
          div(class="column is-one-third")
            input(class="checkbox", type="checkbox", name="noAddress",v-model="theData.noAddress")
            label(for="noAddress") No address

        div(class="columns")
          div(class="column is-one-third")
            label(for="phoneNumber") Phone number
             input(class="input", v-bind:disabled="notEditing", name="phoneNumber",v-model="theData.phoneNumber")
          div(class="column is-one-third")
            label(for="email") Email address
             input(class="input", v-bind:disabled="notEditing", name="email",v-model="theData.email")
          div(class="column is-one-third")
            label(for="occupation") Occupation/student
             input(class="input", v-bind:disabled="notEditing", name="occupation",v-model="theData.occupation")

        div(class="columns")
          div(class="column is-one-third")
            label(for="phn") PHN
             input(class="input", v-bind:disabled="notEditing", name="phn",v-model="theData.phn")
          div(class="column is-one-third")
            label(for="mrn") MRN
             input(class="input", v-bind:disabled="notEditing", name="mrn",v-model="theData.mrn")
          div(class="column is-one-third")
            label(for="patientService") Patient service
             input(class="input", v-bind:disabled="notEditing", name="patientService",v-model="theData.patientService")

        div(class="columns")
          div(class="column is-one-third")
            label(for="nextOfKin") Next of kin
             input(class="input", v-bind:disabled="notEditing", name="genextOfKinnder",v-model="theData.nextOfKin")
          div(class="column is-one-third")
            label(for="nextOfKinRelationsip") Next of kin relationship
             input(class="input", v-bind:disabled="notEditing", name="nextOfKinRelationsip",v-model="theData.nextOfKinRelationsip")
          div(class="column is-one-third")
            label(for="nextOfKinPhone") Next of kin phone
             input(class="input", v-bind:disabled="notEditing", name="nextOfKinPhone",v-model="theData.nextOfKinPhone")

        div(class="columns")
          div(class="column is-one-third")
            label(for="decisionMakerName") Decision maker name
             input(class="input", v-bind:disabled="notEditing", name="decisionMakerName",v-model="theData.decisionMakerName")
          div(class="column is-one-third")
            label(for="decisionMakerRelationship") Decision maker relationship
             input(class="input", v-bind:disabled="notEditing", name="decisionMakerRelationship",v-model="theData.decisionMakerRelationship")
          div(class="column is-one-third")
            label(for="decisionMakerPhone") Decision make phone
             input(class="input", v-bind:disabled="notEditing", name="decisionMakerPhone",v-model="theData.decisionMakerPhone")

</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrHelp from '../ehr-helper'

export default {
  name: 'Demographics',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrEditControls
  },
  data: function() {
    return {
      dataKey: 'demographics',
      uiProps: {
        rows: [
          {
            rowNumber: 1,
            classList: 'form-row columns',
            elements: [
              {
                classList:'column is-one-third',
                propertyKey: 'familyName',
                label: 'Last name G'
              },
              {
                classList:'column is-one-third',
                propertyKey: 'givenName',
                label: 'First name G'
              },
              {
                classList:'column is-one-third',
                propertyKey: 'middleName',
                label: 'Middle name G'
              }

            ]
          }
        ]
      },
      ehrHelp: {},
      hasForm: true,
      loading: false,
      genders: [
        { text: 'Unknown' },
        { text: 'Female' },
        { text: 'Male' },
        { text: 'Transgender female' },
        { text: 'Transgender male' },
        { text: 'Undifferentiated' },
        { text: 'Prefer not to say' }
      ],
      mStatuses: [
        { text: 'Married' },
        { text: 'Single' },
        { text: 'Life partner' },
        { text: 'Divorced' },
        { text: 'Separated' },
        { text: 'Widowed' }
      ],
      codeStatuses: [
        { text: 'N/A' },
        { text: 'CPR' },
        { text: 'DNR M1' },
        { text: 'DNR M2' },
        { text: 'DNR M3' },
        { text: 'DNR C1' },
        { text: 'DNR C2' }
      ],
      languages: [
        { text: 'English' },
        { text: 'French' },
        { text: 'Spanish' },
        { text: 'German' },
        { text: 'Chinese' }
      ]
    }
  },
  computed: {
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    theData() {
      return this.ehrHelp.theData()
    }
  },
  methods: {
    controlsCallback(callback) {
      callback(this.theData())
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

<style lang="scss" scoped>
@import '../../scss/settings/forms';

.region {
  /* border: 1px dashed black; */
}
.Demographics {
  &__main {
  }
}
</style>