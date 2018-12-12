<template lang="pug">
  div(class="outside-view home")
    h1 Welcome Home {{ username }} to the EdEHR Proof Of Concept</h1>
    p User Id: {{ userInfo.user_id }} Email: {{ userInfo.emailPrimary }}
    div(id="nav")
      ul
        li
          ui-link(:to="{ name: 'student' }") Student
        li
          ui-link(:to="{ name: 'instructor' }") Instructor
    router-view
</template>

<script>
import UiLink from '../../app/ui/UiLink.vue'
export default {
  name: 'home',
  components: {
    UiLink
  },
  computed: {
    userInfo() {
      return this.$store.state.visit.sUserInfo
    },
    username() {
      return this.$store.state.visit.username
    }
  }
}
</script>
