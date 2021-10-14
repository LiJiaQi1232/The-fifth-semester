<template>
  <ul>
    <li v-for="item in topics" :key="item.id">
      <a href="#">{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  // async asyncData() {
  //   const {
  //     data: { data: topics },
  //   } = await axios.get("https://cnodejs.org/api/v1/topics");
  //   return {
  //     topics,
  //   };
  // },
  // 方式二：返回promise
  asyncData() {
    return axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
      return {
        topics: res.data.data,
      };
    });
  },
};
</script>
