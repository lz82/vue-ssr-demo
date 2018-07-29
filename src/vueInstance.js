import Vue from 'vue';

const app = new Vue({
  template: `<div ref="div">{{vueData}}
    this is model: {{model.title}}
    <!-- rootData: {{rootData}} -->
  </div>`,

  data () {
    return {
      vueData: 'this is from data',
      model: {}
    };
  }
});

app.$mount('#app');

app.vueData = 'now i change it';

app.vueData = 1;

console.log('app.$data:', app.$data);
console.log('app.$props:', app.$props);
console.log('app.$options:', app.$options);

console.log('app.$options.data.vueData', app.$options.data.vueData); // 获取不到

app.$data.vueData += 100;
console.log('app.$data.vueData', app.$data.vueData);

console.log('app:', app);

// setInterval(() => {
//   app.vueData += 1;
// }, 1000);

console.log('app.$root', app.$root, app.$root === app); // app.$root 就是 app

console.log('app.$children', app.$children);

console.log('app.$slots', app.$slots);

console.log('app.$scopedSlots', app.$scopedSlots);

console.log('app.$refs', app.$refs);

// 写在外面的$watch和写在options中的watch功能一致，唯一的区别在于写在这里不会在组件销毁的时候自动注销。
// 需要手动调用unWatch方法
// unwatch方法就是创建watch方法时的返回结果。
const unWatchVueData = app.$watch('vueData', (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

setTimeout(() => {
  unWatchVueData();
}, 3000);

app.$on('touch', (...args) => {
  console.log('touch', ...args);
});

app.$once('oneTouch', (...args) => {
  console.log('onetouch', ...args);
});

app.$emit('touch', 1, 2, 3);

setInterval(() => {
  app.$emit('oneTouch');
  // app.$emit('touch');
}, 1000);

// app.model.title = 1;
let temp = 1;
setInterval(() => {
  // app.model.title += 1;
  // app.$forceUpdate(); // 由于model.title不是响应式的，因此不会自动更新，可以但是不建议使用$forceUpdate()
  app.$set(app.model, 'title', temp++); // 推荐使用$set
  // https://cn.vuejs.org/v2/guide/reactivity.html#%E6%A3%80%E6%B5%8B%E5%8F%98%E5%8C%96%E7%9A%84%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9
  // 如文档所示，不建议在根节点添加数据。
}, 100000);

setTimeout(() => {
  app.$delete(app.model, 'title'); // 和$set对应
}, 5000);

// app.rootData = 1; // 这样用会报错。

// https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97
// 异步更新队列
// Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。
// 例如，当你设置 vm.someData = 'new value' ，该组件不会立即重新渲染。当刷新队列时，组件会在事件循环队列清空时的下一个“tick”更新。多数情况我们不需要关心这个过程，但是如果你想在 DOM 状态更新后做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。
app.vueData = 2;
app.vueData = 3;
app.vueData = 4;
app.vueData = 5;
app.vueData = 6;
app.vueData = 7;

app.$nextTick()
.then(() => {
  app.vueData = 8;
});
