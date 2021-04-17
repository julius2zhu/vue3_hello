<template>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>

  <button @click="update">更新</button>
</template>
<script lang="ts">
import {defineComponent, reactive, shallowReactive, ref, shallowRef} from "vue";

export default defineComponent({
  name: 'app',
  setup() {
    const m1 = reactive({a: 1, b: {c: 2}})
    const m2 = shallowReactive({a: 1, b: {c: 2}})

    const m3 = ref({a: 1, b: {c: 2}})
    const m4 = shallowRef({a: 1, b: {c: 2}})
    const update = () => {
      // m1.b.c += 1
      // m2.b.c += 1

      // m3.value.a += 1
      m4.value.a += 1
    }
    return {
      m1, m2, m3, m4,update
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
