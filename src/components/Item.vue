<template>
  <!--@mouseenter 鼠标移进来事件 @mouseleave 鼠标移走事件-->
  <li @mouseenter="mouseHandler(true)" @mouseleave="mouseHandler(false)"
      :style="{backgroundColor:bgColor,color:myColor}">
    <label>
      <input type="checkbox" v-model="isCompleted"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-if="isShowBtn" @click="delTodo">删除</button>
  </li>
</template>
<script lang="ts">
import {defineComponent, ref, computed} from "vue";
import {Todo} from "@/types/Todo";

export default defineComponent({
  name: 'Item',
  setup(props) {
    //背景颜色
    const bgColor = ref('white')
    //字体颜色
    const myColor = ref('black')
    //是否显示按钮
    const isShowBtn = ref(false)
    /**
     * 鼠标事件
     * @param type true鼠标移入false鼠标离开
     */
    const mouseHandler = (type: boolean) => {
      if (type) {
        bgColor.value = 'pink'
        myColor.value = 'red'
        isShowBtn.value = true
      } else {
        bgColor.value = 'white'
        myColor.value = 'black'
        isShowBtn.value = false
      }
    }
    /**
     * 删除一条数据
     */
    const delTodo = () => {
      props.deleteTodo(props.index)
    }
    /**
     * 计算属性isCompleted
     */
    const isCompleted = computed({
      get() {
        return props.todo.isChecked
      },
      set(val) {
        props.updateTodo(props.todo, val)
      }
    })
    return {
      mouseHandler, bgColor, myColor, isShowBtn,
      delTodo, isCompleted
    }
  },
  props: {
    todo: {
      type: Object as () => Todo,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    },
    updateTodo: {
      type: Function,
      required: true
    }
  }
})
</script>
<style lang="stylus">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
