import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

const Home = () => import(/* webpackChunkName: "home" */'./views/Home.vue')
const Dashboard = () => import(/* webpackChunkName: "dash" */'./components/Dashboard.vue')
const Student = () => import(/* webpackChunkName: "student" */'./components/Student.vue')
const Instructor = () => import(/* webpackChunkName: "instructor" */'./components/Instructor.vue')
const Hello = () => import(/* webpackChunkName: "hello" */'./components/Hello.vue')

const Courses = () => import(/* webpackChunkName: "courses" */'./components/Courses.vue')
const Assignments = () => import(/* webpackChunkName: "assignments" */'./components/Assignments.vue')

// const Foo = () => import('./components/Foo.vue')
// const Bar = () => import(/* webpackChunkName: "bar" */ './components/Bar.vue')
// const Baz = () => import(/* webpackChunkName: "baz" */ './components/Baz.vue')
const About = () => import(/* webpackChunkName: "about" */'./views/About.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    // { path: '/foo', component: Foo },
    // {
    //   path: '/bar',
    //   component: Bar,
    //   children: [{ path: 'baz', component: Baz }]
    // },

    {
      path: '/about',
      name: 'about',
      component: About
    },
    { path: '/outside/:id', component: Dashboard, props: true }, // Pass route.params to props
    { path: '/hello', component: Hello }, // No props, no nothing
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    { path: '/static', component: Hello, props: { name: 'world' } }, // static values
    // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: '/attrs', component: Hello, props: { name: 'another static' } }
  ]
})
