<template lang="pug">
  div(:class="$options.name", v-show="isInstructor")
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
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.EhrContextBanner {
  background: $context-banner-background-color;
  color: $context-banner-color;
  @include wrapper('page');
  padding: 10px;
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__home {
    text-decoration: none;
    font-weight: 500;
  }

  &__nav {
  }

  &__navList {
    display: flex;
  }

  &__navItem {
    &:not(:first-child) {
      margin-left: 1.5em;

      &::before {
        margin-right: 0.5em;
      }
    }
  }
}
</style>
