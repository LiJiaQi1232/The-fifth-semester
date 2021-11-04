<template>
  <div class="container">
    <h1>子组件</h1>
    <p>{{ money }}</p>
    + <button @click="changeMoney">花50元</button>
  </div>
</template>
<script>
import { onMounted } from "vue";
// 扩展：

// - 在vue2.x的时候 `.sync`  除去v-model实现双向数据绑定的另一种方式

// ```vue
// <!-- <Son :money='money' @update:money="fn"  /> -->
// <Son :money.sync='money'  />
// ```

// - 在vue3.0的时候，使用 `v-model:money="money"`  即可

// ```vue
//     <!-- <Son :money="money" @update:money="updateMoney" /> -->
//     <Son v-model:money="money" />
// ```
export default {
  name: "Son",
  // 子组件接收父组件数据使用props即可
  props: {
    money: {
      type: Number,
      default: 0,
    },
  },
  // props 父组件数据
  // emit 触发自定义事件的函数
  setup(props, { emit }) {
    // 获取父组件数据money
    console.log(props.money);
    // 向父组件传值
    const changeMoney = () => {
      // 消费50元
      // 通知父组件，money需要变成50
      emit("change-money", 50);
    };
    return { changeMoney };
  },
};
</script>