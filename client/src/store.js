import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import axios from '../node_modules/axios/dist/axios.min'

Vue.use(Vuex)

/* global localStorage */
function resetState (state) {
  let d = {}
  state.sUserInfo = d
  state.fullName = ''
  state.sVisitInfo = d
  state.visitId = ''
  localStorage.removeItem('token')
  state.isLoggedIn = false
  state.assignments = []
  state.sCourses = []
  state.apiUrl = ''
}

const store = new Vuex.Store({
  state: {
    sUserInfo: {},
    visitId: '',
    fullName: '',
    sVisitInfo: {},
    isLoggedIn: !!localStorage.getItem('token'),
    assignments: [],
    sCourses: [],
    apiUrl: '',
    topLevelMenu: ''
  },
  plugins: [createLogger()],
  getters: {
    sActivityInfo: state => {
      return state.sVisitInfo && state.sVisitInfo.activity ? state.sVisitInfo.activity : {}
    },
    lmsName: state => {
      if (state.sVisitInfo && state.sVisitInfo.toolConsumer) {
        return state.sVisitInfo.toolConsumer.tool_consumer_instance_name
      }
      return ''
    }
  },
  mutations: {
    logout: state => {
      // console.log('mutation logout')
      resetState(state)
    },
    routeEnter: state => {
      var token = localStorage.getItem('token')
      // console.log('mutation route enter found token ', token)
      state.token = token
      state.isLoggedIn = !!token
    },
    resetInfo: state => {
      resetState(state)
    },
    setVisitInfo: (state, info) => {
      state.sVisitInfo = info
      var userInfo = info.user ? info.user : {}
      state.sUserInfo = userInfo
    },
    setAssignments: (state, list) => {
      state.sAssignments = list
    },
    setCourses: (state, list) => {
      // console.log('set courses', list)
      state.sCourses = list
    },
    apiUrl: (state, url) => {
      state.apiUrl = url
    },
    topLevelMenu: (state, top) => {
      state.topLevelMenu = top
    }
  },
  actions: {
    routeEnter ({ commit }) {
      // console.log('action routeEnter')
      commit('routeEnter')
    },
    logout ({ commit }) {
      commit('logout')
    },
    addPNotes (context, payload) {
      let visitData = context.state.sVisitInfo
      let vid = visitData._id
      let newNote = payload.note
      let url = `${context.state.apiUrl}/visits/data/${vid}`
      // console.log('addPNotes payload', payload)
      // console.log('addPNote visit data id', vid)
      // console.log('addPNotes put url', url)
      visitData.assignmentData = visitData.assignmentData || {}
      let vd = visitData.assignmentData
      vd.progressNotes = vd.progressNotes || []
      vd.progressNotes.push(newNote)
      // console.log('addPNote visitData', vd)
      axios
        .put(url, vd)
        .then(results => {
          let visitdata = results.data
          // console.log(`addPNotes after post with ${visitdata}`)
          context.commit('setVisitInfo', visitdata)
        })
        .catch(error => {
          console.error(`Failed to update progress notes ${error.message}`)
        })
    }
  }
})

export default store
