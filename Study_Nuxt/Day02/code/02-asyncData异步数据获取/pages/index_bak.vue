<template>
  <div>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
// //   推荐
     async asyncData () {
        const { data:{ data: topics } } =  await axios.get('https://cnodejs.org/api/v1/topics');
        return {
             topics
        }
      }

   // 方式2：返回promise   
//    asyncData() {
//       return axios.get("https://cnodejs.org/api/v1/topics").then(res =>{
//           return {
//               topics:res.data.data
//           }
//       });
//   },
};
</script>

<style>
</style>