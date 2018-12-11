import Vue from 'vue'
import Vuex from 'vuex'
import visit from './modules/visit'
import instructor from './modules/instructor'
import assignment from './modules/assignment'
import ehrData from './modules/ehrData'
// import student from './modules/student'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    visit,
    // student,
    instructor,
    assignment,
    ehrData
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
