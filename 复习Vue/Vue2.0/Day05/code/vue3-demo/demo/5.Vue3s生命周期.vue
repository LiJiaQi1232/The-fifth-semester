<template>
  <div class="container">
    container
  </div>
</template>
<script>
// **总结：** 组合API的生命周期钩子有7个，可以多次使用同一个钩子，执行顺序和书写顺序相同。

// ## 1. vue3.0生命周期钩子函数

// - `setup` 创建实例前
// - `onBeforeMount`  挂载DOM前
// - `onMounted` 挂载DOM后
// - `onBeforeUpdate` 更新组件前
// - `onUpdated` 更新组件后
// - `onBeforeUnmount` 卸载销毁前
// - `onUnmounted`  卸载销毁后
import { onBeforeMount, onMounted } from 'vue'
export default {
  setup () {
    onBeforeMount(()=>{
      console.log('DOM渲染前',document.querySelector('.container'))
    })
    onMounted(()=>{
      console.log('DOM渲染后1',document.querySelector('.container'))
    })
    onMounted(()=>{
      console.log('DOM渲染后2',document.querySelector('.container'))
    })
  },
}
</script>