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
    // on initial page loads or page refresh ....
    // ... if there is a valid user id ...
    // ... begin a chain of load data commands
    loadData: function() {
      var url2 = new URL(window.location)
      var params2 = new URLSearchParams(url2.search)
      var userId = params2.get('user') || localStorage.getItem('token')
      if (!userId) {
        console.log('No user id on query so check local storage storage?')
        userId = localStorage.getItem('token')
      }
      if (!userId) {
        console.log(
          'No user id on query or local storage so what to do with un authenticated user?'
        )
        return
      }
      console.log('What is already in memory? this.$store.userId: ' + this.$store.userId)
      var currentId = this.$store.userId
      if (!currentId) {
        console.log('Reload needed')
        this.$store.commit('setUserId', userId)
      } else if (userId !== currentId) {
        console.log('Change in user id.  Reset in memory storage.')
        this.$store.commit('setUserId', userId)
      }
      console.log('reload/load data from db')
      this.loadUserInfo(userId)
    },
    // ... first in chain load User information
    loadUserInfo: function(userId) {
      return new Promise(() => {
        let url = this.apiUrl + 'users/' + userId
        console.log('In loadUserInfo ', url)
        this.getSomething(url, (error, results) => {
          let userInfo = {}
          if (error || !results.user) {
            console.error('ERROR because a user should be registered')
            this.$store.commit('resetInfo')
            return
          }
          userInfo = Object.assign({}, results.user)
          console.log('Found user information ... store it and then load user data', userInfo)
          this.$store.commit('setUserInfo', userInfo)
          this.loadCurrentVisit(userId, userInfo)
        })
      })
    },
    // ... next get information about this users visit to our site ...
    loadCurrentVisit: function(userId, userInfo) {
      return new Promise(() => {
        var visitId = userInfo.currentVisit
        let url = this.apiUrl + 'visits/' + visitId
        console.log('In loadCurrentVisit ', url)
        this.getSomething(url, (error, results) => {
          let currentVisitInfo = {}
          if (error) {
            console.error('ERROR because a user should be registered')
            this.$store.commit('resetInfo')
            return
          }
          currentVisitInfo = Object.assign({}, results.visit)
          console.log('Found visit information ... store it and then visit data', currentVisitInfo)
          this.$store.commit('setVisitInfo', currentVisitInfo)
          this.loadVisitData(userId, currentVisitInfo)
          this.loadActivityData(userId, currentVisitInfo)
        })
      })
    },
    loadActivityData: function(userId, currentVisitInfo) {
      return new Promise(() => {
        let aid = currentVisitInfo.activity
        let url = this.apiUrl + 'activities/' + aid
        console.log('In activity data ', url)
        this.getSomething(url, (error, results) => {
          let activityInfo = {}
          if (error) {
            console.error('ERROR because a user should be registered')
            this.$store.commit('resetInfo')
            return
          }
          activityInfo = Object.assign({}, results.visit)
          console.log('Found activity information ... store it and then visit data', activityInfo)
          this.$store.commit('setActivityInfo', activityInfo)
        })
      })
    },
    loadVisitData: function(userId, currentVisitInfo) {
      return new Promise(() => {
        let vdid = currentVisitInfo.visitData
        let url = this.apiUrl + 'visitdata/' + vdid
        console.log('Load visit data ', url)
        this.getSomething(url, (error, results) => {
          let visitData = {}
          if (error) {
            console.error('ERROR because a user should be registered')
            this.$store.commit('resetInfo')
            return
          }
          visitData = Object.assign({}, results.visitdata)
          console.log('Found visit data', visitData)
          this.$store.commit('setVisitDataInfo', visitData)
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
