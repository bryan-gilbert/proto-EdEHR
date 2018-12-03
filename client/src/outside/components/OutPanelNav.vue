<template lang="pug">
  div(:class="$options.name")
    ul
      li(:class="`${$options.name}__nav`")
        a(v-bind:href="returnUrl") Return to {{ lmsName }}
        span |
      li(:class="`${$options.name}__nav`")
        ui-link(:to="{ name: 'student' }") Student
        span |
      li(:class="`${$options.name}__nav`")
        ui-link(:to="{ name: 'instructor' }") Instructor
</template>

<script>
import UiLink from '../../app/ui/UiLink'
export default {
  name: 'OutPanelNav',
  components: {
    UiLink
  },
  computed: {
    returnUrl() {
      return this.$store.state.sVisitInfo.returnUrl
    },
    lmsName() {
      return this.$store.getters.lmsName
    }
  }
}
</script>

<style lang="scss" scoped>
.OutPanelNav {
  padding: 20px 1.5rem;

  &__main {
    font-size: 0.8rem;

    .table th {
      border-bottom: 2px solid #979797;
    }
  }
  &__nav {
    display: inline;
    margin-right: 1rem;

    span {
      display: inline;
      margin-left: 1rem;
    }
  }
}
</style>
