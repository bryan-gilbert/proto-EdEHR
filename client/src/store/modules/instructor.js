import axios from 'axios' // '../node_modules/axios/dist/axios.min'
import StoreHelper from './storeHelper'
const helper = new StoreHelper()

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

const actions = {
  saveEvaluationNotes (context, payload) {
    let vid = payload.activityDataId
    let body = {
      evaluationData: payload.evalNotes
    }
    let url = `${context.state.apiUrl}/activity-data/evaluation-data/${vid}`
    // console.log('store save eval notes ', url, body)
    return new Promise(resolve => {
      helper.putRequest(url, body).then(results => {
        let evaluationData = results.data
        resolve(evaluationData)
      })
    })
  },
  loadInstructor (context) {
    console.log('Work in progress loading instructor information. ...')
  },
  loadInstructorCourses: function() {
    var apiUrl = this.$store.state.visit.apiUrl
    let userId = this.$store.state.visit.sUserInfo._id
    // console.log('In load instructor courses data url/id: ' + apiUrl + ' / ' + userId)
    return new Promise(() => {
      let url = `${apiUrl}/users/instructor/courses/${userId}`
      // console.log('In load instructor courses data ', url)
      axios.get(url).then(response => {
        // console.log('load courses', response.data)
        var courses = response.data['courses']
        this.$store.commit('setCourses', courses)
      })
    })
  },
}

const mutations = {
  setClassList: (state, list) => {
    /*
    list of Visit records (student only) for a particular LMS activity.
    Each record contains a populated ActivityData (student's work)
    (EdEHR) Assignment and User
     */
    state.sClassList = list
  },
  setCourses: (state, list) => {
    // console.log('set courses', list)
    state.sCourses = list
  },
  setInstructorReturnUrl: (state, rUrl) => {
    console.log('save instructor return url' + rUrl)
    state.sInstructorReturnUrl = rUrl
  },
  setCurrentEvaluationStudentId: (state, id) => {
    state.sCurrentEvaluationStudentId = id
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
