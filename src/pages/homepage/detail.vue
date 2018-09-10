<template>
  <div class="container">
    <img :src="pic" alt="">
    url:{{url}}
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'DetailPage',

    data () {
      return {
        pic: '',
        url: ''
      };
    },

    mounted () {
      this.$nextTick(() => {
        axios.get('https://api.github.com/users/lz82')
        .then(res => {
          console.log(res);
          this.pic = res.data.avatar_url;
          this.url = res.data.url;
        });
      });
    }

  };
</script>

<style scoped lang="less">

</style>
