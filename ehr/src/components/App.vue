<template>
  <div :class="$options.name">
    <layout-default>
      <router-view/>
    </layout-default>
    <div :class="`${$options.name}__special`">
      <div>From App component: Is user logged on? {{isLoggedOn}}</div>
    </div>

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
  data () {
    return {
      isLoggedOn: false
    }
  },
  methods: {
    getLoggedOn: function () {
      let url = this.apiUrl + 'isLoggedOn'
      console.log("getLoggedOn ", url)
      axios.get(url)
      .then( (response) => {
        console.log("getLoggedOn response ", response)
        this.isLoggedOn = response
      })
      .catch((error) => {
        console.log('getLoggedOn error ', error.response.status)
        this.isLoggedOn = false
      })
    },
    getSomething: function (url, callback) {
      axios.get(url)
      .then( (response) => {
        callback(null, response.data)
      })
      .catch((error) => {
        console.log('error ', error.response)
        callback(error.response.status)
      })
    },
    getUserInfo: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      let url = this.apiUrl + 'getUserInfo?user=' + params2.get('user')
      console.log("In getUserInfo ", url)
      this.getSomething(url, (error, results) => {
        if(error) {
          console.log("getUserInfo Error ", error.message())
          this.$store.commit('setUserInfo', {})
        } else {
          console.log("getUserInfo results ", results)
          this.$store.commit('setUserInfo', results)
        }
      })
    },
    getUserData: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      let url = this.apiUrl + 'getUserData?user=' + params2.get('user')
      console.log("In getUserData ", url)
      this.getSomething(url, (error, results) => {
        if(error) {
          this.$store.commit('setUserData', {})
        } else {
          this.$store.commit('setUserData', results)
        }
      })
    },
    loadUserData: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      var userId = params2.get('user')
      if(userId) {
        this.$store.commit('userId', userId)
        let url = this.apiUrl + 'getUserInfo?user=' + userId
        console.log("In loadData getUserInfo ", url)
        this.getSomething(url, (error, results) => {
          if (error) {
            console.log("User not found. This is an ERROR because the incoming request indicated a user should be registered")
            this.$store.commit('setUserInfo', {})
            this.$store.commit('setUserData', {})
          } else {
            console.log("Found user information ... store it and then load user data")
            this.$store.commit('setUserInfo', results)
          }
        })
      }
    },
    loadUserInfo: function () {
      return new Promise( (resolve, reject) => {
        var userId = this.$store.userId
        let url = this.apiUrl + 'getUserInfo?user=' + userId
        console.log("In loadUserInfo ", url)
        this.getSomething(url, (error, results) => {
          if (error) {
            console.log("User not found. This is an ERROR because the incoming request indicated a user should be registered")
            this.$store.commit('setUserInfo', {})
            this.$store.commit('setUserData', {})
          } else {
            console.log("Found user information ... store it and then load user data")
            this.$store.commit('setUserInfo', results)
          }
        })

      })
    },
    loadData: function () {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      var userId = params2.get('user')
      if(userId) {
        this.$store.commit('userId', userId)
        this.loadUserInfo()
      }
    },
    testUpdateData: function() {
      var url2 = new URL(window.location);
      var params2 = new URLSearchParams(url2.search);
      let url = this.apiUrl + 'getUser?user=' + params2.get('user')
      console.log("In getUsr ", url)
      axios.get(url)
      .then( (response) => {
        this.$store.commit('setUserData', response.data)
      })
      .catch((error) => {
        console.log('axios error ', error.response.status)
        this.$store.commit('setUserData', {})
      })
    },
  },
  computed: {
    apiUrl : function() {
      return config.getApiUrl()
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
