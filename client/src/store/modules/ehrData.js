import StoreHelper from './storeHelper'
const helper = new StoreHelper()

const state = {
  sActivityData: {}
}

const getters = {
  assignmentData: state => {
    // assignmentData is the data without seed
    return state.sActivityData.assignmentData
  },
  mergedData: state => {
    // mergedData is the merge of assignment data and seed
    return state.sActivityData.mergedData
  },
  scratchData: state => {
    // scratchData is the student's notes
    return state.sActivityData.scratchData
  },
  seedData: state => {
    return state.sActivityData.seedData
  }
}

const actions = {
  updateActivityData(context, data) {
    context.commit('setActivityData', data)
  },
  loadActivityData(context, activityId) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activities/flushed/${activityId}`
    return helper.getRequest(url).then(response => {
      console.log('Got activity information ') //, response.data)
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
      console.log('ehrData commit activityData with new assignmentData', JSON.stringify(activityData.assignmentData))
      context.commit('setActivityData', activityData)
      return activityData
    })
  },
  sendScratchData(context, data) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sActivityData._id
    console.log('sendScratchData scratch, apiUrl ', activityDataId, apiUrl)
    let url = `${apiUrl}/activity-data/scratch-data/${activityDataId}`
    return helper.putRequest(url, {value: data}).then(results => {
      let activityData = results.data
      console.log('ehrData commit activityData with new scratchData', JSON.stringify(activityData.scratchData))
      context.commit('setActivityData', activityData)
      return activityData
    })
  }
}

const mutations = {
  setActivityData: (state, cData) => {
    console.log('setActivityData', cData.assignment)
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
