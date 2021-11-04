<template>
  <div>
    <MyHeader
      title="Tabbar案例"
      :background="'lightpink'"
      :fontColor="'white'"
    ></MyHeader>
    <div class="main">
      <component :is="tabCont"></component>
    </div>
    <MyTabBar :tabList="tabList" @changeTab="changeTab"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/myHeader.vue";
import MyTabBar from "./components/myTabBar.vue";
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";

export default {
  data() {
    return {
      tabCont: "MyGoodsList",
      tabList: [
        // 底部导航的数据
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    changeTab(value) {
      this.tabCont = value; // MyTabBar里选出来的组件名赋予给is属性的comName
    },
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
};
</script>
<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
