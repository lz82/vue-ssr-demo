<template>
  <div class="container">
    about page
    {{url}}
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'AboutPage',

    data () {
      return {
        data: '',
        pic: ''
      };
    },

    mounted () {
      axios.get('https://api.github.com/users/lz82')
      .then(res => {
        console.log(res);
        this.pic = res.data.avatar_url;
        this.url = res.data.url;
        this.$nextTick(() => {
          document.dispatchEvent(new Event('render-event'));
        });
      });
      // document.dispatchEvent(new Event('render-event'));
    }
  };
</script>

<style scoped lang="less">

</style>
