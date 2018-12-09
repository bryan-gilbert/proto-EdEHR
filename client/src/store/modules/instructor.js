// import shop from '../../api/shop'
// import axios from 'axios' // '../node_modules/axios/dist/axios.min'

const state = {
  sInstructorReturnUrl: '/instructor',
  sCurrentEvaluationStudentId: '',
  sClassList: [],
  sCourses: []
}

const getters = {
  currentEvaluationStudent: state => {
    var currentId = state.sCurrentEvaluationStudentId
    var classList = state.sClassList
    if (currentId && classList) {
      return classList.find(elem => {
        return elem._id === currentId
      })
    }
    return { user: {}, activity: {} }
  }
}

const actions = {}

const mutations = {}

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations
}
