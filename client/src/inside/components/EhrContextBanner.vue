<template lang="pug">
  div(class="EhrContextBanner EhrPanelContent", v-show="isInstructor")
    div(class="EhrContextBanner_Inner EhrPanelContent_Inner")
      ehr-class-list-nav
</template>

<script>
import EhrClassListNav from './EhrClassListNav'
export default {
  name: 'EhrContextBanner',
  components: { EhrClassListNav },
  data: function() {
    return {}
  },
  computed: {
    isInstructor() {
      return this.$store.getters['visit/isInstructor']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrContextBanner {
  padding: $panelHeaderPadding;
  background: $context-banner-background-color;
  color: $context-banner-color;
  padding: 0;
  @media #{$mediaQueryIpadLandscape} {
    padding: $panelHeaderPaddingSmall;
  }
  @media #{$mediaQueryIpadPortrait} {
    padding: $panelHeaderPaddingSmallest;
  }
}
</style>
