<template>
   <label>
      {{ label }}:
      <input
        v-bind="$attrs"
        :value="modelVal"
        v-on="inputListener"
      >
      <br>
      <br>
      <br>
      <input type="text" v-model="localSyncVal">
      <br>
      <input type="text" v-model="obj.name">
      <br>
      <input type="number" v-model.number="obj.age">
      <br>
      <input type="radio" name="sex" value="man" v-model="obj.sex">男</input>
      <input type="radio" name="sex" value="woman" v-model="obj.sex">女</input>

      <p>https://cn.vuejs.org/v2/guide/components-custom-events.html</p>
    </label>
</template>

<script>
  export default {
    name: 'ssr-input',

    model: {
      prop: 'modelVal',
      event: 'modelChange'
    },

    props: {
      label: '',
      modelVal: '',
      syncData: '',
      test: '',
      obj: {}
    },

    data () {
      return {
        localSyncVal: ''
      };
    },

    mounted () {
    },

    methods: {
      // valChange (event) {
      //   this.$emit('modelChange', event.target.value);
      // }
    },

    computed: {
      inputListener () {
        let vm = this;
        return Object.assign({}, this.$listeners, {
          input (event) {
            vm.$emit('modelChange', event.target.value);
          }
        });
      }
    },

    watch: {
      localSyncVal (newVal) {
        this.$emit('update:syncData', newVal);
      },

      obj (newVal) {
        this.$emit('update:obj', newVal);
      }
    }
  };
</script>

<style></style>
