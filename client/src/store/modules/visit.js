// import shop from '../../api/shop'
import axios from 'axios' // '../node_modules/axios/dist/axios.min'

const state = {
  apiUrl: '',
  sUserInfo: {},
  visitId: '',
  sVisitInfo: {},
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
      axios
        .get(url)
        .then(response => {
          console.log('what is the response? ', response.data)
          let visitInfo = response.data
          if (!visitInfo) {
            console.error('ERROR because a visit should be registered')
            context.commit('resetInfo')
            reject(new Error('No visit'))
          }
          console.log('Found information', visitInfo)
          context.commit('setVisitInfo', visitInfo)
          // if (visitInfo.isInstructor) {
          //   context.dispatch('loadInstructor')
          // }
        })
        .catch(error => {
          console.log(error.message)
          console.log(error.code) // Not always specified
          console.log(error.config) // The config that was used to make the request
          console.log(error.response) // Only available if response was received from the server
        })
    })
  }
}

const mutations = {
  setVisitInfo: (state, info) => {
    // console.log('setVisitInfo set visit info')
    state.sVisitInfo = info
    if (info.user) {
      // console.log('setVisitInfo set user info', info.user)
      state.sUserInfo = info.user
    }
    if (info.activityData) {
      console.log('setVisitInfo set activity data', info.activityData.currentData.progressNotes)
      state.sActivityData = info.activityData
      state.ehrData.sCurrentData = info.activityData.currentData
    }
    if (info.activity) {
      console.log('setVisitInfo set activity')
      state.sCurrentActivity = info.activity
    }
  },
  apiUrl: (state, url) => {
    console.log('apiUrl set url ' + url)
    state.apiUrl = url
  },
  topLevelMenu: (state, top) => {
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
