'use strict;'

import './scss/styles.scss'

import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import App from './components/App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
    sUserData: {},
    sUserInfo: {}
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
    setUserInfo: (state, data) => { state.sUserInfo = data },
    addProgressNotes: (state, payload) => {
      let pn = state.sUserData.progressNotes || []
      pn.push(payload.note)
    },
    setUserData: (state, data) => { state.sUserData = data }
  },
  actions: {
    addPNotes (context, payload) {
      context.commit('addProgressNotes', payload)
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    }
  }
}).$mount(`#app`)
