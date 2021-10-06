<template>
  <div class="container">
    <h1>父组件 {{money}} <button @click="money=1000">发钱</button></h1>
    <hr>
    <Son />
  </div>
</template>
<script>
// **总结：**  

// - provide函数提供数据和函数给后代组件使用
// - inject函数给当前组件注入provide提供的数据和函数

// ## 17-补充-v-model语法糖

// > 目标：掌握vue3.0的v-model语法糖原理

// 在vue2.0中v-mode语法糖简写的代码 `<Son :value="msg"  @input="msg=$event" />`

// 在vue3.0中v-model语法糖有所调整：`<Son :modelValue="msg"  @update:modelValue="msg=$event" />`
import { provide, ref } from 'vue'
import Son from './components/InjectSon.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const money = ref(100)
    const changeMoney = (saleMoney) => {
      console.log('changeMoney',saleMoney)
      money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide('money', money)
    // 将函数提供给后代组件 provide
    provide('changeMoney', changeMoney)

    return { money }
  }
}
</script>
<style scoped lang="less"></style>