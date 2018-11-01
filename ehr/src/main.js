'use strict;'

import './scss/styles.scss'

import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import App from './components/App.vue'
import createLogger from 'vuex/dist/logger'
import axios from '../node_modules/axios/dist/axios.min'
import Configuration from './ehr-configuration'
var config = new Configuration()

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    sUserData: {},
    sUserInfo: {}
  },
  plugins: [createLogger()],
  mutations: {
    setUserInfo: (state, data) => { state.sUserInfo = data },
    // addProgressNotes: (state, payload) => {
    //   let pn = state.sUserData.progressNotes || []
    //   pn.push(payload.note)
    // },
    setUserData: (state, data) => {
      console.log(`set sUserData ${data}`)
      if (data === false) {
        state.sUserData = undefined
      } else {
        state.sUserData = data
      }
    }
  },
  actions: {
    addPNotes (context, payload) {
      let url = `${config.getApiUrl()}userData`
      let userData = context.state.sUserData
      console.log(`addPNotes start with userData= ${JSON.stringify(userData)}`)
      userData.progressNotes = userData.progressNotes || []
      let newNote = payload.note
      let id = userData.id
      userData.progressNotes.push(newNote)

      console.log(`addPNotes with url ${url} id: ${id} note: ${newNote} userData= ${JSON.stringify(userData)}`)
      axios.post(url, userData)
      .then((results) => {
        console.log(`addPNotes after post with ${results}`)
        context.commit('setUserData', results)
      })
      .catch(error => {
        console.log(`Failed to update progress notes ${error.message}`)
      })
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  computed: {
  },
  methods: {
  }
}).$mount(`#app`)
