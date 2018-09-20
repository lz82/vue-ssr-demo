<template>
	<div id="app">
    this is app.
    <notify :content="content" :styleList="style" :isShow="isShow" @close="onCloseNotify"></notify>
  </div>
</template>

<script>
  import Notify from './components/notify/index.vue';
  export default {
    name: 'app',

    components: {
      Notify
    },

    data () {
      return {
        style: {
          position: 'fixed',
          bottom: '20px',
          right: '20px'
        },
        content: 'this is a notify...',
        isShow: true
      };
    },

    mounted () {
    },

    methods: {
      onCloseNotify () {
        this.isShow = false;
      }
    }
  };
</script>

<style></style>
