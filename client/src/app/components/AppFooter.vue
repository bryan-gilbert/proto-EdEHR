<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`">
      <ui-link :to="{ name: `home` }">Home</ui-link>
      |
      <ui-link :to="{ name: `dashboard` }">Dashboard</ui-link>
      |
      <ui-link :to="{ name: `account` }">Account</ui-link>
      |
      <ui-link :to="{ name: `student` }">Student</ui-link>
      |
      <ui-link :to="{ name: `instructor` }">Instructor</ui-link>
      |
      <ui-link :to="{ name: `help` }">Help</ui-link>
      |
      <ui-link :to="{ name: `ehr` }">EHR</ui-link>
    </div>
  </footer>
</template>

<script>
import UiLink from '../ui/UiLink.vue'

export default {
  name: 'AppFooter',
  components: {
    UiLink
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $color-secondary;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }
}
</style>
