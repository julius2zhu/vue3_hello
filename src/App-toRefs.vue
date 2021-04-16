<template>
  <div id="nav">
    {{ foo2 }}
    {{ bar2 }}
    <hr/>
    <input type="text" ref="inputRef">
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs, ref, onMounted} from "vue";

export default defineComponent({
  name: 'app',
  setup() {
    function useReatureX() {
      const state = reactive({
        foo2: 'a',
        bar2: 'b',
      })

      setInterval(() => {
        state.foo2 += '++'
        state.bar2 += '++'
      }, 1000);

      return toRefs(state)
    }
    const inputRef = ref<HTMLElement | null>(null)
    /**
     * 页面挂载之后回调函数
     */
    onMounted(() => {
      inputRef.value&&inputRef.value.focus()
      console.log('run')
    })
    const {foo2, bar2} = useReatureX()

    return {
      foo2, bar2, inputRef
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
