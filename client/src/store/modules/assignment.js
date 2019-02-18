import StoreHelper from './storeHelper'
const helper = new StoreHelper()

const state = {
  assignmentsListing: []
}

const getters = {}

const actions = {
  loadAssignments(context) {
    let visitState = context.rootState.visit
    var apiUrl = visitState.apiUrl
    let url = apiUrl + '/assignments/'
    return helper.getRequest(url).then(response => {
      let list = response.data.assignments
      if (!list) {
        console.error('ERROR the system should have assignments')
        return
      }
      this.assignmentsListing = list
      context.commit('setAssignmentsListing', list)
    })
  },
}

const mutations = {
  setAssignmentsListing: (state, cData) => {
    state.assignmentsListing = cData
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
