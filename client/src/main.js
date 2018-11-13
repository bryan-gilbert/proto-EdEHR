import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Outside from './layout/LayoutOutside.vue'
import Inside from './layout/LayoutEhr.vue'

import './scss/styles.scss'

Vue.config.productionTip = false

Vue.component('outside-layout', Outside)
Vue.component('inside-layout', Inside)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
