<template>
  <div>
    <MyTable :gList="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
          />
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/myTable.vue";
import axios from "axios";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [], //商品数据列表
    };
  },
  created() {
    axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
};
</script>

<style>
</style>