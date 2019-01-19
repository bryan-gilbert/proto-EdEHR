import Vue from 'vue'
import App from './App.vue'
import VueScrollTo  from 'vue-scrollto'
import router from './router'
import store from './store'
import Outside from './outside/layout/LayoutOutside.vue'
import Inside from './inside/layout/LayoutEhr.vue'
import dragDirective from './drag-directive'
import resizeDirective from './resize-directive'
import './scss/styles.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCheckCircle,
  faTimesCircle,
  faEdit,
  faClock,
  faInfoCircle,
  faArrowRight,
  faArrowLeft,
  faNotesMedical
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheckCircle, faTimesCircle, faEdit)
library.add(faClock, faInfoCircle, faArrowRight, faArrowLeft, faNotesMedical)
Vue.component('fas-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(require('vue-moment'))
Vue.use(require('v-tooltip'))
/* See note in asInstructor mounted */
Vue.use(VueScrollTo)

Vue.component('outside-layout', Outside)
Vue.component('inside-layout', Inside)
Vue.directive('dragged', dragDirective)
Vue.directive('resized', resizeDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
