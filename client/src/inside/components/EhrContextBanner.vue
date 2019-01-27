<template lang="pug">
  div(class="EhrContextBanner", v-show="isInstructor")
    div(class="wrapper")
      ehr-class-list-nav
</template>

<script>
import EhrClassListNav from './EhrClassListNav'
export default {
  name: 'EhrContextBanner',
  components: { EhrClassListNav },
  data: function() {
    return {
    }
  },
  computed: {
    isInstructor() {
      return this.$store.getters['visit/isInstructor']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/styles.scss';

.EhrContextBanner {
  background: $context-banner-background-color;
  color: $context-banner-color;
  @include wrapper('page');
  padding: 0;
  .wrapper {
    @include wrapper('content');
    padding: 10px;
  }
}
</style>
