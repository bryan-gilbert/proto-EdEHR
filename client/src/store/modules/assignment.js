import StoreHelper from './storeHelper'
const helper = new StoreHelper()
import { composeUrl } from '../../helpers/ehr-utills'
const API = 'assignments'
const state = {
  assignmentsListing: []
}

const getters = {}

const actions = {
  loadAssignments(context) {
    let url = composeUrl(context, API)
    return helper.getRequest(context, url).then(response => {
      let list = response.data.assignments
      if (!list) {
        console.error('ERROR the system should have assignments')
        return
      }
      this.assignmentsListing = list
      context.commit('setAssignmentsListing', list)
    })
  },
  createAssignment(context, payload) {
    let url = composeUrl(context, API)
    console.log('send assignment data ', url, payload)
    return helper.postRequest(context, url, payload).then(results => {
      let resultsData = results.data
      console.log('assignment post responded with:', JSON.stringify(resultsData))
      return context.dispatch('loadAssignments')
    })
  },
  updateAssignment(context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let url = composeUrl(context, API) + id
    console.log('updateAssignment', url, payload)
    return helper.putRequest(context, url, payload).then(results => {
      let resultsData = results.data
      console.log('assignment post responded with:', JSON.stringify(resultsData))
      return context.dispatch('loadAssignments')
    }).catch( (err) => {
      console.log('error in update assignment ', err)
    })
  }
}

const mutations = {
  setAssignmentsListing: (state, cData) => {
    state.assignmentsListing = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
