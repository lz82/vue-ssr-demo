<template>
  <div class="container">
    <img :src="pic" alt="" v-show="pic">
    url:{{url}}
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HomePage',

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
          this.$nextTick(() => {
            document.dispatchEvent(new Event('render-event'));
          });
          // document.dispatchEvent(new Event('render-event'));
        });
      });
    }
  };
</script>

<style scoped lang="less">

</style>
