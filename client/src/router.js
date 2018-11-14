import Vue from 'vue'
import Router from 'vue-router'
// import EhrRoutes from './inside/ehrRoutes'
// const ehrRoutes = new EhrRoutes()
// const eRoutes = ehrRoutes.getRoutes()
import camelCase from 'camelcase'

Vue.use(Router)

const Home = () =>
  import(/* webpackChunkName: "home" */ './outside/views/Home.vue')
const Student = () =>
  import(/* webpackChunkName: "student" */ './outside/components/Student.vue')
const Instructor = () =>
  import(/* webpackChunkName: "instructor" */ './outside/components/Instructor.vue')

const PageNotFound = () =>
  import(/* webpackChunkName: "notfound" */ './outside/components/PageNotFound.vue')
let root = {
  path: '/',
  name: 'home',
  component: Home,
  meta: { layout: 'outside' },
  children: [
    {
      path: 'student',
      name: 'student',
      component: Student,
      children: [
        {
          path: 'courses',
          name: 'courses',
          component: () =>
            import(/* webpackChunkName: "courses" */ './outside/components/Courses.vue')
        },
        {
          path: 'assignments',
          name: 'assignments',
          component: () =>
            import(/* webpackChunkName: "assignments" */ './outside/components/Assignments.vue')
        }
      ]
    },
    {
      path: 'instructor',
      name: 'instructor',
      component: Instructor
    }
  ]
}
root.children = root.children.concat([
  {
    path: 'dashboard',
    name: 'dashboard',
    meta: { layout: 'outside' },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ './outside/views/Dashboard.vue')
  },
  {
    path: 'account',
    name: 'account',
    meta: { layout: 'outside' },
    component: () =>
      import(/* webpackChunkName: "account" */ './outside/views/Account.vue')
  },
  {
    path: 'help',
    name: 'help',
    meta: { layout: 'outside' },
    component: () =>
      import(/* webpackChunkName: "help" */ './outside/views/Help.vue')
  }
])

// Add the EHR routes
// Add all the EHR paths as children of the root
// root.children = root.children.concat(eRoutes)

let routes = [
  root,
  {
    path: '/ehr',
    name: 'ehr',
    meta: { layout: 'inside', label: 'EHR' }
  }
]

var pp
pp = '/ehr/patient'
routes.push(_makeRouterPath2(pp, 'progress-notes'))
pp = '/ehr/current'
routes.push(_makeRouterPath2(pp, 'billing'))
routes.push(_makeRouterPath2(pp, 'details'))
routes.push(_makeRouterPath2(pp, 'discharge'))
routes.push(_makeRouterPath2(pp, 'mar'))
routes.push(_makeRouterPath2(pp, 'vital-signs'))
pp = '/ehr/current/assessments'
routes.push(_makeRouterPath2(pp, 'biopsychosocial'))
routes.push(_makeRouterPath2(pp, 'cardiovascular'))
routes.push(_makeRouterPath2(pp, 'gastrointestinal'))
routes.push(_makeRouterPath2(pp, 'genitourinary'))
routes.push(_makeRouterPath2(pp, 'musculoskeletal'))
routes.push(_makeRouterPath2(pp, 'neurological'))
routes.push(_makeRouterPath2(pp, 'pain'))
routes.push(_makeRouterPath2(pp, 'respiratory'))
pp = '/ehr/medication'
routes.push(_makeRouterPath2(pp, 'orders'))
pp = '/ehr/nonmed'
routes.push(_makeRouterPath2(pp, 'labreqs'))
routes.push(_makeRouterPath2(pp, 'orders'))
routes.push(_makeRouterPath2(pp, 'referrals'))

routes.push({ path: '*', component: PageNotFound })

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

/**
 * Create a Vue Router route configuration object
 * @param parentPath
 * @param name
 * @param label
 * @return {{path: *, name: *, meta: {layout: string}}}
 * @private
 */

function _makeRouterPath2(parentPath, name) {
  function splitCamelCase(string) {
    return string.split(/(?=[A-Z])/g)
  }
  var fPath = parentPath + '/' + name
  var route = {
    path: fPath,
    name: name,
    meta: { layout: 'inside' }
  }
  /*
  the label and the component names are, by design, tied together.  Be sure all EHR
  components are named as pascalCase.  For example, the path label 'Vital Signs'
  is matched to a  Vue component names VitalSigns.
  If there is no label for this route then that means it's just in intermediate route
  without a component.
   */
  var componentName = camelCase(name, { pascalCase: true })
  var label = splitCamelCase(componentName).join(' ')
  console.log(name, fPath, componentName, label)
  // store the label in the meta data to keep it out of the way of the Vue Router.
  route.meta.label = label
  // import(/* webpackChunkName: "chunk-[request][index]" */ './inside/pages/Mar.vue')
  let p = `./inside/views/${componentName}.vue`
  route.meta.componentPath = p
  // route.meta.componentPath = `./inside/pages/${componentName}.vue`
  // console.log('look for component named', componentName)
  // load the component via import which returns a promise.
  // the component's code (chunk) will be the named based on the component (request) and
  // index (order of chunks packed by webpack
  route.component = () =>
    import(/* webpackChunkName: "chunk-[request][index]" */ `./inside/views/${componentName}.vue`)
  return route
}
