const state = {
  isSeeding: false,
  isLoading: false,
  isEditing: false,
  currentPageKey: '',
  loadingCnt: 0
}

const getters = {}

const actions = {}

const mutations = {
  setLoading: (state, isLoading) => {
    if(isLoading) {
      state.loadingCnt++
    } else {
      state.loadingCnt--
    }
    state.isLoading = state.loadingCnt > 0
  },
  setEditing: (state, isEditing) => {
    state.isEditing = isEditing
  },
  setSeeding: (state, isSeeding) => {
    state.isSeeding = isSeeding
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
