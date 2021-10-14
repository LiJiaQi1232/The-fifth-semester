<template>
      <div>
           <h1>assets目录下的图片资源使用</h1>
           <h3>img标签显示图片</h3>
           <img src="~assets/imgs/1.jpg" alt="">
           <h3>类名显示图片</h3>
           <div class="picimg"></div>
           <h3>行内样式显示图片</h3>
           <p :style="backgroundImg"></p>
      </div>
</template>

<script>
export default {
     data () {
         return {
             backgroundImg:`background:url(${require('~/assets/imgs/2.jpg')})`
         }
     }
}
</script>

<style>
    .picimg {
        width: 400px;
        height: 200px;
        border: 1px solid;
        background: url(~assets/imgs/2.jpg) no-repeat;
        background-size: 100% 100%;
        /* background-size:contain; */
    }
    p {
        width:400px;
        height:200px;
        background-size:100% 100%;
    }
</style>