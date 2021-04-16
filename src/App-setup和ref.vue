<template>
  <div id="nav">
    <h2>setup和ref的使用</h2>
    {{ num }}
    <button @click="updateCount">updateCount</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'app',
  // data() {
  //   return {
  //     num: 0
  //   }
  // },
  // methods: {
  //   updateCount() {
  //     this.num++
  //   }
  // },
  setup() {
    //1.使用ref定义一个基本类型的响应式数据
    //2.返回的是一个对象,而不是一个普通的变量
    let num = ref(0);

    function updateCount() {
      //3.既然是对象，就不能进行++操作，需要调用对象的value属性获取到值
      num.value++
    }

    return {
      //此时作为普通的属性
      num,
      //作为一个函数
      updateCount
    }
  }
})
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
