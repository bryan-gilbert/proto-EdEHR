<template>
  <div id="app">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import Configuration from './configuration'
import axios from '../node_modules/axios/dist/axios.min'

var config = new Configuration()

const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  methods: {
    loadData: function() {
      var url2 = new URL(window.location)
      var params2 = new URLSearchParams(url2.search)
      var visitId = params2.get('visit') || localStorage.getItem('token')
      var apiUrl = config.getApiUrl()
      if (!visitId) {
        console.log('No visit id on query so check local storage storage?')
        visitId = localStorage.getItem('token')
      }
      if (!visitId) {
        console.log('No visit id on query or local storage')
        return
      }
      localStorage.setItem('token', visitId)
      return new Promise((resolve, reject) => {
        let url = apiUrl + '/visits/flushed/' + visitId
        console.log('In load page ', url)
        axios.get(url)
        .then((response) => {
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
    }
  },
  mounted: function() {
    this.loadData()
  }
}
</script>

<style lang="scss">
</style>
