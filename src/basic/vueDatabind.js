import Vue from 'vue';

const app = new Vue({
  template: `
    <div>
    <div :class="{isActive : isActive}">{{vueData}}</div>
    <span :class="[isActive ? 'active': '']"></span>
    <span :class="[{isActivie: isActive}, 'main']" ></span>
    <span :style="[style1, style2]"></span>
    <input v-model.trim="firstName"/>
    <input v-model.lazy="lastName"/>
    <input v-model="vueData" />
    <br />
    computed: <span>{{fullName}}</span>
    <br />
    method: <span>{{getFullName()}}</span>
    <br />
    <input v-model.number="person.age" />
    </div>
  `,

  data () {
    return {
      vueData: 'this is vue data',
      isActive: true,
      style1: {
        color: 'red',
        borderRadius: '50%',
        appearance: 'none' // 自动加webkit
      },
      style2: {
        fontSize: '16px'
      },
      firstName: '',
      lastName: '',
      person: {
        age: 18
      }
    };
  },

  computed: {
    fullName () {
      // 修改input vueData的值时可以发现，computed中的console.log并不会触发
      // 也就是说在其他值变化时，不会引起重新计算
      // 官方说法： 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。
      console.log('emmit computed');
      return `${this.firstName} ${this.lastName}`;
    },
    allName: {
      get () {
        return `${this.firstName} ${this.lastName}`;
      },
      set (name) {
        const arr = name.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
      }
    }
  },

  methods: {
    getFullName () {
      console.log('emmit methods: getFullName');
      return `${this.firstName} ${this.lastName}`;
    }
  },

  watch: {
    firstName: {
      handler (newVal, oldVal) {
        console.log(newVal);
      }
    },
    person: {
      handler (newVal) {
        console.log(newVal);
      },
      deep: true
    },
    'person.age' (newVal) {
      console.log(newVal);
    }
  }
});

app.$mount('#app');
