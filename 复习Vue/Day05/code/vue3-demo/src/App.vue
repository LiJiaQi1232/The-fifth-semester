<template>
  <div class="container">
    <div>坐标</div>
    <div>x: {{x}}</div>
    <div>y: {{y}}</div>
    <hr>
    <div>{{count}} <button @click="add">累加1</button></div>
  </div>
</template>
<script>
// 基本步骤：

// - 记录鼠标坐标
//   - 定义一个响应式数据对象，包含x和y属性。
//   - 在组件渲染完毕后，监听document的鼠标移动事件
//   - 指定move函数为事件对应方法，在函数中修改坐标
//   - 在setup返回数据，模版中使用
// - 累加1功能
//   - 定义一个简单数据类型的响应式数据
//   - 定义一个修改数字的方法
//   - 在setup返回数据和函数，模板中使用

// **总结：** 体会组合API的写法，尝试组织可读性高的代码。
import { onMounted, onUnmounted, reactive , ref, toRefs} from 'vue'
const useMouse = () => {
    // 1. 记录鼠标坐标
    // 1.1 申明一个响应式数据，他是一个对象，包含x y
    const mouse = reactive({
      x: 0,
      y: 0
    })
    // 1.3 修改响应式数据
    const move = (e) => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    // 1.2 等dom渲染完毕。去监听事件
    onMounted(()=>{
      document.addEventListener('mousemove', move)
    })
    // 1.4 组件消耗，删除事件
    onUnmounted(()=>{
      document.removeEventListener('mousemove', move)
    })

    return mouse
}
export default {
  name: 'App',
  setup () {

    const mouse = useMouse()

    // 2. 数字累加
    const count = ref(0) 
    const add = () => {
      count.value ++
    }



    return { ...toRefs(mouse), count, add }
  }
}
</script>
<style scoped lang="less"></style>