const state = {
  sCurrentData: {}
}

const getters = {
  progressNotes: state => {
    console.log('call to get progress notes', state.sCurrentData.progressNotes)
    return state.sCurrentData.progressNotes
  }
}

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
