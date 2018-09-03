import Vue from 'vue';

import FirstMixin from './mixins/FirstMixin.js';

const app = new Vue({
  template: `<div>
              <h1>mixin demo</h1>
              <span>pageIndex:{{queryModel.pageIndex}}</span>
              <span>pageSize:{{queryModel.pageSize}}</span>
              <span>activityCode:{{queryModel.activityCode}}</span>
              <br />
              activityCode: <input v-model="queryModel.activityCode"></input>
              <br />
              pageIndex: <input v-model="queryModel.pageIndex"></input>
              <br />
            </div>`,

  mixins: [FirstMixin],

  data () {
    return {
      queryModel: {
        activityCode: '',
        pageIndex: 0
      }
    };
  },

  created () {
    console.log('[instance] on created...');
  }
});

app.$mount('#app');
