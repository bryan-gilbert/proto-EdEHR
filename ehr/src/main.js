'use strict;'

import './scss/styles.scss'

import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import App from './components/App.vue'
import createLogger from 'vuex/dist/logger'
import axios from '../node_modules/axios/dist/axios.min'
import Configuration from './ehr-configuration'
import store from './store'
var config = new Configuration()

Vue.use(Vuex)

Vue.config.productionTip = false

const storeOld = new Vuex.Store({
  state: {
    sUserInfo: {},
    sActivityInfo: {},
    sVisitInfo: {},
    sVisitDataInfo: {},
    userId: '',
    isValidUser: false,
    isLoggedOn: false
  },
  plugins: [createLogger()],
  mutations: {
    resetInfo: (state) => {
      let d = {}
      state.sUserInfo = d
      state.sActivityInfo = d
      state.sVisitInfo = d
      state.sVisitDataInfo = d
      state.userId = ''
      state.isValidUser = false
    },
    setUserId: (state, id) => {
      console.log('store user id into global store', id)
      state.userId = id
    },
    setValidUser: (state, isValid) => {
      state.isValidUser = isValid
    },
    setUserInfo: (state, userInfo) => {
      state.sUserInfo = userInfo
    },
    setActivityInfo: (state, info) => {
      state.sActivityInfo = info
    },
    setVisitInfo: (state, info) => {
      state.sVisitInfo = info
    },
    setVisitDataInfo: (state, info) => {
      state.sVisitDataInfo = info
    }
  },
  actions: {
    addPNotes (context, payload) {
      let visitData = context.state.sVisitDataInfo
      let vid = visitData._id
      let newNote = payload.note
      let url = `${config.getApiUrl()}visitdata/${vid}`
      console.log('addPNotes payload', payload)
      console.log('addPNote visit data id', vid)
      console.log(`addPNotes put url`, url)
      visitData.data = visitData.data || {}
      let vd = visitData.data
      vd.progressNotes = vd.progressNotes || []
      vd.progressNotes.push(newNote)
      console.log('addPNote visitData', vd)

      axios.put(url, visitData)
      .then((results) => {
        let data = results.data.visitdata
        console.log(`addPNotes after post with ${data}`)
        context.commit('setVisitDataInfo', data)
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
