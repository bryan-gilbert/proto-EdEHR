import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const PageHome   = () => import(/* webpack-chunk-name: "PageHome"   */ `./components/page/PageHome.vue`);
const EhrPagePoc = () => import(/* webpack-chunk-name: "EhrPagePoc" */ `./components/page/EhrPagePoc.vue`);
const PageArticle = () => import(/* webpack-chunk-name: "PageArticle" */ `./components/page/PageArticle.vue`);
const PageList = () => import(/* webpack-chunk-name: "PageList" */ `./components/page/PageList.vue`);
const PageBlog = () => import(/* webpack-chunk-name: "PageBlog" */ `./components/page/PageBlog.vue`);
const PageDev = () => import(/* webpack-chunk-name: "PageDev" */ `./components/page/PageDev.vue`);

export default new VueRouter({
  routes: [
    {
      name: `home`,
      path: `/`,
      component: EhrPagePoc,
    },
    {
      name: `dashboard`,
      path: `/dashboard`,
      component: PageDev,
    },
    {
      name: `article`,
      path: `/article`,
      component: PageArticle,
    },
		{
			name: `account`,
			path: `/account`,
			component: PageDev,
		},
    {
      name: `dev`,
      path: `/dev`,
      component: PageDev,
    },
		{
			name: `help`,
			path: `/help`,
			component: PageBlog,
		},
    {
      name: `list`,
      path: `/list`,
      component: PageList,
    },
  ],
  mode: `history`,
});
