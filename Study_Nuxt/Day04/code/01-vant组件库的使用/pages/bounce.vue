<template>
  <div>
    <h1>bounce Page Transition</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
      const { data: {data:topics}} = await axios.get('https://cnodejs.org/api/v1/topics');
      console.log(topics,'topics');
  }
}
</script>

<style>
</style>