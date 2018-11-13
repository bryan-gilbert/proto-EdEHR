import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "home" */'./views/Home.vue')
const Student = () => import(/* webpackChunkName: "student" */'./components/Student.vue')
const Instructor = () => import(/* webpackChunkName: "instructor" */'./components/Instructor.vue')

const Courses = () => import(/* webpackChunkName: "courses" */'./components/Courses.vue')
const Assignments = () => import(/* webpackChunkName: "assignments" */'./components/Assignments.vue')

const About = () => import(/* webpackChunkName: "about" */'./views/About.vue')
const Help = () => import(/* webpackChunkName: "help" */'./views/Help.vue')
const Ehr = () => import(/* webpackChunkName: "help" */'./views/Erh.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {layout : 'outside'},
      children: [
        { path:'student', name:'stud', component: Student,
          children: [
            { path: 'courses', component: Courses},
            { path: 'assignments', component: Assignments},
          ]
        },
        { path:'instructor', component: Instructor}
      ]
    },
    {
      path: '/about',
      name: 'about',
      meta: {layout : 'outside'},
      component: About
    },
    {
      path: '/help',
      name: 'help',
      meta: {layout : 'outside'},
      component: Help
    },
    {
      path: '/ehr',
      name: 'ehr',
      meta: {layout : 'inside'},
      component: Ehr
    },

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
    // },

  ]
})
