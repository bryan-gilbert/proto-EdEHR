<template>
  <div :class="$options.name">
    <ui-intro :class="`${$options.name}__intro`">
      <div class="columns" :class="`${$options.name}__content`">
        <div class="column" :class="`${$options.name}__content_row--1`">
          <ul>
            <li><b>{{lastFirstMiddle}}</b></li>
            <li>Date of Birth: <b> {{ demographics.dateOfBirth }} </b></li>
            <li>Age: <b>{{ demographics.personAge }}</b></li>
            <li>Gender: <b>{{ demographics.gender }}</b></li>
            <li>Wieght: <b> ??? </b></li>
          </ul>
        </div>
        <div class="column" :class="`${$options.name}__content_row--2`">
          <ul>
            <li>Code Status: <b>{{ demographics.codeStatus }}</b></li>
            <li>PHN: <b>{{ demographics.phn }}</b></li>
            <li>MRN: <b>{{ demographics.mrn }}</b></li>
            <li>MRP: <b> ?? </b></li>
            <li>MRP Phone: <b> ?? </b></li>
          </ul>
        </div>
        <div class="column" :class="`${$options.name}__content_row--3`">
          <ul>
            <li>Admitting Diagnosis: <b> {{ visitDetails.admittingDiagnosis }} </b></li>
            <li>Alergies: <b> </b></li>
            <li>Location: <b> {{ location }} </b></li>
            <li>
              Isolation Precautions:
              <b>??? </b>
            </li>
          </ul>
        </div>
      </div>
    </ui-intro>
  </div>
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
@import '../../scss/objects/wrapper.mixin';

.EhrBanner {
  @include wrapper(s);
  width: 100%;
  background-color: #e9ebed;
  color: #63666c;
  // Todo fix this force height in a more repsonsive manner
  //  height: 140px;

  &__content {
    margin: 0;
    padding: 0 1rem;
    font-size: 0.8rem;
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
