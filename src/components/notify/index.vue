<template>
  <div class="container">
    <span class="content">{{content}}</span>
    <a class="btn" @click="handleClose">{{btn}}</a>
  </div>
</template>

<script>
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

    methods: {
      handleClose (e) {
        e.preventDefault();
        this.$emit('close');
      }
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
  // position: fixed;
  // right: 20px;
  // bottom: 15px;
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
