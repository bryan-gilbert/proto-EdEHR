import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const Dashboard = () => import("./components/Dashboard.vue");
const Hello = () => import("./components/Hello.vue");
const Foo = () => import("./components/Foo.vue");
const Bar = () => import(/* webpackChunkName: "bar" */ "./components/Bar.vue");
const Baz = () => import(/* webpackChunkName: "baz" */ "./components/Baz.vue");
const About = () => import("./views/About.vue");

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/foo", component: Foo },
    {
      path: "/bar",
      component: Bar,
      children: [{ path: "baz", component: Baz }]
    },

    {
      path: "/about",
      name: "about",
      component: About
    },
    { path: "/outside/:id", component: Dashboard, props: true }, // Pass route.params to props
    { path: "/hello", component: Hello }, // No props, no nothing
    { path: "/hello/:name", component: Hello, props: true }, // Pass route.params to props
    { path: "/static", component: Hello, props: { name: "world" } }, // static values
    // { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: "/attrs", component: Hello, props: { name: "another static" } }
  ]
});
