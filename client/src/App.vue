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
      var restoring = false
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
            restoring = true
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
          if (isInstructor) {
            console.log('Page load instructor')
            return _this.$store
              .dispatch('instructor/loadInstructor')
              .then(() => {
                console.log('Page load instructor restoring?', restoring)
                if (restoring) {
                  _this.reloadInstructor()
                }
              })
              .catch(err => {
                console.log('ERROR ', err)
              })
          }
        })
    },
    reloadInstructor: function() {
      console.log('Page load and restore instructor')
      const _this = this
      let rUrl = localStorage.getItem('sInstructorReturnUrl')
      if (rUrl) {
        console.log('Page load and restore instructor return url', rUrl)
        _this.$store.commit('instructor/setInstructorReturnUrl', rUrl)
      }
      let activityId = localStorage.getItem('activityId')
      let studentId = localStorage.getItem('sCurrentEvaluationStudentId')
      if (activityId) {
        console.log('Page load and restore last activity', activityId)
        return this.$store
          .dispatch('ehrData/loadActivityData', activityId)
          .then(() => {
            console.log('Page load and restore class list', activityId)
            return _this.$store.dispatch('instructor/loadClassList', activityId)
          })
          .then(() => {
            console.log('Page load and restore last student for evaluation', studentId)
            if (studentId) {
              return _this.$store.dispatch('instructor/changeCurrentEvaluationStudentId', studentId)
            }
          })
      }
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
