import Vue from 'vue';

import Router from 'vue-router';

const About = () => import('components/about');

const Home = () => import('components/home');

Vue.use(Router);

export default function () {
  return new Router({
    mode: 'history',

    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  });
};
