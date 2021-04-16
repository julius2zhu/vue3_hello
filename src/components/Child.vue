<template>
  <h1>
    child组件
  </h1>
  {{ msg }}
  <button @click="updateMsg">更新msg数据</button>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Child",
  props: ['msg'],
  beforeCreate() {
    console.log('beforeCreate()')
  },
  mounted() {
    console.log('mounted')
  },
  /**
   * setup：
   * 1.setup是在beforeCreate生命周期回调之前就已经执行了，而且只执行一次
   * 2.也就意味着在setup中无法用this---->this是undefined
   * 3.就无法通过this去调用data method computed props当中数据
   *
   * 1.setup中返回值是一个对象，内部的属性和方法都是可以直接在html模板中使用
   * 2.setup中的对象内部的属性和data函数中return对象属性都可以在html中使用
   * 3.setup中的对象属性/方法和data函数中属性 methods中方法会合并
   * 4.当出现重名时候，setup中优先级高，尽量不用混合使用(也就可以放弃vue2的写法)
   *
   *
   * @return {{}}
   */
  setup(props, context) {
    console.log('setup')
    console.log(this)
    console.log(props, context)

    console.log(context.attrs.num)

    function updateMsg() {
      context.emit('xxx', '+++')
    }

    return {
      updateMsg
    }
  }
})
</script>

<style scoped>

</style>