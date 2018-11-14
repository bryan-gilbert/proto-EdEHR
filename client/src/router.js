import Vue from 'vue'
import Router from 'vue-router'
import EhrRoutes from './inside/ehrRoutes'
const ehrRoutes = new EhrRoutes()
const eRoutes = ehrRoutes.getRoutes()

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
root.children = root.children.concat(eRoutes)

let routes = [root, { path: '*', component: PageNotFound }]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// const Courses = () => import(/* webpackChunkName: "courses" */'./components/Courses.vue')
// const Assignments = () => import(/* webpackChunkName: "assignments" */'./components/Assignments.vue')

// const About = () => import(/* webpackChunkName: "about" */'./views/About.vue')
// const Help = () => import(/* webpackChunkName: "help" */'./views/Help.vue')
// const Ehr = () => import(/* webpackChunkName: "help" */'./views/Erh.vue')

// const Hello = () => import(/* webpackChunkName: "hello" */'./components/Hello.vue')
// const Dashboard = () => import(/* webpackChunkName: "dash" */'./components/Dashboard.vue')

// { path: '/outside/:id', component: Dashboard, props: true }, // Pass route.params to props
// { path: '/hello', component: Hello }, // No props, no nothing
// { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
// { path: '/static', component: Hello, props: { name: 'world' } }, // static values
// // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
// { path: '/attrs', component: Hello, props: { name: 'another static' } }
// { path: '/foo', component: Foo },
// {
//   path: '/bar',
//   component: Bar,
//   children: [{ path: 'baz', component: Baz }]
// }
