<script>
  export default {
    render (h) {
      return h(`h${this.level}`, {
        class: 'aaa',
        style: 'color: red',
        attrs: {
          id: 1
        }
      }, this.$slots.default);
    },

    props: {
      level: {
        type: Number,
        required: true
      }
    }
  };
</script>
