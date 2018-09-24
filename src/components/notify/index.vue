<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="container" :style="style" v-show="isShow" @mouseenter="clearTime" @mouseleave="createTime">
      <span class="content">{{content}}</span>
      <a class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
  // 这里只提供notify组件最基本的功能，其他功能通过extends的方式扩展
  export default {
    name: 'Notify',

    props: {
      content: {
        type: String,
        required: true
      },

      btn: {
        type: String,
        default: 'close'
      }
    },

    data () {
      return {
        isShow: false
      };
    },

    computed: {
      style () {
        return {};
      }
    },

    methods: {
      handleClose (e) {
        e.preventDefault();
        this.$emit('close');
      },

      afterLeave () {
        this.$emit('closed');
      },

      // 下面这3个方法，都在子类中具体实现
      afterEnter () {
      },

      clearTime () {},

      createTIme () {}
    }
  };
</script>

<style scoped lang="less">
.container {
  display: inline-flex;
  background-color: #303030;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding: 20px;
  min-width: 280px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  flex-wrap: wrap;
  transition: all .3s;
  .content {
    padding: 0;
  }

  .btn {
    color: #ff4081;
    padding-left: 24px;
    margin-left: auto;
    cursor: pointer;
  }
}
</style>
