<template lang="pug">
  footer(:class="$options.name")
    div(:class="`${$options.name}__wrapper`" v-if="showNav")
      ui-link(class="footer_link", :to="{ name: `home` }") Home
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `dashboard` }") Dashboard
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `account` }") Account
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `student` }") Student
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: 'instructor' }") Instructor
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `help` }") Help
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `ehr` }") EHR
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
      showNav: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/settings/color';
@import '../../scss/objects/wrapper.mixin';

.AppFooter {
  @include wrapper('page');
  border: $border-width solid $border1;
  background-color: $grey40;
  color: white;
  text-align: center;

  .spacer {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .footer_link {
    color: white;
  }
  &__wrapper {
    @include wrapper('content');
    border: $border-width solid $border2;
    background-color: $grey20;
    padding-top: 1em;
    padding-bottom: 1em;
  }
}
</style>
