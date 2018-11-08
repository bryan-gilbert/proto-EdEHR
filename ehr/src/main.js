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
    sUserInfo: {},
    userId: '',
    isLoggedOn: false
  },
  plugins: [createLogger()],
  mutations: {
    setUserId: (state, id) => {
      console.log('store user id into global store', id)
      state.userId = id
    },
    setUserInfo: (state, userInfo) => {
      state.sUserInfo = userInfo
    },
    setUserData: (state, data) => {
      console.log(`set sUserData ${data}`)
      if (!data) {
        state.sUserData = undefined
      } else {
        state.sUserData = data
      }
    }
  },
  actions: {
    addPNotes (context, payload) {
      let userId = context.state.userId
      let userData = context.state.sUserData
      let sessionData = userData.sessionData || {}
      let newNote = payload.note
      let url = `${config.getApiUrl()}users/${userId}/sessionData`
      console.log('addPNotes payload', payload)
      console.log('addPNote userId', userId)
      console.log(`addPNotes put url`, url)

      if (typeof sessionData === 'string') {
        try {
          sessionData = JSON.parse(sessionData)
        } catch (error) {
          console.log('Could not parse ', sessionData, 'Error: ', error)
          sessionData = {}
        }
      }
      userData.sessionData = sessionData
      userData.sessionData.progressNotes = userData.sessionData.progressNotes || []
      userData.sessionData.progressNotes.push(newNote)
      console.log('addPNote userData', userData)

      axios.put(url, userData)
      .then((results) => {
        console.log(`addPNotes after post with ${results.data}`)
        context.commit('setUserData', results.data)
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
