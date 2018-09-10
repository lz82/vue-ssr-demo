import Vue from 'vue';

const app = new Vue({
  data () {
    return {
      show: true
    };
  },

  template: `<div>
              <h1>transtion demo</h1>
              <button @click="onBtnClick">click</button>
              <transition name="slide">
                <span v-show="show">hello, transition</span>
              </transition>
            </div>`,

  methods: {
    onBtnClick () {
      this.show = !this.show;
    }
  }
});

app.$mount('#app');
