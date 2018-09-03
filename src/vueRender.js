import Vue from 'vue';

import RenderCom from './components/render-com/render-com.vue';

const app = new Vue({
  template: `<div>
              <render-com :level="level">
                this is render component
              </render-com>
            </div>`,

  components: {
    RenderCom
  },

  data () {
    return {
      level: 2
    };
  }
});

app.$mount('#app');
