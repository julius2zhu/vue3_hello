<template>
  <div>
    aaaa
  </div>
</template>

<script>
import {defineComponent, onMounted} from "vue";

export default defineComponent({
  name: "Child1",
  setup() {
    onMounted(() => {
      console.log('vue3 onMounted')
    })
  },
  /**
   * vue2钩子函数
   */
  //组件创建之前调用
  beforeCreate() {
    console.log('vue2 beforeCreate()')
  },
  //组件创建之后调用
  created() {
    console.log('vue2 created()')
  },
  //组件挂在之前调用
  beforeMount() {
    console.log('vue2 beforeMount()')
  },
  //组件挂载之后调用(例如div button等组件都显示渲染出来了)
  mounted() {
    console.log('vue2 mounted()')
  },
  //数据更新之前被调用(例如双向绑定的数据发生了改变会触发)
  beforeUpdate() {
    console.log('vue2 beforeUpdate()')
  },
  //数据更新之后回调
  updated() {
    console.log('vue2 updated()')
  },
  /**
   * beforeDestroy() destroyed() 在vue3版本中已经改名了，不能再使用
   */
  //组件将要被销毁之前回调
  onBeforeUnmount() {
    console.log('vue2 onBeforeUnmount()')
  },
  //组件销毁之后回调
  onUnmounted() {
    console.log('vue2 onUnmounted()')
  }
})
</script>

<style scoped>

</style>