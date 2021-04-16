<template>
  <div id="nav">
    <h2>计算属性和监视</h2>
    <fieldset>
      <legend>姓名操作</legend>
      姓氏：<input v-model="user.firstName"/><br/>
      名字：<input v-model="user.lastName"/><br/>
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名(单向)<input v-model="fullName1"/><br/>
      姓名(双向)<input v-model="fullName2"/><br/>
      姓名(监视)<input v-model="fullName3"/><br/>
    </fieldset>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, computed, watch, watchEffect, ref} from "vue";

export default defineComponent({
  name: 'app',
  setup() {
    /**
     * 计算属性
     */
    const user = reactive({firstName: 'xiao', lastName: 'zhu'})
    //computed只传递一个回调函数表示getter方法
    const fullName1 = computed(() => {
      return user.firstName + '_' + user.lastName
    })
    //同时提供get和set方法
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      //val为传递新值
      set(val: string) {
        let split = val.split('_');
        user.firstName = split[0]
        user.lastName = split[1]
      }
    })
    //监视
    let fullName3 = ref('')
    watch(user, ({firstName, lastName}) => {
          fullName3.value = firstName + '_' + lastName
        },
        //传递一些其他的选项immediate立即执行一次 deep深度监视
        {immediate: true, deep: true})
    /**
     * 该种方法显示比较友好一些,如果需要双向的数据改变需要结合watch使用
     */
    watchEffect(() => {
      const names = fullName3.value.split('_')
      user.firstName = names[0]
      user.lastName = names[1]
    })
    return {
      user, fullName1, fullName2, fullName3
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
