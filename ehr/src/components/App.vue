<template>
  <div :class="$options.name">
    <layout-default>
      <router-view/>
    </layout-default>
  </div>
</template>

<script>
import LayoutDefault from './layout/LayoutDefault.vue';
import Configuration from '../ehr-configuration'
import UiButton from './ui/UiButton.vue'
import axios from '../../node_modules/axios/dist/axios.min'
import bus from "./eventBus.js"

var config = new Configuration()

export default {
  name: `App`,
  components: {
    LayoutDefault,
    UiButton
  },
  methods: {
    getLoggedOn: function () {
      let url = this.apiUrl + 'isLoggedOn'
      console.log("getLoggedOn ", url)
      axios.get(url)
      .then( (response) => {
        console.log("getLoggedOn response ", response)
        this.$store.commit('isLoggedOn', response)
      })
      .catch((error) => {
        console.log('getLoggedOn error ', error.response.status)
        this.$store.commit('isLoggedOn', false)
      })
    },
    getSomething: function (url, callback) {
      axios.get(url)
      .then( (response) => {callback(null, response.data)})
      .catch((error) => {callback(error.response.status)})
    },

    loadData: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      var userId = params2.get('user')
      console.log("Store user id from incoming url ", url2)
      if(userId) {
        this.$store.commit('setUserId', userId)
        this.loadUserInfo(userId)
      }
    },
    loadUserInfo: function (userId) {
      return new Promise((resolve, reject) => {
        //var userId = this.$store.userId
        let url = this.apiUrl + 'users/' + userId
        console.log("In loadUserInfo ", url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log("User not found. This is an ERROR because the incoming request indicated a user should be registered")
          } else {
            console.log("Found user information ... store it and then load user data", data)
            data = Object.assign({}, results.user)
          }
          this.$store.commit('setUserInfo', data)

          let currentVisit = data.currentVisit || {}
          let sessionData = currentVisit.sessionData || {}
          console.log('data.userInfo.currentVisit.sessionData',sessionData)
          this.$store.commit('setUserData', sessionData)
        })
      })
    }
  },
  computed: {
    apiUrl : function() {
      var url = config.getApiUrl()
      console.log('apiUrl = ',  url)
      return url
    }
  },
  mounted: function () {
    this.getLoggedOn()
    this.loadData()
  }
};
</script>

<style lang="scss">
  .App {
    color: white;
  }
</style>
