// 扩展notify组件
import Notify from './index.vue';

export default {
  // https://cn.vuejs.org/v2/api/#extends
  extends: Notify,

  data () {
    return {
      timer: null,
      verticalOffset: 0,
      height: 0,
      autoClose: 3000
    };
  },

  mounted () {
    this.createTime();
  },

  beforeDestroy () {
    this.clearTime();
  },

  methods: {
    createTime () {
      if (this.autoClose) {
       this.timer = setTimeout(() => {
        this.isShow = false;
      }, this.autoClose);
     }
   },

   clearTime () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  },

  afterEnter () {
    this.height = this.$el.offsetHeight;
  }
},

computed: {
  style () {
    return {
      position: 'fixed',
      right: '20px',
      bottom: `${this.verticalOffset}px`
    };
  }
}
};
