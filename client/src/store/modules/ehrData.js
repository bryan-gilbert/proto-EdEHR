import StoreHelper from './storeHelper'
import EventBus from '../../event-bus'
import { ACTIVITY_DATA_EVENT } from '../../event-bus'
import { composeUrl, decoupleObject } from '../../helpers/ehr-utills'
import assignDeep from 'assign-deep'

const helper = new StoreHelper()
const API_ACTIVITY = 'activity-data'
const API_SEED = 'seed-data'

const state = {
  /*
  sActivityData is a db model object containing the student's assignment work, scratch pad, instructors evaluation notes, etc
   */
  sActivityData: {},
  forStudent: false,
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
    let mData
    let src
    let ehrSeedData = rootState.seedStore.ehrSeedData
    // console.log('mergedData sActivityData', state.sActivityData)
    // console.log('mergedData ehrSeedData', ehrSeedData)
    let assignmentData = state.sActivityData.assignmentData
    if (rootState.visit.isDevelopingContent) {
      console.log('mergedData: Develop seed', ehrSeedData)
      mData = ehrSeedData
      //getters['seedStore/seedEhrData']
      src = 'from seed'
    } else if (rootState.visit.sVisitInfo.isInstructor) {
      // TODO the whole instructor side is broken after changing the seed system
      mData = state.sCurrentStudentData.mergedData
      console.log('mergedData: Instructor result', mData)
      src = 'instructor'
    } else {
      // mergedData is the merge of assignment data and seed
      // Not always sure about Vue object whether the system has proxied them and added stuff.
      // So decouple the objects ... just in case
      let dseed = decoupleObject(ehrSeedData)
      let dass = decoupleObject(assignmentData)
      console.log('mergedData: Compose merged data from seed', dseed)
      console.log('mergedData: Compose merged data from student', dass)
      // Use https://www.npmjs.com/package/assign-deep to overcome limits of Object.assign
      mData = assignDeep(dseed, dass)
      console.log('mergedData: Compose merged data result', mData)
      src = 'student'
    }
    // console.log('get merged data results: ', src, mData)
    return mData
  },
  scratchData: state => {
    // only return for student
    // scratchData is the student's notes
    return state.sActivityData.scratchData
  },
  evaluationData: state => {
    // evaluationData is the instructor's comments on the student's work
    return state.sCurrentStudentData.evaluationData
  }
}

const actions = {
  loadActivityData(context, options) {
    let activityDataId = options.id
    console.log('Get activityData  ', activityDataId)
    let url = composeUrl(context, API_ACTIVITY) + `get/${activityDataId}`
    return helper.getRequest(context, url).then(response => {
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
      return helper.getRequest(context, url).then(response => {
        let ad = response.data.activitydata
        // console.log('Got activity information ', ad)
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
    return helper.putRequest(context, url, payload).then(results => {
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
    return helper.putRequest(context, url, { value: data }).then(results => {
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
    return helper.putRequest(context, url, { value: data }).then(results => {
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
  _setForStudent: (state, value) => {
    state.forStudent = value
  },
  _setActivityData: (state, cData) => {
    console.log('_setActivityData', cData)
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
