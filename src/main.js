import Vue from 'vue';
import App from './app.vue';

import router from './router';

import './assets/style/less/main.less';

/* eslint-disable no-new */
// const app = new Vue({
//   template: '<app/>',
//   components: {App}
// });

// template在实际编译的过程中，也会转换为render函数
// render中的第一个参数其实就是createHtmlHandler
const app = new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'));
  }
});

app.$mount('#app');
