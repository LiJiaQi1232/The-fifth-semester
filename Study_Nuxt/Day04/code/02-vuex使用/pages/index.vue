<template>
  <div>
       <!-- <h1>{{ $store.state.count }}</h1> -->
       <h1>{{ count }}</h1>
       <h3>{{ $store.state.todolist.list }}</h3>
       <button @click="add">新增一个随机数</button>
       <!-- <button @click="increment(200)">同步加</button>
       <button @click="asyncIncrement(1000)">异步加</button> -->
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex';
export default {
   computed: {
      // 传统方式
      //  count () {
      //     return this.$store.state.count
      //  }
      // mapState 调用之后返回一个对象{count: function () {}}
      ...mapState(['count'])
   },
   methods:{
      // increment (num) {
      //   //  this.$store.commit('increment', 100);
      //    this.$store.commit('increment', num);
      // },

      // asyncIncrement (num) {
      //    this.$store.dispatch('asyncIncrement', num);
      // },
      // ...mapMutations(['increment']),
      // ...mapActions(['asyncIncrement'])

      add () {
         // 随机数
         const random =  this.getRandom(10, 20);

         // 修改store/index 中的count
         this.$store.commit('updateRandom', random);

         // 修改store/todolist 中的list
         this.$store.commit('todolist/updateList', random);


      },
      //生成min - max 之间的随机整数
      // 1.参数  2.返回值   3.功能  4.何时调用
      getRandom (min, max) {
         return  Math.floor(Math.random() * (max - min +1) + min);
      }
      
   }
};
</script>

<style>
</style>