<template>
  <div class="outside-view home">
    <h1>Welcome {{ fullName }} to the EdEHR Proof Of Concept</h1>
    User Id: {{ userInfo.user_id }} Email: {{ userInfo.emailPrimary }}

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  computed: {
    userInfo() {
      return this.$store.state.sUserInfo
    },
    fullName() {
      let info = this.$store.state.sUserInfo
      let n = info.givenName
      n +=
        info.familyName && info.familyName.trim().length > 0
          ? ' ' + info.familyName
          : ''
      return n
    }
  }
}
</script>
