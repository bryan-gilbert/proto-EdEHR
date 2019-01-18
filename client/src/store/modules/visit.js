import axios from 'axios' // '../node_modules/axios/dist/axios.min'

const state = {
  apiUrl: '',
  sUserInfo: {},
  visitId: '',
  sVisitInfo: {},
  isLoggedIn: !!localStorage.getItem('token'),
  topLevelMenu: ''
}

const getters = {
  isInstructor: state => {
    var vi = state.sVisitInfo
    return vi ? vi.isInstructor : false
  },
  isStudent: state => {
    var vi = state.sVisitInfo
    return vi ? vi.isStudent : false
  },
  lmsName: state => {
    if (state.sVisitInfo && state.sVisitInfo.toolConsumer) {
      return state.sVisitInfo.toolConsumer.tool_consumer_instance_name
    }
    return ''
  },
  returnUrl: state => {
    var vi = state.sVisitInfo
    return vi ? vi.returnUrl : ''
  },
  username: (state, getters, rootState) => {
    console.log('GET NAME visit store getter for username')
    let info = rootState.sUserInfo
    console.log('GET NAME visit store getter for username ', info)
    let name = info ? info.givenName : ''
    return name
  }
}

const actions = {
  loadVisitInfo(context, visitId) {
    // console.log('loadVisitInfo')
    return new Promise((resolve, reject) => {
      var apiUrl = context.state.apiUrl
      let url = apiUrl + '/visits/flushed/' + visitId
      // console.log('In load page ', url)
      function invalid(msg) {
        console.log('INVALID LoadVisit', msg)
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
          // visitInfo.activityData contains the id of the ActivityData record
          console.log('dispatch load active data', visitInfo.activityData)
          context.dispatch(
            'ehrData/loadActivityData',
            { forStudent: true, id: visitInfo.activityData },
            { root: true }
          )
          console.log('after dispatch load active data', visitInfo.activityData)
          resolve()
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
  routeEnter({ commit }) {
    commit('routeEnter')
  }
}

const mutations = {
  apiUrl: (state, url) => {
    // console.log('visit store set api url ' + url)
    state.apiUrl = url
  },
  setVisitInfo: (state, info) => {
    // console.log('visit store set visit info ' + info._id)
    state.sVisitInfo = info
  },
  setUserInfo: (state, info) => {
    // console.log('visit store set user info ' + info._id)
    state.sUserInfo = info
  },
  routeEnter: state => {
    // console.log('mutation route enter found token ', token)
    var token = localStorage.getItem('token')
    state.isLoggedIn = !!token
  },
  topLevelMenu: (state, top) => {
    // console.log('visit store top level menu ' + (top ? top : 'empty'))
    state.topLevelMenu = top
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
