<template lang="pug">
  footer(class="appFtr")
    div(class="wrapper" v-if="showNav")
      ui-link(class="footer_link", :to="{ name: `demographics` }") Demographics
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `dashboard` }") Dashboard
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: 'instructor' }") Instructor
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `help` }") Help
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
@import '../../scss/definitions';
.appFtr {
  background: $toolbar-background-color;
  color: $toolbar-color;
  padding: 10px 0 20px 20px;

  .wrapper {
    @include wrapper('content');
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
