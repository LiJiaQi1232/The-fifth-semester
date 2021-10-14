<template lang="pug">
 div    
     ul 
         li(v-for="item in list", :key="item.id")
           a {{ item.title }}

</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const {
      data: { data: list },
    } = await axios.get("https://cnodejs.org/api/v1/topics");

    return {
      list,
    };
  },
};
</script>

<style>
</style>