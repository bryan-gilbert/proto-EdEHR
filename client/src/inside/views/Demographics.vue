// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(:class="$options.name")
    ui-spinner(:loading="loading")
    ehr-panel-header
      div(slot="pageTitle") Demographics 2
      div(slot="controls")
        button(v-on:click="beginEdit", v-show="noEdit")
          fas-icon(icon="edit")
        button(v-on:click="saveEdit", v-show="!noEdit")
          fas-icon(icon="check-circle")
        button(v-on:click="cancelEdit", v-show="!noEdit")
          fas-icon(icon="times-circle")
    ehr-panel-content
      div(class="region")
        div(class="columns")
          div(class="column is-one-third")
            label(for="familyName") Last name
             input(class="input", v-bind:disabled="noEdit", name="familyName",v-model="demographics.familyName")
          div(class="column is-one-third")
            label(for="givenName") First name
             input(class="input", v-bind:disabled="noEdit", name="givenName",v-model="demographics.givenName")
          div(class="column is-one-third")
            label(for="middleName") Middle name(s)
             input(class="input", v-bind:disabled="noEdit", name="middleName",v-model="demographics.middleName")
        div(class="columns")
          div(class="column is-one-third")
            label(for="preferredName") Preferred name
             input(class="input", v-bind:disabled="noEdit", name="preferredName",v-model="demographics.preferredName")
          div(class="column is-one-third")
            label(for="dateOfBirth") Date of birth
             input(class="input", v-bind:disabled="noEdit", name="dateOfBirth",v-model="demographics.dateOfBirth")
          div(class="column is-one-third")
            label(for="personAge") Age
             input(class="input", v-bind:disabled="noEdit", name="personAge",v-model="demographics.personAge")
        div(class="columns")
          div(class="column is-one-third")
            label(for="gender") Gender {{demographics.gender}}
            div(class="select")
              select(name="gender", v-bind:disabled="noEdit", v-model="demographics.gender")
                option(v-for="option in genders", v-bind:value="option.text") {{ option.text}}
          div(class="column is-one-third")
            label(for="martialStatus") Martial Status
            div(class="select")
              select(name="martialStatus", v-bind:disabled="noEdit",v-model="demographics.martialStatus")
                option(v-for="option in mStatuses", v-bind:value="option.text") {{ option.text}}
          div(class="column is-one-third")
            label(for="codeStatus") Code status
            div(class="select")
              select(name="codeStatus", v-bind:disabled="noEdit",v-model="demographics.codeStatus")
                option(v-for="option in codeStatuses", v-bind:value="option.text") {{ option.text}}
        div(class="columns")
          div(class="column is-one-third")
            label(for="languagePrimary") Primary language
            div(class="select")
              select(name="languagePrimary", v-bind:disabled="noEdit",v-model="demographics.languagePrimary")
                option(v-for="option in languages", v-bind:value="option.text") {{ option.text}}
          div(class="column is-one-third")
            label(for="religion") Religion
             input(class="input", v-bind:disabled="noEdit", name="religion",v-model="demographics.religion")
          div(class="column is-one-third")
            label(for="indigenous") Do you identify as an indigenous person?
            div(class="select")
              select(name="indigenous", v-bind:disabled="noEdit",v-model="demographics.indigenous")
                option(value='no') No
                option(value='yes') Yes
        div(class="columns")
          div(class="column is-two-third")
            label(for="streetAddress") Street address
             input(class="input", v-bind:disabled="noEdit", name="streetAddress",v-model="demographics.streetAddress")
          div(class="column is-one-third")
            label(for="sity") City
             input(class="input", v-bind:disabled="noEdit", name="city",v-model="demographics.city")
        div(class="columns")
          div(class="column is-one-third")
            label(for="country") Country
             input(class="input", v-bind:disabled="noEdit", name="country",v-model="demographics.country")
          div(class="column is-one-third")
            label(for="postalCode") Postal code
             input(class="input", v-bind:disabled="noEdit", name="postalCode",v-model="demographics.postalCode")
          div(class="column is-one-third")
            input(class="checkbox", type="checkbox", name="noAddress",v-model="demographics.noAddress")
            label(for="noAddress") No address

        div(class="columns")
          div(class="column is-one-third")
            label(for="phoneNumber") Phone number
             input(class="input", v-bind:disabled="noEdit", name="phoneNumber",v-model="demographics.phoneNumber")
          div(class="column is-one-third")
            label(for="email") Email address
             input(class="input", v-bind:disabled="noEdit", name="email",v-model="demographics.email")
          div(class="column is-one-third")
            label(for="occupation") Occupation/student
             input(class="input", v-bind:disabled="noEdit", name="occupation",v-model="demographics.occupation")

        div(class="columns")
          div(class="column is-one-third")
            label(for="phn") PHN
             input(class="input", v-bind:disabled="noEdit", name="phn",v-model="demographics.phn")
          div(class="column is-one-third")
            label(for="mrn") MRN
             input(class="input", v-bind:disabled="noEdit", name="mrn",v-model="demographics.mrn")
          div(class="column is-one-third")
            label(for="patientService") Patient service
             input(class="input", v-bind:disabled="noEdit", name="patientService",v-model="demographics.patientService")

        div(class="columns")
          div(class="column is-one-third")
            label(for="nextOfKin") Next of kin
             input(class="input", v-bind:disabled="noEdit", name="genextOfKinnder",v-model="demographics.nextOfKin")
          div(class="column is-one-third")
            label(for="nextOfKinRelationsip") Next of kin relationship
             input(class="input", v-bind:disabled="noEdit", name="nextOfKinRelationsip",v-model="demographics.nextOfKinRelationsip")
          div(class="column is-one-third")
            label(for="nextOfKinPhone") Next of kin phone
             input(class="input", v-bind:disabled="noEdit", name="nextOfKinPhone",v-model="demographics.nextOfKinPhone")

        div(class="columns")
          div(class="column is-one-third")
            label(for="decisionMakerName") Decision maker name
             input(class="input", v-bind:disabled="noEdit", name="decisionMakerName",v-model="demographics.decisionMakerName")
          div(class="column is-one-third")
            label(for="decisionMakerRelationship") Decision maker relationship
             input(class="input", v-bind:disabled="noEdit", name="decisionMakerRelationship",v-model="demographics.decisionMakerRelationship")
          div(class="column is-one-third")
            label(for="decisionMakerPhone") Decision make phone
             input(class="input", v-bind:disabled="noEdit", name="decisionMakerPhone",v-model="demographics.decisionMakerPhone")

</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import UiSpinner from '../../app/ui/UiSpinner'

export default {
  name: 'Demographics',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    UiSpinner
  },
  data: function() {
    return {
      noEdit: true,
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
    demographics() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.demographics || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    isStudent() {
      return this.$store.getters['visit/isStudent']
    }
  },
  methods: {
    beginEdit: function() {
      this.noEdit = false
    },
    cancelEdit: function() {
      this.noEdit = true
    },
    saveEdit: function() {
      const _this = this
      this.noEdit = true
      this.loading = true
      // let data = this.$store.getters['ehrData/assignmentData'] || {}
      // let asStoredData = data.demographics || {}
      // asStoredData = asStoredData ? JSON.parse(JSON.stringify(asStoredData)) : {}
      // // let toStoreData = Object.assign(asStoredData, this.demographics)
      let toStoreData = this.demographics
      // Prepare a payload to tell the API which property inside the assignment data to change
      let payload = {
        property: 'demographics',
        value: toStoreData
      }
      this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
        _this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/forms';
.select {
  display: block;
}
select {
  width: 100%;
}
.region {
  /* border: 1px dashed black; */
}
.Demographics {
  &__main {
  }
}
</style>
