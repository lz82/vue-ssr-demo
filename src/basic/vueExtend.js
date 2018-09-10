import Vue from 'vue';
/* eslint-disable */
const componentBase = {
  name: 'ComponentBase',

  render (h) {
    return h('h3', {ref: 'title'}, this.title);
  },

  mounted () {
    this.$nextTick()
    .then(() => {
      console.log('title ref', this.$refs.title);
    });
  },

  // template: `<h3>{{title}},{{p1}}</h3>`,

  props: ['p1'],

  data () {
    return {
      title: 'Component Base Title'
    };
  }
};

// /* eslint-disable no-unused-vars */
// const myComponent = Vue.extend(componentBase, {
//   name: 'MyComponent',
//   render: h => {
//     return h('div', 'my component');
//   }
// });

const ComponentVue = Vue.extend(componentBase);

const app = new ComponentVue({
  // template: '<div>this is app {{title}}!{{p1}}</div>',

  propsData: {
    p1: 'this is p1 value'
  },

  data () {
    return {
      title: 'instance'
    };
  }
});

app.$mount('#app');
