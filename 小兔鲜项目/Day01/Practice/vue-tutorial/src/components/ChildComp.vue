<template>
  <div>
子组件：{{msg}}
<hr>
{{childMsg}}
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props:["msg"],
  setup(props) {
      // console.log(props); //{msg: 'a message from father'}
  // 当父组件更新props时 setup函数是不会重新执行的  但是直接在模板中使用没有这个问题
  // 解决这个问题 需要在setup函数中使用computed或者watch来响应props的变化
  const childMsg=computed(()=>props.msg+'😀')
   return{
    childMsg
  }
  }
 
}
</script>

<style>

</style>