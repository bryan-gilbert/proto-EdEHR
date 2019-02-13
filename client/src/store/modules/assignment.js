import StoreHelper from './storeHelper'
const helper = new StoreHelper()

const state = {
  assignmentsListing: [],
  seedDataList: []

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
  loadSeedData(context) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/seed-data`
    return helper.getRequest(url).then(response => {
      let list = response.data.seeddata
      if (!list) {
        console.error('ERROR the system should have seeddata')
        return
      }
      context.commit('setSeedData', list)
    })
  },
  createSeedData(context, payload) {
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    // console.log('send seed data ', apiUrl, data)
    let url = `${apiUrl}/seed-data`
    return helper.postRequest(url, payload).then(results => {
      let resultsData = results.data
      // console.log('assignment commit seed data with new data', JSON.stringify(resultsData))
      return context.dispatch('loadSeedData')
    })
  },
  updateSeedData(context, dataIdPlusPayload) {
    let id = dataIdPlusPayload.id
    let payload = dataIdPlusPayload.payload
    let visitState = context.rootState.visit
    let apiUrl = visitState.apiUrl
    let url = `${apiUrl}/seed-data/${id}`
    console.log('updateSeedData', url, payload)
    return helper.putRequest(url, payload).then(results => {
      let resultsData = results.data
      // console.log('assignment commit seed data with new data', JSON.stringify(resultsData))
      return context.dispatch('loadSeedData')
    })
  },

}

const mutations = {
  setAssignmentsListing: (state, cData) => {
    state.assignmentsListing = cData
  },
  setSeedData: (state, cData) => {
    state.seedDataList = cData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
