<template>
  <div>
       Demo:  {{ test }}
  </div>
</template>

<script>
export default {
   data () {
       return {
           test:'策划'
       }
   },
    // 只能用在页面组件
   asyncData () {
       console.log(111);
        return {
             test:'测试'
        }
   },

    // 可以用在任意组件
   fetch () {
       console.log('fetch执行了');
   }
}
</script>

<style>

</style>