// Generated VUE file. Before modifying see docs about Vue file generation
<template lang="pug">
  div(:class="$options.name")
    ehr-panel-header
      div Demographics
      div(style="display:none") {{currentData}}
      div(slot="controls", v-show="showEditControls")
        ehr-edit-controls(v-bind:ehrHelp="ehrHelp", @controlsCallback="controlsCallback")
    ehr-panel-content
      div(class="region ehr-page")
        ehr-page-form(v-bind:uiProps="uiProps", v-bind:theData="theData", v-bind:notEditing="notEditing")
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'
import EhrEditControls from '../components/EhrEditControls.vue'
import EhrPageForm from '../components/EhrPageForm.vue'
import EhrHelp from '../ehr-helper'

export default {
  name: 'Demographics',
  components: {
    EhrPanelHeader,
    EhrPanelContent,
    EhrPageForm,
    EhrEditControls
  },
  data: function() {
    return {
      dataKey: 'demographics',
      theData: {},
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
    uiProps() {
      let oneOfThree = 'column is-one-third'
      let twoOfThree = 'column is-two-third'
      let rowClasses = 'form-row columns'
      let rows = [
        {
          rowNumber: 1,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'familyName',
              label: 'Last name G',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'givenName',
              label: 'First name G',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'middleName',
              label: 'Middle name G',
              type: 'input'
            }
          ]
        },
        {
          rowNumber: 2,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'preferredName',
              label: 'Preferred name',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'dateOfBirth',
              label: 'Date of birth',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'personAge',
              label: 'Age',
              type: 'input'
            }
          ]
        },
        {
          rowNumber: 3,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'gender',
              label: 'Gender',
              type: 'select',
              options: this.genders
            },
            {
              classList: oneOfThree,
              propertyKey: 'martialStatus',
              label: 'Martial Status',
              type: 'select',
              options: this.mStatuses
            },
            {
              classList: oneOfThree,
              propertyKey: 'codeStatus',
              label: 'Code status',
              type: 'select',
              options: this.codeStatuses
            }
          ]
        },
        {
          rowNumber: 4,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'languagePrimary',
              label: 'Primary language',
              type: 'select',
              options: this.languages
            },
            {
              classList: oneOfThree,
              propertyKey: 'religion',
              label: 'Religion',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'indigenous',
              label: 'Do you identify as an indigenous person?',
              type: 'select',
              options: [{ text: 'No' },{ text: 'Yes' }]
            }
          ]
        },
        {
          rowNumber: 5,
          classList: rowClasses,
          elements: [
            {
              classList: twoOfThree,
              propertyKey: 'streetAddress',
              label: 'Street address',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'city',
              label: 'City',
              type: 'input'
            }
          ]
        },
        {
          rowNumber: 6,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'country',
              label: 'Country',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'postalCode',
              label: 'Postal code',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'indigenous',
              label: 'Do you identify as an indigenous person?',
              type: 'checkbox'
            }
          ]
        },
        {
          rowNumber: 7,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'phoneNumber',
              label: 'Phone number',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'email',
              label: 'Email',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'occupation',
              label: 'Occupation/student',
              type: 'input'
            }
          ]
        },
        {
          rowNumber: 8,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'phn',
              label: 'PHN',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'mrn',
              label: 'MRN',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'patientService',
              label: 'Patient service',
              type: 'input'
            }
          ]
        },
        {
          rowNumber: 9,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'nextOfKin',
              label: 'Next of kin',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'nextOfKinRelationsip',
              label: 'Next of kin relationship',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'nextOfKinPhone',
              label: 'Next of kin phone',
              type: 'input'
            }
          ]
        },
        {
          rowNumber: 10,
          classList: rowClasses,
          elements: [
            {
              classList: oneOfThree,
              propertyKey: 'decisionMakerName',
              label: 'Decision maker name',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'decisionMakerRelationship',
              label: 'Decision maker relationship',
              type: 'input'
            },
            {
              classList: oneOfThree,
              propertyKey: 'decisionMakerPhone',
              label: 'Decision maker phone',
              type: 'input'
            }
          ]
        },
      ]

      return { rows: rows }
    },
    showEditControls() {
      return this.ehrHelp.showEditControls()
    },
    notEditing() {
      return !this.ehrHelp.isEditing()
    },
    currentData() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.theData = this.ehrHelp.theData()
      return this.theData
    }
  },
  methods: {
    controlsCallback(callback) {
      callback(this.theData)
    },
    getCurrentData() {
      return this.theData
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
