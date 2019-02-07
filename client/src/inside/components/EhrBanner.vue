<template lang="pug">
  div( class="EhrBanner EhrPanelContent")
    div( class="EhrBanner_Inner EhrPanelContent_Inner")
      ui-intro(class="EhrBanner__intro")
      div( class="columns EhrBanner__content")
        div( class="column EhrBanner__content_row--1")
          ul
            li 
              b {{ lastFirstMiddle }}
            li Date of Birth:
              b {{ demographics.dateOfBirth }}
            li Age:
              b {{ demographics.personAge }}
            li Gender:
              b {{ demographics.gender }}
            li Weight:
              b to link in
        div( class="column EhrBanner__content_row--2")
          ul
            li Code Status:
              b {{ demographics.codeStatus }}
            li PHN:
              b {{ demographics.phn }}
            li  MRN:
              b {{ demographics.mrn }}
            li MRP:
              b to link in
            li MRP Phone:
              b to link in
        div( class="column EhrBanner__content_row--3")
          ul
            li Admitting Diagnosis:
              b {{ visitDetails.admittingDiagnosis }}
            li Allergies:
              b to link in
            li Location:
              b {{ location }}
            li Isolation Precautions:
              b to link in
</template>

<script>
import UiIntro from '../../app/ui/UiIntro.vue'

export default {
  name: 'EhrBanner',
  components: {
    UiIntro
  },
  props: {
    action: {
      type: Object
    }
  },
  computed: {
    demographics() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.demographics || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    visitDetails() {
      let data = this.$store.getters['ehrData/mergedData'] || {}
      let asStored = data.visitDetails || {}
      let input = JSON.parse(JSON.stringify(asStored))
      return input
    },
    location() {
      var place = ''
      var locations = this.visitDetails.locations || []
      if (locations.length > 0) {
        var now = locations[locations.length - 1]
        place = now.patientLocation
      }
      return place
    },
    lastFirstMiddle() {
      let d = this.demographics
      let n = `${d.familyName}, ${d.givenName}`
      n += d.middleName ? ' ' + d.middleName : ''
      return n
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrBanner {
  &__content {
    display: flex;
    color: $grey60;
  }
  &__content_row--1 {
    flex-grow: 0.8;
  }
  &__content_row--2 {
    flex-grow: 0.9;
  }
  &__content_row--3 {
    flex-grow: 1.5;
  }
}
</style>
