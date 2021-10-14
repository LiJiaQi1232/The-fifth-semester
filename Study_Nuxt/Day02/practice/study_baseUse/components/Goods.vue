<template>
  <ul>
    <li>{{goods}}</li>
  </ul>
</template>

<script>
export default {
data(){
  return{
    goods:"电子产品"
  }
},
asyncData(){
  console.log("Goods组件中的asyncData执行了");
  return{
    goods:'哇哈产品'
  }
}
}
</script>

<style>

</style>