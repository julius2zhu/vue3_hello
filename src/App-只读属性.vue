<template>
  <h2>readonly和shallowReadonly</h2>

</template>
<script lang="ts">
import {defineComponent, reactive, readonly, shallowReadonly} from "vue";

export default defineComponent({
  name: 'app',
  setup() {
    const state = reactive({
      name: '小朱',
      car: {
        name: 'bmw',
        color: 'red'
      }
    })
    //深度只读
    const state2 = readonly(state)
    //浅只读
    const state3 = shallowReadonly(state)
    const update = () => {
      //代码会出错,提示该属性是只读的
      //state2.name += '=='
      //代码会出错,提示该属性是只读的
      // state2.car.name+='==='
      //代码会出错,提示该属性是只读的
      // state3.name += '=='
      //下面这行代码可以正确执行，shallowReadonly浅只读
      state3.car.name += '=='
    }
    return {}
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
