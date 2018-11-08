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
            data = Object.assign({}, results.user)
            console.log("Found user information ... store it and then load user data", data)
          }
          this.$store.commit('setUserInfo', data)
          this.loadCurrentVisit(userId, data)
        })
      })
    },
    loadCurrentVisit: function (userId,userInfo) {
      return new Promise((resolve, reject) => {
        var visitId = userInfo.currentVisit
        let url = this.apiUrl + 'visits/' + visitId
        console.log("In loadCurrentVisit ", url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log("Current visit not found. This is an ERROR because the incoming request indicated a user should be registered")
          } else {
            data = Object.assign({}, results.visit)
            console.log("Found visit information ... store it and then visit data", data)
          }
          this.$store.commit('setVisitInfo', data)
          this.loadVisitData(userId, data)
          this.loadActivityData(userId, data)
        })
      })
    },
    loadActivityData: function (userId, visitInfo) {
      return new Promise((resolve, reject) => {
        let aid = visitInfo.activity
        let url = this.apiUrl + 'activities/' + aid
        console.log("In activity data ", url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log("load activity data not found. This is an ERROR because the incoming request indicated a user should be registered")
          } else {
            data = Object.assign({}, results.activity)
            console.log("Found activity data", data)
          }
          this.$store.commit('setActivityInfo', data)
        })
      })
    },
    loadVisitData: function (userId, visitInfo) {
      return new Promise((resolve, reject) => {
        let vdid = visitInfo.visitData
        let url = this.apiUrl + 'visitdata/' + vdid
        console.log("In visit data ", url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log("load visit data not found. This is an ERROR because the incoming request indicated a user should be registered")
          } else {
            data = Object.assign({}, results.visitdata)
            console.log("Found visit data", data)
          }
          this.$store.commit('setVisitDataInfo', data)
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
