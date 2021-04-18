<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos " :key="todo.id" :todo="todo"
          :deleteTodo="deleteTodo" :updateTodo="updateTodo"
          :index="index"/>
  </ul>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent} from "vue";
import {Todo} from "@/types/Todo";

const Item = defineAsyncComponent(() => import('./Item.vue'))
export default defineComponent({
  name: 'List',
  props: {
    todos: {
      //声明数据类型并且强制转换成Todo类型
      //在对象中只有以函数的方式返回类型才会被允许的
      type: Array as () => Todo[]
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    }
  },
  components: {
    Item
  }
})
</script>
<style lang="stylus">
/*main*/
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
