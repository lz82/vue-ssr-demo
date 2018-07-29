<template>
	<div id="app">
		this is app!
	</div>
</template>

<script>
  import _ from 'lodash';
  export default {
    name: 'app',

    mounted () {
      console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
      console.log(_.join(['a', 'b', 'c']));
    }
  };
</script>

<style></style>
