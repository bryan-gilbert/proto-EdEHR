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
      console.log('window.location', window.location)
      var url2 = new URL(window.location)
      var params2 = new URLSearchParams(url2.search)

      // API return url
      var apiUrl = params2.get('apiUrl')
      if (apiUrl) {
        console.log('API url provided in query: ', apiUrl)
      } else {
        console.log('No API url in query')
        if (this.$store.state.apiUrl) {
          apiUrl = this.$store.state.apiUrl
          console.log('Use API URL from $store', apiUrl)
        } else {
          apiUrl = config.getApiUrl()
          console.log('Use API URL from configuration: ', apiUrl)
        }
      }
      this.$store.commit('apiUrl', apiUrl)

      // Visit Id
      var visitId = params2.get('visit')
      if (!visitId) {
        console.log('No visit id on query so check local storage storage?')
        visitId = localStorage.getItem('token')
      }
      if (!visitId) {
        console.log('No visit id on query or local storage')
        return
      }
      localStorage.setItem('token', visitId)

      // Load information from server
      return new Promise((resolve, reject) => {
        let url = apiUrl + '/visits/flushed/' + visitId
        console.log('In load page ', url)
        axios.get(url).then(response => {
          // console.log('what is the response? ', response.data)
          let visitInfo = response.data
          if (!visitInfo) {
            console.error('ERROR because a visit should be registered')
            this.$store.commit('resetInfo')
            reject(new Error('No visit'))
          }
          // console.log('Found information', visitInfo)
          this.$store.commit('setVisitInfo', visitInfo)
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

<style lang="scss">
</style>
