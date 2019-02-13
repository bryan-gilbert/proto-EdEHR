<template>
  <div id="app">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import Configuration from './configuration'
var config = new Configuration(process.env.NODE_ENV)

const DefaultLayout = 'outside'

export default {
  name: 'App',
  components: {},
  methods: {
    loadData: function() {
      let search = window.location.search.substring(1)
      let params2 = {}
      let parts = search.split('&')
      parts.forEach(p => {
        let pair = p.split('=')
        params2[pair[0]] = decodeURIComponent(pair[1])
      })
      console.log('incoming parameters', params2)
      // API return to url
      let seeding = params2['seeding']
      if (seeding === 'iknowwhatimdoing') {
        console.log('The user is saying they know what they are doing so let us allow them to edit seeds, in this prototype.')
        this.$store.commit('system/setSeeding', true)
      }
      // API return to url
      let apiUrl = params2['apiUrl']
      let visitId = params2['visit']
      // Visit Id
      var restoring = false
      const _this = this
      _this
        ._loadApiUrl(apiUrl)
        .then(() => {
          return new Promise((resolve, reject) => {
            if (!visitId) {
              console.log('No visit id on query so check local storage storage?')
              restoring = true
              visitId = localStorage.getItem('token')
            }
            if (!visitId) {
              let msg = 'No visit id on query or local storage'
              reject(msg)
            }
            resolve(visitId)
          })
        })
        .then(visitId => {
          localStorage.setItem('token', visitId)
          return this.$store.dispatch('visit/loadVisitInfo', visitId)
        })
        .then(() => {
          let isInstructor = _this.$store.getters['visit/isInstructor']
          if (isInstructor) {
            // console.log('Page load instructor')
            return _this.$store.dispatch('instructor/loadCourses').then(() => {
              console.log('Page load instructor restoring?', restoring)
              if (restoring) {
                return _this.reloadInstructor()
              }
            })
          }
        })
        .catch(err => {
          alert(err + '\nSystem Error')
        })
    },
    /**
     * This client expects the API server to provide the url to call
     * back into the server.  This avoids the need to have client side configuration
     * that has to be kept in sync with the server side configuration.  It means
     * this client can be the front end for any backend because there are no connections
     * other than what is provided by this API Url
     * @param apiUrl
     * @return {Promise<void>}
     * @private
     */
    _loadApiUrl(apiUrl) {
      return Promise.resolve().then(() => {
        if (apiUrl) {
          // console.log('API url provided in query: ', apiUrl)
        } else {
          // console.log('No API url in query')
          if (this.$store.state.visit.apiUrl) {
            apiUrl = this.$store.state.visit.apiUrl
            // console.log('Use API URL from $store', apiUrl)
          } else {
            apiUrl = config.getApiUrl()
            // console.log('Use API URL from configuration: ', apiUrl)
          }
        }
        this.$store.commit('visit/apiUrl', apiUrl)
      })
    },
    reloadInstructor: function() {
      // console.log('Page load and restore instructor')
      const _this = this
      let rUrl = localStorage.getItem('sInstructorReturnUrl')
      if (rUrl) {
        // console.log('Page load and restore instructor return url', rUrl)
        _this.$store.commit('instructor/setInstructorReturnUrl', rUrl)
      }
      let activityId = localStorage.getItem('activityId')
      let studentId = localStorage.getItem('sCurrentEvaluationStudentId')
      if (activityId) {
        // console.log('Page load and restore last activity', activityId)
        // no need to set localStorage because we are reloading from the value in localStorage
        return this.$store
          .dispatch('instructor/loadActivity', activityId)
          .then(() => {
            // console.log('Page load and restore class list', activityId)
            return _this.$store.dispatch('instructor/loadClassList', activityId)
          })
          .then(() => {
            // console.log('Page load and restore last student for evaluation', studentId)
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
      // console.log('using layout ', l)
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
