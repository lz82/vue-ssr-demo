<template>
	<div id="app">
    this is app.
    <!-- <notify :content="content" :styleList="style" :isShow="isShow" @close="onCloseNotify"></notify> -->
    <button @click="notify">notify</button>
  </div>
</template>

<script>
  // import Notify from './components/notify/index.vue';
  export default {
    name: 'app',

    data () {
      return {
      };
    },

    mounted () {
    },

    methods: {
      notify () {
        this.$notify({
          content: 'this is service call.'
        });
      }
    }
  };
</script>

<style></style>
