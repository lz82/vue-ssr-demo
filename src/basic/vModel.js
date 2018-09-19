// https://cn.vuejs.org/v2/guide/components-custom-events.html
import Vue from 'vue';
import SsrInput from './components/ssr-input/index.vue';

const app = new Vue({
  components: {SsrInput},

  template: `<span><ssr-input :obj.syc="obj" :syncData.sync="testSyncVal" v-bind:syncval="testSyncVal" label="v-model" v-model="vModelVal" @focus="onFocus" class="ssr-input" style="width: 200px;" data="{name: 'lz'}"></ssr-input>{{vModelVal}}</span>`,

  data () {
    return {
      vModelVal: '',
      testSyncVal: 'haha',
      obj: {
        name: 'lz',
        age: 18,
        sex: 'man'
      }
    };
  },

  mounted () {
    this.$nextTick(() => {
    });
  },

  methods: {
    onFocus () {
      console.log('on focus...');
    }
  }
});

app.$mount('#app');
