<template>
    <div>
         <h1>fade page Transition</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
//   middleware:'auth3'
async asyncData () {
      const { data: {data:topics}} = await axios.get('https://cnodejs.org/api/v1/topics');

      console.log(topics,'topics');
  }
}
</script>

<style>

</style>