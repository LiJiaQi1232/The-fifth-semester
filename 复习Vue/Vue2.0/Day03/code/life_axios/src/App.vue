<template>
     <div>
        <Life v-if="isShow"></Life>
        <button @click="isShow = !isShow">销毁Life组件</button>
     </div>
</template>

<script>
import Life from './components/Life.vue'
export default {
  components:{
    Life
  },
  data () {
     return {
        isShow:true
     }
  }
}
</script>

<style>

</style>