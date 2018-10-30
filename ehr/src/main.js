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
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
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
    },
    decrement () {
      store.commit('decrement')
    }
  }
}).$mount(`#app`)
