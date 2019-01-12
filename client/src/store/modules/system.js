const state = {
  isLoading: false,
  isEditing: false,
  currentPageKey: ''
}

const getters = {}

const actions = {}

const mutations = {
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading
  },
  setEditing: (state, isEditing) => {
    state.isEditing = isEditing
  },
  setCurrentPageKey: (state, pageKey) => {
    state.currentPageKey = pageKey
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
