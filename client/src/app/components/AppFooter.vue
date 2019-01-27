<template lang="pug">
  footer(class="appFtr")
    div(class="wrapper" v-if="showNav")
      ui-link(class="footer_link", :to="{ name: home }") Home
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: dashboard }") Dashboard
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: account }") Account
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: student }") Student
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: 'instructor' }") Instructor
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: help }") Help
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: ehr }") EHR
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
@import '../../scss/styles';
.appFtr {
  background: $toolbar-background-color;
  color: $toolbar-color;
  border: $border-width solid $border1;

  .wrapper {
    @include wrapper('content');
    border: $border-width solid $border2;
  }
  text-align: center;

  .spacer {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
  .footer_link {
    color: white;
  }
}
</style>
