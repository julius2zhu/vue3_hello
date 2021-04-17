<template>
  <h1>provide和inject</h1>
  <h2>color:{{ color }}</h2>
  <button @click="color='red'">red</button>
  <button @click="color='yellow'">yellow</button>
  <button @click="color='green'">green</button>
  <hr/>
  <Child2/>
</template>
<script lang="ts">
import {defineComponent, ref, provide} from "vue";
import Child2 from "@/components/Child2.vue";

export default defineComponent({
  name: 'app',
  setup() {
    const color = ref('red')
    provide('color', color)
    return {
      color
    }
  },
  components: {
    Child2
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
