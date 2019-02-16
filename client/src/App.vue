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
      // console.log('incoming parameters', params2)
      // API return to url
      let apiUrl = params2['apiUrl']
      let visitId = params2['visit']
      // Visit Id
      var restoring = false
      const _this = this
      _this
        ._loadApiUrl(apiUrl)
        .then(() => {
          if (!visitId) {
            console.log('No visit id on query so check local storage storage?')
            restoring = true
            visitId = localStorage.getItem('token')
          }
          if (visitId) {
            localStorage.setItem('token', visitId)
            return this.$store.dispatch('visit/loadVisitInfo', visitId)
          } else {
            return Promise.reject('No visit id available')
          }
        })
        .then(() => {
          let isInstructor = _this.$store.getters['visit/isInstructor']
          if (this.$store.state.visit.isDeveloper) {
            return _this._loadDeveloping(restoring)
          } else if (isInstructor) {
            console.log('Page load instructor')
            return _this.$store.dispatch('instructor/loadCourses').then(() => {
              // console.log('Page load instructor restoring?', restoring)
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
    _loadDeveloping(restoring) {
      if (restoring) {
        /* Restore indicator that will say if the user is editing content. */
        let isDevelopingContent = localStorage.getItem('isDevelopingContent')
        let seedId = localStorage.getItem('seedId')
        if (isDevelopingContent && seedId) {
          console.log('User is developing content with seed id', seedId)
          this.$store.commit('visit/setIsDevelopingContent', isDevelopingContent)
          this.$store.commit('ehrData/setSeedId', seedId)
          return this.$store.dispatch('ehrData/loadSeedContent', seedId)
        }
      }
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

<style lang="scss"></style>
