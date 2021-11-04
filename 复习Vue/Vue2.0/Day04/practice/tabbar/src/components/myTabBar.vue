<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="(val, index) in tabList"
      :key="index"
      @click="changeTab(index, val)"
      :class="{ current: index === selIndex }"
    >
      <span class="iconfont" :class="val.iconText"></span>
      <span>{{ val.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
      // 自定义校验规则
    },
  },
  data() {
    return {
      selIndex: 0, //默认第一个高亮
    };
  },
  methods: {
    changeTab(index, val) {
      this.selIndex = index; //点谁就把谁的索引值保存起来
      this.$emit("changeTab", val.componentName); //要切换的组件名传给App.vue
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: lightblue;
}
</style>