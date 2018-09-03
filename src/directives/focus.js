const focus = {
  inserted (el, binding, vnode) {
    el.focus();
  },

  update (el, binding, vnode) {
    if (binding.value) {
      el.focus();
    }
    console.log(el, binding, vnode);
  },

  componentUpdated (el, binding, vnode) {
    console.log(el, binding, vnode);
  }
};

export default focus;
