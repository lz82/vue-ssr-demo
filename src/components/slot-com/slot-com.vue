<template>
  <div class="container">
    <label>{{title}}</label>
    <ul>
      <li class="header">
        <span class="col">op</span>
        <span class="col">id</span>
        <span class="col">name</span>
        <span class="col">sex</span>
        <span class="col">age</span>
      </li>
      <li v-for="item in listData">
        <span class="col">
          <slot :scope="item">
          </slot>
        </span>
        <span class="col">{{item.id}}</span>
        <span class="col">{{item.name}}</span>
        <span class="col">{{item.sex}}</span>
        <span class="col">{{item.age}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SlotComp',

    props: {
     listData: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      title: 'scpoe demo'
    };
  }
};
</script>

<style lang="less">
ul {
  list-style: none;
  border: solid 1px #eee;
  .header {
    border-bottom: solid 1px #eee;
  }
}
.col {
  width: 50px;
  text-align: center;
  display: inline-block;
}
</style>
