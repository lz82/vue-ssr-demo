import NotifyComponent from './index.vue';
import Notify from './function.js';

export default {
  install (Vue) {
    Vue.component(NotifyComponent.name, NotifyComponent);
    Object.defineProperty(Vue.prototype, '$notify', { value: Notify });
  }
};
