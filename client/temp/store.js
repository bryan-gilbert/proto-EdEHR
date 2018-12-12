import Vue from 'vue'
import Vuex from 'vuex'
import StoreHelper from './storeHelper'
import createLogger from 'vuex/dist/logger'

var helper

Vue.use(Vuex)

/* global localStorage */
function resetState (state) {
  let d = {}
  state.sUserInfo = d
  // state.fullName = ''
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
    // fullName: '',
    sVisitInfo: {},
    sCurrentActivity: {},
    sActivityData: {},
    sCurrentData: {},
    isLoggedIn: !!localStorage.getItem('token'),
    // assignments: [],
    sClassList: [],
    sCourses: [],
    apiUrl: '',
    topLevelMenu: '',
    sInstructorReturnUrl: '/instructor',
    sCurrentEvaluationStudentId: ''
  },
  plugins: [createLogger()],
  getters: {
    lmsName: state => {
      if (state.sVisitInfo && state.sVisitInfo.toolConsumer) {
        return state.sVisitInfo.toolConsumer.tool_consumer_instance_name
      }
      return ''
    },
    currentEvaluationStudent: state => {
      var currentId = state.sCurrentEvaluationStudentId
      var classList = state.sClassList
      if (currentId && classList) {
        return classList.find((elem) => {
          return elem._id === currentId
        })
      }
      return null
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
        state.sCurrentData = info.activityData.currentData
      }
      if (info.activity) {
        state.sCurrentActivity = info.activity
      }
    },
    setInstructorReturnUrl: (state, rUrl) => {
      console.log('save instructor return url' + rUrl)
      state.sInstructorReturnUrl = rUrl
    },
    setCurrentEvaluationStudentId: (state, id) => {
      state.sCurrentEvaluationStudentId = id
    },
    setActivityData: (state, data) => {
      state.sActivityData = data
      state.sCurrentData = state.sActivityData.currentData
    },
    setCurrentData: (state, data) => {
      state.sCurrentData = data
    },
    setClassList: (state, list) => {
      /*
      list of Visit records (student only) for a particular LMS activity.
      Each record contains a populated ActivityData (student's work)
      (EdEHR) Assignment and User
       */
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
      let vid = payload.activityDataId
      let body = {
        evaluationData: payload.evalNotes
      }
      let url = `${context.state.apiUrl}/activity-data/evaluation-data/${vid}`
      // console.log('store save eval notes ', url, body)
      return new Promise(resolve => {
        helper.putRequest(url, body).then(results => {
          let evaluationData = results.data
          resolve(evaluationData)
        })
      })
    },
    addPNotes (context, payload) {
      // console.log('addPNotes')
      let activityData = context.state.sActivityData
      let newNote = payload.note
      let url = `${context.state.apiUrl}/activity-data/assignment-data/${activityData._id}`
      // console.log(`Send addPNotes ${url}`)
      let vd = activityData.assignmentData || {}
      vd.progressNotes = vd.progressNotes || []
      vd.progressNotes.push(newNote)
      return helper.putRequest(url, vd).then(results => {
        let activityData = results.data
        console.log(`addPNotes after post with ${activityData}`)
        context.commit('setActivityData', activityData)
        return activityData
      })
    }
  }
})

helper = new StoreHelper(store)

export default store
