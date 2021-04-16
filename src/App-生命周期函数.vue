<template>
  <div id="nav">
    <button @click="isShow=!isShow">isShow</button>
    <Child1 v-if="isShow"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import Child1 from "@/components/Child1.vue";

export default defineComponent({
  name: 'app',
  setup() {
    let isShow = ref(true)
    return {
      isShow
    }
  },
  components: {
    Child1
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
