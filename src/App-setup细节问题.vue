<template>
  <div id="nav">
    <h1>App父级组件</h1>
    <h2>{{ msg }}</h2>
    <button @click="msg+='==='">更新数据</button>
    <hr/>
    <Child :msg="msg" num="1234" @xxx="xxx"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Child from './components/Child'

export default defineComponent({
  name: 'app',
  setup() {
    const msg = ref('测试');

    function xxx(str: string) {
      msg.value += str
    }

    return {
      msg, xxx
    }
  },
  components: {
    Child
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
