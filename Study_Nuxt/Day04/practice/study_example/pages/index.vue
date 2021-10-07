<template>
  <div>
    <h1>index模块中的随机数：{{ $store.state.num }}</h1>
    <h1>todolist模块中的随机数：{{ $store.state.todolist.list }}</h1>
    <button @click="add">新增随机数</button>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      // 调用产生随机数方法 并定义变量接收产生的随机数
      const random = this.getRandom(1, 10);

      // 修改index中的num
      this.$store.commit("updateNum", random);
      // 修改todolist中的list
      this.$store.commit("todolist/updateList", random);
    },
    // 定义产生范围内随机数方法
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>
