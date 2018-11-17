<template>
  <div id="app">
    <component :is="layout"> <router-view /> </component>
    <div>
      <li v-for="(value, propertyName) in userInfo" v-bind:key="propertyName">
        <strong>{{ propertyName }}</strong> : {{ value }}
      </li>
    </div>
  </div>
</template>

<script>
import axios from '../node_modules/axios/dist/axios.min'
import Configuration from './configuration'
var config = new Configuration()

const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  methods: {
    getSomething: function(url, callback) {
      axios
        .get(url)
        .then(response => {
          callback(null, response.data)
        })
        .catch(error => {
          callback(error.response.status)
        })
    },
    loadData: function() {
      var url2 = new URL(window.location)
      var params2 = new URLSearchParams(url2.search)
      var userId = params2.get('user')
      if (!userId) {
        console.log('No user id so return but what is in storage?')
        console.log('userId:', this.$store.state.userId)
        return
      }
      var currentId = this.$store.userId
      if (userId !== currentId) {
        console.log('Store user id from incoming url ', url2)
        this.$store.commit('resetInfo')
        this.$store.commit('setUserId', userId)
      }
      this.loadUserInfo(userId)
    },
    loadUserInfo: function(userId) {
      return new Promise(() => {
        //var userId = this.$store.userId
        let url = this.apiUrl + 'users/' + userId
        console.log('In loadUserInfo ', url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error || !results.user) {
            console.log(
              'User not found. This is an ERROR because the incoming request indicated a user should be registered'
            )
            this.$store.commit('setValidUser', false)
            return
          }
          data = Object.assign({}, results.user)
          console.log(
            'Found user information ... store it and then load user data',
            data
          )
          this.$store.commit('setValidUser', true)
          this.$store.commit('setUserInfo', data)
          this.loadCurrentVisit(userId, data)
        })
      })
    },
    loadCurrentVisit: function(userId, userInfo) {
      return new Promise(() => {
        var visitId = userInfo.currentVisit
        let url = this.apiUrl + 'visits/' + visitId
        console.log('In loadCurrentVisit ', url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log(
              'Current visit not found.\n' +
                ' This is an ERROR because the incoming request indicated a user should be registered'
            )
          } else {
            data = Object.assign({}, results.visit)
            console.log(
              'Found visit information ... store it and then visit data',
              data
            )
          }
          this.$store.commit('setVisitInfo', data)
          this.loadVisitData(userId, data)
          this.loadActivityData(userId, data)
        })
      })
    },
    loadActivityData: function(userId, visitInfo) {
      return new Promise(() => {
        let aid = visitInfo.activity
        let url = this.apiUrl + 'activities/' + aid
        console.log('In activity data ', url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log(
              'load activity data not found.\n' +
                'This is an ERROR because the incoming request indicated a user should be registered'
            )
          } else {
            data = Object.assign({}, results.activity)
            console.log('Found activity data', data)
          }
          this.$store.commit('setActivityInfo', data)
        })
      })
    },
    loadVisitData: function(userId, visitInfo) {
      return new Promise(() => {
        let vdid = visitInfo.visitData
        let url = this.apiUrl + 'visitdata/' + vdid
        console.log('Load visit data ', url)
        this.getSomething(url, (error, results) => {
          let data = {}
          if (error) {
            console.log(
              'load visit data not found. This is an ERROR because the incoming request indicated a user should be registered'
            )
          } else {
            data = Object.assign({}, results.visitdata)
            console.log('Found visit data', data)
          }
          this.$store.commit('setVisitDataInfo', data)
        })
      })
    }
  },
  computed: {
    layout() {
      // const matched = this.$route
      const rl = this.$route.meta.layout
      const l = (rl || DefaultLayout) + '-layout'
      // console.log('using layout ', rl, l)
      return l
    },
    apiUrl: function() {
      var url = config.getApiUrl()
      console.log('apiUrl = ', url)
      return url
    },
    userInfo() {
      return this.$store.state.sUserInfo
    },
    currentVisit() {
      return this.$store.state.sVisitInfo
    },
    activity() {
      return this.$store.state.sActivityInfo
    },
    visitData() {
      return this.$store.state.sVisitDataInfo
    }
  },
  mounted: function() {
    this.loadData()
  }
}
</script>

<style lang="scss">
</style>
