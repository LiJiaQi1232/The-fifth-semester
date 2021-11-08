<template>
  <div>
    <!-- 组件通讯：子传父 -->
    <!-- {{msg}}
     <button @click="onMsgChanged">changed</button> -->
     <!-- child component -->

    </div>
 
</template>

<script>

export default {
    name: "ChildComponent",
  //  <!-- 组件通讯：子传父 -->
  // props:["msg"],
  // emits:["onMsgChanged"],
  // setup(props,{emit}) {
  //   const information="changed msg from children"
  //   const onMsgChanged=()=>{
  //     emit("onMsgChanged",information)
  //   }
  //   return{
  //     onMsgChanged
  //   }
  // }
    // 1.4.1.2  组件重新挂载时执行
  // setup(){
  //   console.log("setup");
  // }
}
</script>

<style>

</style>