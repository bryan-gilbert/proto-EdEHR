// import shop from '../../api/shop'
import axios from 'axios' // '../node_modules/axios/dist/axios.min'

const state = {
  apiUrl: '',
  sUserInfo: {},
  visitId: '',
  sVisitInfo: {},
  isLoggedIn: !!localStorage.getItem('token'),
  topLevelMenu: '',
  sCurrentActivity: {}
}

const getters = {
  isInstructor(state) {
    var vi = state.sVisitInfo
    return vi ? vi.isInstructor : false
  },
  isStudent(state) {
    var vi = state.sVisitInfo
    return vi ? vi.isStudent : false
  },
  enableEhrControls(state, getters) {
    return getters.isStudent
  },
  lmsName: state => {
    if (state.sVisitInfo && state.sVisitInfo.toolConsumer) {
      return state.sVisitInfo.toolConsumer.tool_consumer_instance_name
    }
    return ''
  },
  returnUrl(state) {
    var vi = state.sVisitInfo
    return vi ? vi.returnUrl : ''
  }
}

const actions = {
  loadVisitInfo(context, visitId) {
    return new Promise((resolve, reject) => {
      var apiUrl = context.state.apiUrl
      let url = apiUrl + '/visits/flushed/' + visitId
      console.log('In load page ', url)
      function invalid(msg) {
        console.error(msg)
        context.commit('resetInfo')
        reject(new Error(msg))
      }
      axios
        .get(url)
        .then(response => {
          // console.log('what is the response? ', response.data)
          let visitInfo = response.data
          if (!visitInfo) {
            return invalid('ERROR No visit information for ' + visitId)
          }
          if (!visitInfo.user) {
            return invalid('ERROR.  No user information for ' + visitId)
          }
          if (!visitInfo.activity) {
            return invalid('ERROR.  No activity information for ' + visitId)
          }
          if (!visitInfo.activityData) {
            return invalid('ERROR.  No activity data information for ' + visitId)
          }
          context.commit('setVisitInfo', visitInfo)
          context.commit('setUserInfo', visitInfo.user)
          context.commit('setActivityInfo', visitInfo.activity)
          context.commit('ehrData/setActivityData', visitInfo.activityData)
          // context.commit('ehrData/setCurrentData', visitInfo.activityData.currentData)
        })
        .catch(error => {
          console.log(error.message)
          console.log(error.code) // Not always specified
          console.log(error.config) // The config that was used to make the request
          console.log(error.response) // Only available if response was received from the server
          return invalid(error.message)
        })
    })
  },
  routeEnter ({ commit }) {
    commit('routeEnter')
  },
}

const mutations = {
  apiUrl: (state, url) => {
    console.log('visit store set api url ' + url)
    state.apiUrl = url
  },
  setActivityInfo: (state, info) => {
    console.log('visit store set activity info ' + info._id)
    state.sCurrentActivity = info
  },
  setVisitInfo: (state, info) => {
    console.log('visit store set visit info ' + info._id)
    state.sVisitInfo = info
  },
  setUserInfo: (state, info) => {
    console.log('visit store set user info ' + info._id)
    state.sUserInfo = info
  },
  routeEnter: state => {
    // console.log('mutation route enter found token ', token)
    var token = localStorage.getItem('token')
    state.isLoggedIn = !!token
  },
  topLevelMenu: (state, top) => {
    console.log('visit store top level menu ' + top)
    state.topLevelMenu = top
  }
}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}
