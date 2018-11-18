import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "chunk-[request][index]" */ './outside/views/Dashboard.vue'),
    meta: { layout: 'outside' }
  },
  {
    path: '/ehr',
    name: 'ehr',
    meta: { layout: 'inside', label: 'EHR' }
  }
]

import { outside } from './outsideRoutes'
routes = routes.concat(outside())
import { inside } from './insideRoutes'
routes = routes.concat(inside())

routes.push({
  path: '*',
  component: () =>
    import(/* webpackChunkName: "notfound" */ './outside/components/PageNotFound.vue')
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
