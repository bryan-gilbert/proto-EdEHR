'use strict;'

import Vue from 'vue'
import router from './router'
import App from './components/App.vue'
import './scss/styles.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount(`#app`)
