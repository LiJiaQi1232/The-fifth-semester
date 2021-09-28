<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <!-- *重要:
          每个对象和组件都是独立的
          对象里的goods_state关联自己对应商品的复选框
         -->
        <!-- bug:
          循环的所有label的for都是input, id也都是input - 默认只有第一个生效
          解决: 每次对象里的id值(1, 2), 分别给id和for使用即可区分
          -->
        <input
          type="checkbox"
          class="custom-control-input"
          v-model="gList.goods_state"
          :id="gList.id"
        />
        <label class="custom-control-label" for="gList.id">
          <img :src="gList.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ gList.goods_name }}</div>
      <div class="bottom">
        <span>￥{{ gList.goods_price }}</span>
        <span>
          <MyCount :goods="gList"></MyCount>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
import MyCount from "./MyCount.vue"
export default {
  components:{
    MyCount
  },
  props:{
    gList:Object
  },
 
};
</script>
<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>