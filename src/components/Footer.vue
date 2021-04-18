<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllChecked"/>
    </label>
    <span>
          <span>已完成{{ count }}</span> / 全部{{ todos.length }}
        </span>
    <button class="btn btn-danger" @click="clearChecked">清除已完成任务</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, computed} from "vue";
import {Todo} from "@/types/Todo";

export default defineComponent({
  name: 'Footer',
  setup(props) {
    /**
     * 统计选中的数量
     */
    const count = computed(() => {
      /**
       * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
       * reduce() 方法接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce() 的数组。
       * pre指上一个便利的元素的值,默认值设置为0
       * todo指的是当前遍历的对象
       */
      return props.todos.reduce((pre, todo) => pre + (todo.isChecked ? 1 : 0), 0)
    })
    /**
     * 全选/全不选计算属性操作
     */
    const isAllChecked = computed({
      get() {
        //当前完成数量大于0且完成的数量等于数组的长度
        return count.value > 0 && count.value === props.todos.length
      },
      set(val) {
        //全选和全不选
        props.checkAll(val)
      }
    })
    /**
     * 清除已完成任务
     */
    const clearChecked = () => {
      props.clearCompeted()
    }
    return {
      count, isAllChecked, clearChecked
    }
  },
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true
    },
    checkAll: {
      type: Function,
      required: true
    },
    clearCompeted: {
      type: Function,
      required: true
    }
  }
})
</script>
<style lang="stylus">
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
