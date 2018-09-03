export default {
  created () {
    console.log('[mixin]on created...');
  },

  data () {
    return {
      queryModel: {
        pageIndex: 1,
        pageSize: 20
      }
    };
  }
};
