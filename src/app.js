import Vue from 'vue';

import App from './app.vue';

const createApp = (ctx) => {
  const app = new Vue({
    data () {
      return {
        url: ctx.request.url
      };
    },

    render: (h) => h(App)
  });

  return {app};
};

export default createApp;
