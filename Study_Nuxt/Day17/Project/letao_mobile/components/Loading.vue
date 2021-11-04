<template>
  <van-overlay :show="show" class="loading">
    <!--vertical 是否垂直排列图标和文字内容 -->
    <van-loading color="#1989fa">加载中...</van-loading>
  </van-overlay>
</template> 

<script>
export default {
  data() {
    return {
      show: false, // 控制遮罩的显示和隐藏
    };
  },
  methods: {
    start() {
      console.log(1);
      this.show = true;
    },
    finish() {
      console.log(2);
      this.show = false;
    },
  },
};
</script>


<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>