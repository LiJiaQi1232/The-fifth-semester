<template>
  <div class="container">
    <h1 @click="say()">{{msg}}</h1>
  </div>
</template>
<script>
export default {
//   使用细节：

// - `setup` 是一个新的组件选项，作为组件中使用组合API的起点。
// - 从组件生命周期来看，它的执行在组件实例创建之前`vue2.x的beforeCreate`执行。
// - 这就意味着在`setup`函数中 `this` 还不是组件实例，`this` 此时是 `undefined`
// - 在模版中需要使用的数据和函数，需要在 `setup` 返回。
// **总结：** `setup` 组件初始化之前执行，它返回的数据和函数可在模版使用。

  setup () {
    console.log('setup执行了')
    console.log(this)
    // 定义数据和函数
    const msg = 'hi vue3'
    const say = () => {
      console.log(msg)
    }

    return { msg , say}
  },
  beforeCreate() {
    console.log('beforeCreate执行了')
    console.log(this)
  }
}
</script>