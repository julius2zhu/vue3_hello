<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer :todos="todos" :checkAll="checkAll" :clearCompeted="clearCompeted"/>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent, reactive, toRefs, watch, onMounted} from "vue";
//引入异步组件,后面必须携带.vue，否则找不到组件，由于vue3升级使用typescript造成,期待后续修复
const Header = defineAsyncComponent(() => import('./components/Header.vue'))
const List = defineAsyncComponent(() => import('./components/List.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
import {Todo} from './types/Todo'
import {saveTodos, getTodos} from "@/utils/localStorage";

export default defineComponent({
  name: 'app',
  setup() {
    /**
     * 定义数据：
     * {todos: Todo[]} 约束todos是一个Todo类型的数组,里面每一项是一个Todo(遵循Todo接口规范)
     */
    const list = reactive<{ todos: Todo[] }>({
          todos: [
            // {id: 1, title: 'aaa', isChecked: false},
            // {id: 2, title: 'bbb', isChecked: true},
            // {id: 3, title: 'ccc', isChecked: false},
            //下面的代码会直接报错,因为在接口规范中没有age这个属性
            // {id: 3, title: 'ccc', isChecked: false,age:22}
          ]
        }
    )
    onMounted(() => {
      setTimeout(() => {
        list.todos = getTodos()
      }, 1000)
    })
    /**
     * 添加数据
     * @param todo 添加的todo
     */
    const addTodo = (todo: Todo) => {
      list.todos.unshift(todo)
    }
    /**
     * 删除数据,实际开发中是根据ID删除，此处仅根据下标删除
     * @param index 删除的下标
     */
    const deleteTodo = (index: number) => {
      list.todos.splice(index, 1)
    }
    /**
     * 更改todo的选中状态
     * @param todo
     * @param isChecked
     */
    const updateTodo = (todo: Todo, isChecked: boolean) => {
      todo.isChecked = isChecked
    }
    /**
     * 全选或者全不选操作
     * @param isChecked
     */
    const checkAll = (isChecked: boolean) => {
      //遍历数据更新状态
      list.todos.forEach(todo => {
        todo.isChecked = isChecked
      })
    }
    /**
     * 清空已完成状态
     */
    const clearCompeted = () => {
      //清空已完成的状态
      /**
       * filter(): 返回符合条件的子数组
       * 此处要求保留所有isChecked为false的数据(也就是未完成/未被选中)
       * todo.isChecked === false 或者!todo.isChecked 均可
       */
      list.todos = list.todos.filter(todo => !todo.isChecked)
    }
    /**
     * 监视todos改变状态
     */
    watch(()=>list.todos, value => {
          saveTodos(value)
        },
        {deep: true})
    return {
      //转换成响应数据并且解构
      ...toRefs(list),
      addTodo, deleteTodo, updateTodo, checkAll, clearCompeted
    }
  },
  components: {
    Header, List, Footer
  }
})
</script>
<style lang="stylus">
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
