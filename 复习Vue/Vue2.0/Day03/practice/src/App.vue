<template>
  <div>
    <MyHeader :title="title"></MyHeader>
    <div class="main">
      <MyGoods v-for="obj in list" :key="obj.id" :gList="obj"></MyGoods>
    </div>
    <MyFooter :goods="list" @changeAll="allFn"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyGoods from "./components/MyGoods.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  data() {
    return {
      title: "购物车",
      list: [],
    };
  },
  created() {
    // 不必在自己引入axios变量, 而是直接使用全局属性$axios
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      console.log(res);
      this.list = res.data.list;
    });
  },
  methods:{
    allFn(bool){
      this.list.forEach(obj=>obj.goods_state=bool)
    }
  }
};
</script>


<style>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
