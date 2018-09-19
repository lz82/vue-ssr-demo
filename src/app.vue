<template>
	<div id="app">
    this is app.
    <notify content="test"></notify>
  </div>
</template>

<script>
  // import _ from 'lodash';
  import Notify from './components/notify/index.vue';
  export default {
    name: 'app',

    components: {
      Notify
    },

    data () {
      return {
        list: []
      };
    },

    mounted () {
      // console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
      // console.log(_.join(['a', 'b', 'c']));
    },

    methods: {
    }
  };
</script>

<style></style>
