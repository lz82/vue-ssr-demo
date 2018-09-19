import Vue from 'vue';

/* eslint-disable no-unused-vars */
import RenderCom from './components/render-com/render-com.vue';

import SsrInput from './components/ssr-input/index.vue';
console.log(SsrInput);
// https://github.com/vuejs/babel-plugin-transform-vue-jsx
// 当组件使用首字母大写时，不需要在components中定义，但是使用时也需要首字母大写

const app = new Vue({
  // template: `<div>
  //             <render-com :level="level">
  //               this is render component
  //             </render-com>
  //           </div>`,

  render () {
    return (
      <div>
        <RenderCom level={this.level}>
          this is render jsx
        </RenderCom>
        <ssr-input></ssr-input>
      </div>
    );
  },

  components: {
    SsrInput
  },

  data () {
    return {
      level: 3
    };
  },

  methods: {
    input (event) {
      console.log(event.target.value);
    },

    focus (event) {
      // console.log(event.target);
    },

    nativeClick (event) {
      console.log(event.target);
    }
  }
});

app.$mount('#app');
