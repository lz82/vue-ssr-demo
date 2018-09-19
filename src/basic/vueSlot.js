import Vue from 'vue';

import SlotComp from './components/slot-com/slot-com.vue';

const app = new Vue({
  components: {SlotComp},

  data () {
    return {
      listData: [{id: 1, name: 'xiubao', age: 18, sex: 'boy'}, {id: 2, name: 'xiubao', age: 16, sex: 'girl'}]
    };
  },

  template: `
            <div>
              <slot-comp title="hello slot" :list-data="listData">
                <template slot-scope="{scope}">
                  <button v-show="scope.age > 16" @click="onBtnClick(scope)">click</button>
                </template>
              </slot-comp>
            </div>
            `,

  methods: {
    onBtnClick (row) {
      alert(JSON.stringify(row));
    }
  }
});

app.$mount('#app');
