<template lang="pug">
  div(:class="$options.name")
    h1 This is an account page
    div User Id: {{ userInfo.user_id }} Email: {{ userInfo.emailPrimary }}
      p token {{ token }}
      p logged in {{isLoggedIn}}
    ui-button(v-on:buttonClicked="logout" v-bind:disabled="disableLogoutButton") Logout

</template>
<script>
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'Account',
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter next ...')
    next(vm => {
      console.log('... next beforeRouteEnter dispatch route enter')
      vm.$store.dispatch('routeEnter')
    })
  },
  // beforeRouteUpdate (to, from, next) {
  //   console.log('beforeRouteUpdate',to,from)
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log('beforeRouteLeave',to,from)
  // },
  components: {
    UiButton
  },
  data: function() {
    return {
      count: 0
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    token() {
      return this.$store.state.token
    },
    userInfo() {
      return this.$store.state.sUserInfo
    },
    disableLogoutButton() {
      // if user is logged in then enable the logout button ... darn the double negatives
      // here ... don't disable the log out button if the user is logged on :-)
      let isLoggedIn = this.$store.state.isLoggedIn
      var enableLogoutButton = isLoggedIn
      return !enableLogoutButton
    }
  },
  methods: {
    logout: function(/*event*/) {
      console.log('Log out the user')
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.Account {
}
</style>
