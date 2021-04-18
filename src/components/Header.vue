<template>
  <div class="todo-header">
    <input type="text" v-model="val" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue";
import {Todo} from "@/types/Todo";

export default defineComponent({
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    let val = ref('')
    const add = () => {
      const text = val.value.trim()
      if (!text) {
        return
      }
      const todo: Todo = {
        id: Date.now(),
        title: text,
        isChecked: false
      }
      //调用添加方法
      props.addTodo(todo)
      //清空文本框
      val.value = ''
    }
    return {
      val,
      add
    }
  }
})
</script>
<style lang="stylus">
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
