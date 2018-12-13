<template>
  <div id="app">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import Configuration from './configuration'
import axios from '../node_modules/axios/dist/axios.min'
var config = new Configuration(process.env.NODE_ENV)

const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  methods: {
    loadData: function() {
      // console.log('window.location', window.location)
      var url2 = new URL(window.location)
      var params2 = new URLSearchParams(url2.search)
      // API return url
      function loadApiUrl() {
        return Promise.resolve().then(() => {
          var apiUrl = params2.get('apiUrl')
          if (apiUrl) {
            // console.log('API url provided in query: ', apiUrl)
          } else {
            console.log('No API url in query')
            if (this.$store.state.visit.apiUrl) {
              apiUrl = this.$store.state.visit.apiUrl
              console.log('Use API URL from $store', apiUrl)
            } else {
              apiUrl = config.getApiUrl()
              console.log('Use API URL from configuration: ', apiUrl)
            }
          }
          this.$store.commit('visit/apiUrl', apiUrl)
        })
      }
      // Visit Id
      function loadVisitId() {
        return new Promise((resolve, reject) => {
          var visitId = params2.get('visit')
          if (!visitId) {
            console.log('No visit id on query so check local storage storage?')
            visitId = localStorage.getItem('token')
          }
          if (!visitId) {
            let msg = 'No visit id on query or local storage'
            reject(msg)
          }
          localStorage.setItem('token', visitId)
          resolve(visitId)
        })
      }
      const _this = this
      loadApiUrl
        .call(this)
        .then(() => {
          return loadVisitId()
        })
        .then(visitId => {
          return this.$store.dispatch('visit/loadVisitInfo', visitId)
        })
        .then(() => {
          let isInstructor = _this.$store.getters['visit/isInstructor']
          // console.log('here we should have user info', _this.$store.state.visit.sUserInfo.fullName, ' is Instructor: ', isInstructor)
          if (isInstructor) {
            return this.$store.dispatch('instructor/loadInstructor')
          }
        })
    }
  },
  computed: {
    layout() {
      const l = (this.$route.meta.layout || DefaultLayout) + '-layout'
      console.log('using layout ', l)
      return l
    },
    userInfo() {
      return this.$store.state.sUserInfo
    },
    currentVisit() {
      return this.$store.state.sVisitInfo
    }
  },
  created: function() {
    this.loadData()
  }
}
</script>

<style lang="scss"></style>
