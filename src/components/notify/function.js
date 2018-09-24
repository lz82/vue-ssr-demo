import Vue from 'vue';
import Notify from './func-notify';

// 定义Notify组件的构造函数
// https://cn.vuejs.org/v2/api/#Vue-extend
const NotifyConstructor = Vue.extend(Notify);

// 记录所有需要显示的notify组件
const intances = [];
// 组件Id
let seed = 1;

const notifyIntance = option => {
  const {
    autoClose,
    content,
    ...rest
  } = option;
  // 实例化一个组件
  // prop通过propsData传值，但是data依然必须是一个函数
  const intance = new NotifyConstructor({
    propsData: {
      content: `this is ${seed} notify`,
      rest
    },
    data () {
      return {
        autoClose: autoClose || 3000
      };
    }
  });
  // 设置唯一标识
  intance.id = `notification-${seed++}`;
  // https://cn.vuejs.org/v2/api/#vm-mount
  // 如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
  // 如果没有提供 elementOrSelector 参数，模板将被渲染为文档之外的的元素，并且你必须使用原生 DOM API 把它插入文档中。
  intance.vm = intance.$mount();
  // 手动挂载
  document.body.appendChild(intance.vm.$el);
  intance.vm.isShow = true;
  intance.verticalOffset = 32;
  // 计算bottom的高度
  // intance.verticalOffset = intances.length * (intance.vm.$el.offsetHeight + 16) + 32;
  intances.forEach(item => {
    console.log(item.vm.height);
    intance.verticalOffset += item.vm.$el.offsetHeight + 16;
  });
  // 监听到close事件时，隐藏控件
  intance.vm.$on('close', () => {
    intance.vm.isShow = false;
  });

  // 监听到关闭完成时
  // 1. 将关闭的组件之上的组件向下移动一个组件的位置
  // 2. 将关闭的组件从dom中移除
  // 3. 将组件destroy
  intance.vm.$on('closed', (e) => {
    let delIndex = intances.findIndex(i => i.id === intance.id);
    intances.splice(delIndex, 1);
    if (delIndex > -1) {
      while (delIndex <= intances.length - 1) {
        intances[delIndex].verticalOffset -= (intances[delIndex].vm.$el.offsetHeight + 16);
        delIndex++;
      }
    }
    document.body.removeChild(intance.vm.$el);
    intance.vm.$destroy();
  });

  intances.push(intance);
  return intance;
};

export default notifyIntance;
