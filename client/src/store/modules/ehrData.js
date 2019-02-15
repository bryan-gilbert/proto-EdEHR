import StoreHelper from './storeHelper'
import EventBus from '../../event-bus'
import { ACTIVITY_DATA_EVENT } from '../../event-bus'
const helper = new StoreHelper()

const state = {
  /*
  sActivityData is a db model object containing the student's assignment work, scratch pad, instructors evaluation notes, etc
   */
  sActivityData: {},
  forStudent: false,
  // Seed content is only used during editing of assignment seed data.
  // It will contain the metadata (name, version, description) plus the actual seedData
  sSeedId: '',
  sSeedContent: {},
  /*
  These two objects contain the information needed by the instructor to see and evaluate the student's work.
  sCurrentStudentInfo contains information about the student.
  sCurrentStudentData contains the student's assignment work and instructors evaluation notes
   */
  sCurrentStudentInfo: {},
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
      console.log(
        'Using current student from class list assignment data',
        state.sCurrentStudentData
      )
      return state.sCurrentStudentData.assignmentData
    } else {
      console.log('Using students assignment data')
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
    // evaluationData is the instructor's comments on the student's work
    return state.sCurrentStudentData.evaluationData
  },
  seedData: (state, getters, rootState) => {
    let seedData
    if (rootState.visit.sVisitInfo.isInstructor) {
      seedData = state.sCurrentStudentData.seedData
    } else if (rootState.visit.sVisitInfo.isDeveloper) {
      seedData = state.sSeedContent.seedData
    } else {
      seedData = state.sActivityData.seedData
    }
    console.log('ehrData seedData getter returns ', seedData)
    return seedData
  }
}

const actions = {
  loadSeedContent(context, options) {
    console.log("What is in options?", options)
    let seedId = context.state.sSeedId
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/seed-data/get/${seedId}`
    return helper.getRequest(url).then(response => {
      let sd = response.data.seeddata
      context.commit('setSeedContent', sd)
    })
  },
  loadActivityData(context, options) {
    // /activity-data
    let activityDataId = options.id
    console.log('Get activityData  ', activityDataId)
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/activity-data/get/${activityDataId}`
    return helper.getRequest(url).then(response => {
      let ad = response.data.activitydata
      context.commit('_setForStudent', options.forStudent)
      console.log('Got activity information ', ad)
      if (options.forStudent) {
        context.commit('_setActivityData', ad)
      } else {
        context.commit('_setCurrentStudentData', ad)
      }
    })
  },
  restoreActivityData(context) {
    let forStudent = context.state.forStudent
    // console.log('restoreActivityData ', forStudent)
    if (forStudent) {
      let visitState = context.rootState.visit
      let apiUrl = visitState.apiUrl
      let activityDataId = context.state.sActivityData._id
      let url = `${apiUrl}/activity-data/get/${activityDataId}`
      return helper.getRequest(url).then(response => {
        let ad = response.data.activitydata
        console.log('Got activity information ', ad)
        context.commit('_setActivityData', ad)
      })
    }
  },
  sendAssignmentDataUpdate(context, payload) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sActivityData._id
    console.log(
      'sendAssignmentDataUpdate activityDataId, apiUrl, property: ',
      activityDataId,
      apiUrl,
      payload.propertyName
    )
    let url = `${apiUrl}/activity-data/assignment-data/${activityDataId}`
    // Update the contents of the current visit's activityData.assignmentData.
    // Payload must have form similar to
    // let payload = {
    //   property: 'progressNotes',
    //   value: value
    // }
    return helper.putRequest(url, payload).then(results => {
      let activityData = results.data
      // console.log('ehrData commit activityData with new assignmentData', JSON.stringify(activityData.assignmentData))
      context.commit('_setActivityData', activityData)
      return activityData
    })
  },

  sendScratchData(context, data) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sActivityData._id
    // console.log('sendScratchData scratch, apiUrl ', activityDataId, apiUrl)
    let url = `${apiUrl}/activity-data/scratch-data/${activityDataId}`
    return helper.putRequest(url, { value: data }).then(results => {
      let activityData = results.data
      // console.log('ehrData commit activityData with new scratchData', JSON.stringify(activityData.scratchData))
      context.commit('_setActivityData', activityData)
      return activityData
    })
  },
  sendEvaluationNotes(context, data) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let activityDataId = context.state.sCurrentStudentData.activityDataId
    // console.log('sendEvaluationNotes activityDataId, apiUrl, data ', activityDataId, apiUrl, JSON.stringify(data))
    let url = `${apiUrl}/activity-data/evaluation-data/${activityDataId}`
    return helper.putRequest(url, { value: data }).then(results => {
      let activityData = results.data
      console.log(
        'ehrData update current student data with new evaluation data',
        JSON.stringify(activityData)
      )
      context.commit('_setCurrentStudentData', activityData)
      return activityData
    })
  }
}

const mutations = {
  setSeedId: (state, value) => {
    state.sSeedId = value
  },
  setSeedContent: (state, value) => {
    console.log('setting seed data ', value)
    state.sSeedContent = value
  },
  _setForStudent: (state, value) => {
    state.forStudent = value
  },
  _setActivityData: (state, cData) => {
    // console.log('_setActivityData', cData)
    // console.log('_setActivityData\'s assignment', cData.assignment)
    state.sActivityData = cData
    EventBus.$emit(ACTIVITY_DATA_EVENT)
  },
  _setCurrentStudentData: (state, activitydata) => {
    let _sCurrentStudentData = {
      activityDataId: activitydata._id,
      evaluationData: activitydata.evaluationData || '',
      assignmentData: activitydata.assignmentData || {},
      mergedData: activitydata.mergedData || {},
      lastDate: activitydata.lastDate
    }
    // console.log('set sCurrentStudentData', _sCurrentStudentData)
    state.sCurrentStudentData = _sCurrentStudentData
  },
  setCurrentStudentInfo: (state, cData) => {
    // console.log('set setCurrentStudentInfo', cData)
    state.sCurrentStudentInfo = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
