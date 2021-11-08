  <!-- 5.suspense 组件-->
  <!-- 作用：用于确保组件中的setup函数调用和模板显然之间的执行顺序 -->
  <!-- 例子：当组件中的setup被写成异步函数的形式，代码执行的顺序就变成了先渲染模板后执行setup了 所以需要suspense -->
  
<template>
<div>
 <pre>{{data}}</pre>
</div>
 
</template>

<script>
import axios from "axios"
export default {
  name:'Posts',
  async setup(){
    let response=await axios.get( "https://jsonplaceholder.typicode.com/posts");
    
   return { data: response.data };
  }
}
</script>

<style>

</style>