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
    sActivityData: {},
    isLoggedIn: !!localStorage.getItem('token'),
    assignments: [],
    sClassList: [],
    sCourses: [],
    apiUrl: '',
    topLevelMenu: ''
  },
  plugins: [createLogger()],
  getters: {
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
      if (info.user) {
        state.sUserInfo = info.user
      }
      if (info.activityData) {
        state.sActivityData = info.activityData
      }
    },
    setActivityData: (state, data) => {
      state.sActivityData = data
    },
    setClassList: (state, list) => {
      state.sClassList = list
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
    saveEvaluationNotes (context, payload) {
      let visitData = context.state.sVisitInfo
      let vid = visitData._id
      let newNote = payload.note
      let url = `${context.state.apiUrl}/visits/evaluationData/${vid}`
      visitData.evaluationData = visitData.evaluationData || {}
      let vd = visitData.evaluationData = newNote
      let helper = new StoreHelper()
      helper.putRequest(url, vd, function (results) {
        let evaluationData = results.data
        // TODO finish ...
        console.log(`TODO save evaluation after post with ${evaluationData}`)
        // context.commit('setVisitInfo', visitdata)
      })
    },
    addPNotes (context, payload) {
      console.log('addPNotes')
      let activityData = context.state.sActivityData
      let newNote = payload.note
      let url = `${context.state.apiUrl}/activity-data/assignment-data/${activityData._id}`
      console.log(`Send addPNotes ${url}`)
      let vd = activityData.assignmentData || {}
      vd.progressNotes = vd.progressNotes || []
      vd.progressNotes.push(newNote)
      let helper = new StoreHelper()
      helper.putRequest(url, vd, function (results) {
        let activityData = results.data
        console.log(`addPNotes after post with ${activityData}`)
        context.commit('setActivityData', activityData)
      })
    }
  }
})

class StoreHelper {
  putRequest (url, bodyData, callback) {
    axios
    .put(url, bodyData)
    .then(results => {
      callback(results)
    })
    .catch(error => {
      console.error(`Failed put to ${url} with error: ${error.message}`)
    })
  }
}
export default store
