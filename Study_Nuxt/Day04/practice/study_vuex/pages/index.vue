
<template>
  <div>
    <!-- 知识点一： 方式一 vuex基本使用-->
    <!-- <h1>{{ $store.state.count }}</h1>
    <button @click="increment(10)">同步加</button>
    <button @click="asyncIncrement(20)">异步加</button> -->

    <!-- 知识点二：方式二 mapState, mapMutations, mapActions -->
    <!-- <h1>{{ count }}</h1>
    <button @click="increment(10)">同步加</button>
    <button @click="asyncIncrement(20)">异步加</button> -->

    <!-- 知识点三：页面中使用模块的数据 $store.state.模块名.属性(文件名即模块名) -->
    <h1>{{ $store.state.count }}</h1>
    <h3>{{ $store.state.todolist.list }}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  // 方式一
  // methods: {
  //   increment(num) {
  //     // console.log(this,num);
  //     this.$store.commit("increment",num)
  //   },
  //   asyncIncrement(num){
  //     this.$store.dispatch("asyncIncrement",num)
  //   }
  // }
  // 方式二 使用mapState,mapMutations,mapActions
  // computed: {
  //   ...mapState(["count"]),
  // },
  // methods: {
  //   ...mapMutations(["increment"]),
  //   ...mapActions(["asyncIncrement"]),
  // },
};
</script>
