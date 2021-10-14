<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id"><a href="#">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // promise
  // asyncData() {
  //   return axios.get("https://cnodejs.org/api/v1/topics").then((res) => {
  //     console.log(res.data.data);
  //     return{
  //       list:res.data.data
  //     }
  //   });
  // },
  // async await
   async asyncData(){
     const {data:{data:list}}=await axios.get("https://cnodejs.org/api/v1/topics")
     return{
       list
     }
   }

};
</script>
