import Notify from '.index.vue';

export default {
  extend: Notify,

  data () {
    return {
      verticalOffset: 0
    };
  },

  computed: {
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}`
      }
    }
  }
};
