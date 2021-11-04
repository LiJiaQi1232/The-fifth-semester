<template>
  <div class="category">
    <!-- 一级分类 -->
    <van-tree-select
      height="100vh"
      :items="oneCategoryList"
      :main-active-index.sync="active"
      @click-nav="categoryHandle"
    >
      <!-- 二级分类 -->
      <template #content>
        <div class="cate_item" v-for="item in twoCategory" :key="item.id">
          <van-image width="4rem" :src="item.brandLogo" />
          <p>{{ item.brandName }}</p>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }],
    };
  },

  methods: {
    async categoryHandle(index) {
      // 地址栏中记录点击的一级列表选项
      this.$router.replace(`category?active=${index}`);
      //根据选中的一级分类id加载二级分类 默认第一个一级分类是选中
      let { twoCategory } = await this.$api.TwoCategory(
        this.oneCategoryList[index]["id"]
      );
      this.twoCategory = twoCategory;
    },
  },
  async asyncData({ $api, query }) {
    let active = query.active || 0;
    // 记载一级分类
    let { oneCategoryList } = await $api.OneCategory();
    // 处理一级分类数据
    oneCategoryList = oneCategoryList.map((item) => {
      return {
        id: item.id,
        text: item.categoryName,
      };
    });
    // 加载二级分类
    const { twoCategory } = await $api.TwoCategory(
      oneCategoryList[active]["id"]
    );

    return {
      active,
      oneCategoryList,
      twoCategory,
    };
  },
};
</script>

<style>
.cate_item {
  float: left;
  text-align: center;
}
</style>