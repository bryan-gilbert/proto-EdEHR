import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Outside from './outside/layout/LayoutOutside.vue'
import Inside from './inside/layout/LayoutEhr.vue'
import dragDirective from './drag-directive'
import VTooltip from 'v-tooltip'
import './scss/styles.scss'

Vue.config.productionTip = false

Vue.use(VTooltip)

Vue.component('outside-layout', Outside)
Vue.component('inside-layout', Inside)
Vue.directive('dragged', dragDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
