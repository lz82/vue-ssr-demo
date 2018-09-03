import Vue from 'vue';

import focus from './directives/focus.js';

const app = new Vue({
  template: `<div>
              <h1>directive demo</h1>
              <input v-show="isShow" v-focus="true"></input>
              <button @click="onClick">click</button>
            </div>`,

  directives: {
    focus
  },

  data () {
    return {
      isShow: true
    };
  },

  methods: {
    onClick () {
      this.isShow = !this.isShow;
    }
  }
});

app.$mount('#app');
