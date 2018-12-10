import StoreHelper from './storeHelper'
const helper = new StoreHelper()

const state = {
  sActivityData: {}
}

const getters = {
  progressNotes: state => {
    var sc = state.sActivityData.currentData || {}
    console.log('getter call to get progress notes', sc.progressNotes)
    return sc.progressNotes
  },
  currentData: state => {
    // currentData is the merge of assignment data and seed
    return state.sActivityData.currentData
  }
}

const actions = {
  updateActivityData(context, data) {
    context.commit('setActivityData', data)
  },
  loadActivityData(context, activityId) {
    var apiUrl = this.$store.state.visit.apiUrl
    let url = `${apiUrl}/activities/flushed/${activityId}`
    return helper.getRequest(url).then(response => {
      console.log('Got activity information ', response.data)
      context.commit('setActivityData', response.data)
    })
  },
  sendAssignmentDataUpdate(context, payload) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sActivityData._id
    console.log('sendAssignmentDataUpdate activityDataId, apiUrl, property: ', activityDataId, apiUrl, payload.propertyName)
    let url = `${apiUrl}/activity-data/assignment-data/${activityDataId}`
    // Update the contents of the current visit's activityData.assignmentData.
    // Payload must have form similar to
    // let payload = {
    //   property: 'progressNotes',
    //   value: value
    // }
    return helper.putRequest(url, payload).then(results => {
      let activityData = results.data
      context.commit('setActivityData', activityData)
      return activityData
    })
  }
}

const mutations = {
  setActivityData: (state, cData) => {
    state.sActivityData = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
