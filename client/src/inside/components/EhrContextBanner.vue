<template lang="pug">
  div(class="EhrContextBanner EhrPanelContent")
    div(class="EhrContextBanner_Inner EhrPanelContent_Inner")
      div(class="prototypingContainer")
        span These controls are for development only:
        ul
          li
            input(class="checkbox", type="checkbox", v-model="showInstructor")
            span showInstructor
          li
            input(class="checkbox", type="checkbox", v-model="showStudent")
            span showStudent
          li
            input(class="checkbox", type="checkbox", v-model="showSeeding")
            span showSeeding

      ehr-context-instructor(v-show="showInstructor")
      ehr-context-student(v-show="showStudent")
</template>

<script>
import EhrContextInstructor from './EhrContextInstructor'
import EhrContextStudent from './EhrContextStudent'
export default {
  name: 'EhrContextBanner',
  components: { EhrContextInstructor, EhrContextStudent },
  data: function() {
    return {
      showInstructor: false,
      showStudent: false,
      showSeeding: false
    }
  },
  mounted() {
    this.showInstructor = !!this.$store.getters['visit/isInstructor']
    this.showStudent = !!this.$store.getters['visit/isStudent']
    this.showSeeding = !!this.$store.state.system.isSeeding
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrContextBanner {
  padding: $panelHeaderPadding;
  background: $context-banner-background-color;
  color: $context-banner-color;
  @media #{$mediaQueryIpadLandscape} {
    padding: $panelHeaderPaddingSmall;
  }
  @media #{$mediaQueryIpadPortrait} {
    padding: $panelHeaderPaddingSmallest;
  }
}
.prototypingContainer {
  ul {
    display: inline;
  }
  li {
    display: inline;
    margin-left: 1rem;
  }
  input {
    display: inline-block;
    margin-right: 5px;
  }
}
</style>
