<template>
  <div :style="{color:color}">
    son组件
  </div>
</template>

<script>
import {defineComponent, inject} from "vue";

export default defineComponent({
  name: "ChildSon",
  setup() {
    //依赖注入
    const color = inject('color')
    return {color}
  }
})
</script>

<style scoped>

</style>