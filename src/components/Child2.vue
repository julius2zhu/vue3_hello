<template>
  <div>
    child组件
    <child-son/>
  </div>
</template>

<script>
import ChildSon from "./ChildSon";

export default {
  name: "Child2",
  components: {
    ChildSon
  }
}
</script>

<style scoped>

</style>