import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const HomePage = () => import('pages/homepage');

const DetailPage = () => import('pages/homepage/detail');

const AboutPage = () => import('pages/about');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage,
    children: [
      {
        path: 'edit/:id',
        component: DetailPage
      },
      {
        path: 'preview/:id?',
        component: AboutPage
      }
    ]
  },
  {
    path: '/about',
    component: AboutPage
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
