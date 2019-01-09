<template>
  <footer :class="$options.name">
    <div :class="`${$options.name}__wrapper`" v-if="showNav">
      <ui-link :to="{ name: `home` }">Home</ui-link>
      |
      <ui-link :to="{ name: `dashboard` }">Dashboard</ui-link>
      |
      <ui-link :to="{ name: `account` }">Account</ui-link>
      |
      <ui-link :to="{ name: `student` }">Student</ui-link>
      |
      <ui-link :to="{ name: 'instructor' }">Instructor</ui-link>
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
  },
  data: function() {
    return {
      showNav: false
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: $grey60;
  text-align: center;

  &__wrapper {
    @include wrapper();
  }
}
</style>
