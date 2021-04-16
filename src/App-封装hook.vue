<template>
  <div id="nav">
    X:{{ x }}
    Y:{{ y }}
    <hr/>

  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import useMousePosition from "@/hook/useMousePosition";
import useRequest from "@/hook/useRequest";

//地址(约束作用)
interface Address {
  id: number;
  name: string;
}

//产品
interface Product {
  id: number;
  name: string;
  brandId: number
}

export default defineComponent({
  name: 'app',
  setup() {
    const {x, y} = useMousePosition();
    /**
     * 发送网络请求就可以带约束了
     */
        // let {loading, data, msg} = useRequest<Address>('/', 'get');
    let {loading, data, msg} = useRequest<Product[]>('/', 'get');

    return {
      x, y, loading, data, msg
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
