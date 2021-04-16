<template>
  <div id="nav">
    <h2>setup和ref的使用</h2>
    name: {{ user.name }}
    age: {{ user.age }}
    <button @click="updateUser">update</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from "vue";

export default defineComponent({
  name: 'app',
  setup() {
    const user = reactive({
      name: '小朱',
      age: 24
    })

    function updateUser() {
      user.name = '==小朱'
      user.age = 25
    }

    return {
      user,
      updateUser
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
