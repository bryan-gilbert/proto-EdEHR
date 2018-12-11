// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header Demographics
    ehr-panel-content
      div(class="region")
        div(class="columns")
          div(class="column is-one-third")
            label(for="familyName") Last name
            input(class="input", name="familyName",v-model="input.familyName")
          div(class="column is-one-third")
            label(for="givenName") First name
            input(class="input", name="givenName",v-model="input.givenName")
          div(class="column is-one-third")
            label(for="middleName") Middle name(s)
            input(class="input", name="middleName",v-model="input.middleName")
        div(class="columns")
          div(class="column is-one-third")
            label(for="preferredName") Preferred name
            input(class="input", name="preferredName",v-model="input.preferredName")
          div(class="column is-one-third")
            label(for="dateOfBirth") Date of birth
            input(class="input", name="dateOfBirth",v-model="input.dateOfBirth")
          div(class="column is-one-third")
            label(for="personAge") Age
            input(class="input", name="personAge",v-model="input.personAge")
        div(class="columns")
          div(class="column is-one-third")
            label(for="gender") Gender {{input.gender}}
            div(class="select")
              select(name="gender",v-model="input.gender")
                option(v-for="option in genders", v-bind:value="option.value") {{ option.text}}
          div(class="column is-one-third")
            label(for="martialStatus") Martial Status
            div(class="select")
              select(name="martialStatus",v-model="input.martialStatus")
                option(v-for="option in mStatuses", v-bind:value="option.value") {{ option.text}}
          div(class="column is-one-third")
            label(for="codeStatus") Code status
            div(class="select")
              select(name="codeStatus",v-model="input.codeStatus")
                option(v-for="option in codeStatuses", v-bind:value="option.value") {{ option.text}}
        div(class="columns")
          div(class="column is-one-third")
            label(for="languagePrimary") Primary language
            div(class="select")
              select(name="languagePrimary",v-model="input.languagePrimary")
                option(v-for="option in languages", v-bind:value="option.value") {{ option.text}}
          div(class="column is-one-third")
            label(for="religion") Religion
            input(class="input", name="religion",v-model="input.religion")
          div(class="column is-one-third")
            label(for="indigenous") Do you identify as an indigenous person?
            div(class="select", name="indigenous",v-model="input.indigenous")
              select
                option(value='no') No
                option(value='yes') Yes
        div(class="columns")
          div(class="column is-two-third")
            label(for="streetAddress") Street address
            input(class="input", name="streetAddress",v-model="input.streetAddress")
          div(class="column is-one-third")
            label(for="sity") City
            input(class="input", name="city",v-model="input.city")
        div(class="columns")
          div(class="column is-one-third")
            label(for="country") Country
            input(class="input", name="country",v-model="input.country")
          div(class="column is-one-third")
            label(for="postalCode") Postal code
            input(class="input", name="postalCode",v-model="input.postalCode")
          div(class="column is-one-third")
            input(class="checkbox", type="checkbox", name="noAddress",v-model="input.noAddress")
            label(for="noAddress") No address

        div(class="columns")
          div(class="column is-one-third")
            label(for="phoneNumber") Phone number
            input(class="input", name="phoneNumber",v-model="input.phoneNumber")
          div(class="column is-one-third")
            label(for="email") Email address
            input(class="input", name="email",v-model="input.email")
          div(class="column is-one-third")
            label(for="occupation") Occupation/student
            input(class="input", name="occupation",v-model="input.occupation")

        div(class="columns")
          div(class="column is-one-third")
            label(for="phn") PHN
            input(class="input", name="phn",v-model="input.phn")
          div(class="column is-one-third")
            label(for="mrn") MRN
            input(class="input", name="mrn",v-model="input.mrn")
          div(class="column is-one-third")
            label(for="patientService") Patient service
            input(class="input", name="patientService",v-model="input.patientService")

        div(class="columns")
          div(class="column is-one-third")
            label(for="nextOfKin") Next of kin
            input(class="input", name="genextOfKinnder",v-model="input.nextOfKin")
          div(class="column is-one-third")
            label(for="nextOfKinRelationsip") Next of kin relationship
            input(class="input", name="dateOfnextOfKinRelationsipBirth",v-model="input.nextOfKinRelationsip")
          div(class="column is-one-third")
            label(for="nextOfKinPhone") Next of kin phone
            input(class="input", name="nextOfKinPhone",v-model="input.nextOfKinPhone")

        div(class="columns")
          div(class="column is-one-third")
            label(for="decisionMakerName") Decision maker name
            input(class="input", name="decisionMakerName",v-model="input.decisionMakerName")
          div(class="column is-one-third")
            label(for="decisionMakerRelationship") Decision maker relationship
            input(class="input", name="decisionMakerRelationship",v-model="input.decisionMakerRelationship")
          div(class="column is-one-third")
            label(for="decisionMakerPhone") Decision make phone
            input(class="input", name="decisionMakerPhone",v-model="input.decisionMakerPhone")

</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'Demographics',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  },
  data: function() {
    return {
      genders: [
        { text: 'unknown', value: 'Unknown' },
        { text: 'Female', value: 'female' },
        { text: 'male', value: 'Male' },
        { text: 'transFem', value: 'Transgender female' },
        { text: 'transMale', value: 'Transgender male' },
        { text: 'undifferentiated', value: 'Undifferentiated' },
        { text: 'noSay', value: 'Prefer not to say' }
      ],
      mStatuses: [
        { text: 'Married', value: 'married' },
        { text: 'Single', value: 'single' },
        { text: 'Life Partner', value: 'life partner' },
        { text: 'Divorced', value: 'divorced' },
        { text: 'Separated', value: 'separated' },
        { text: 'Widowed', value: 'widowed' }
      ],
      codeStatuses: [
        { text: 'N/A', value: 'N/A' },
        { text: 'CPR', value: 'CPR' },
        { text: 'DNR M1', value: 'DNRM1' },
        { text: 'DNR M2', value: 'DNRM2' },
        { text: 'DNR M3', value: 'DNRM3' },
        { text: 'DNR C1', value: 'DNRC1' },
        { text: 'DNR C2', value: 'DNRC2' }
      ],
      languages: [{ text: 'English', value: 'english' }],
      input: {
        familyName: 'Johns',
        givenName: 'Erin',
        middleName: '',
        preferredName: 'Erin',
        dateOfBirth: '09-SEP-1944',
        personAge: '74',
        gender: 'female',
        martialStatus: 'widowed',
        codeStatus: 'N/A',
        languagePrimary: 'english',
        relegion: '',
        indigenous: 'no',
        streetAddress: '402 Willow St.',
        city: 'Vancouver',
        country: 'Canada',
        postalCode: 'V3F 9R2',
        noAddress: 'false',
        phoneNumber: '778-555-2947',
        email: '',
        occupation: 'Retired',
        phn: '123456789',
        mrn: '',
        patientService: '',
        nextOfKin: 'Thomas Johns',
        nextOfKinRelationsip: 'Son',
        nextOfKinPhone: '604-555-9865',
        decisionMakerName: 'Thomas John',
        decisionMakerRelationship: 'Son',
        decisionMakerPhone: '604-555-9865'
      }
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
