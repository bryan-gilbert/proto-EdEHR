<template lang="pug">
  div(class="post")
    h2(class="hello") Student: {{userInfo.givenName}}
    div(id="nav")
      ul
        li
          ui-link(:to="{ name: 'courses' }") Courses
        li
          ui-link(:to="{ name: 'assignments' }") Assignments
    div
    router-view
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in userInfo", v-bind:key="propertyName") {{ propertyName }} : {{ value }}
</template>

<script>
import UiLink from '../../app/ui/UiLink'
import EhrSpecial from '../../inside/components/EhrSpecial'
export default {
  components: {
    UiLink,
    EhrSpecial
  },
  props: {
    id: {
      type: String,
      default: 'Newbie'
    }
  },
  computed: {
    userInfo() {
      var vi = this.$store.state.sVisitInfo
      var uInfo = vi.user ? vi.user : {}
      return uInfo
    },
    activity() {
      return this.$store.state.sActivityInfo
    },
    visitInfo() {
      return this.$store.state.sVisitInfo
    }
  }
}
</script>
