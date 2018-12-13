import StoreHelper from './storeHelper'
const helper = new StoreHelper()

const state = {
  sActivityData: {},
  sCurrentStudentData: {}
}

const getters = {
  assignmentData: (state, getters, rootState) => {
    /*
    By the documentation getters['visit/isInstructor'] should work but it doesn't
    So use the direct access of rootstate ...
     */
    let isInstructor = rootState.visit.sVisitInfo.isInstructor
    if (isInstructor) {
      console.log('Using current student from class list assignment data', state.sCurrentStudentData)
      return state.sCurrentStudentData.assignmentData
    } else {
      console.log("Using student's assignment data")
      // assignmentData is the data without seed
      return state.sActivityData.assignmentData
    }
  },
  mergedData: (state, getters, rootState) => {
    let isInstructor = rootState.visit.sVisitInfo.isInstructor
    if (isInstructor) {
      return state.sCurrentStudentData.mergedData
    } else {
      // mergedData is the merge of assignment data and seed
      return state.sActivityData.mergedData
    }
  },
  scratchData: state => {
    // only return for student
    // scratchData is the student's notes
    return state.sActivityData.scratchData
  },
  evaluationData: state => {
    // only return for instructor
    // evaluationData is the instructor's comments on the student's work
    return state.sCurrentStudentData.evaluationData
  },
  seedData: (state, getters, rootState) => {
    let isInstructor = rootState.visit.sVisitInfo.isInstructor
    if (isInstructor) {
      return state.sCurrentStudentData.seedData
    } else {
      return state.sActivityData.seedData
    }
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
    // console.log('setActivityData', cData)
    // console.log('setActivityData\'s assignment', cData.assignment)
    state.sActivityData = cData
  },
  setEvaluationData: (state, cData) => {
    // console.log('set sCurrentStudentData', cData)
    state.sCurrentStudentData = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
