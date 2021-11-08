<template>

<!-- 组件通讯：父传子 -->
  <!-- <ChildComponent :msg="msg" @onMsgChanged="onMsgChanged" /> -->
    <!--14.1.2 组件生命周期：每次组件重新挂载时执行  -->
  <!-- <ChildComponent v-if="show"/>
  <button @click="show=!show">toggle</button> -->
  <!-- 生命周期 -->
  <!-- <div>
 {{count}}
  <button @click="onClickHandler">button</button>
  </div> -->
  <div v-if="loading">loading....  </div>
  <div v-else-if="error">{{error}}</div>
  <!-- <div v-else-if="data&&data.length>0">
    <ul>
      <li v-if="item in data">{{item.title}}</li>
    </ul>
  </div> -->
  <div v-else>暂无数据</div>
</template>

<script>

import { ref } from "vue";
import axios from "axios";
import {onMounted,onUnmounted,onUpdated} from "vue"
// import ChildComponent from "./components/ChildComponent.vue"
export default {
  name: 'App',
  // components: {
  //  ChildComponent
  // },
  //组件通讯 子传父 
  // setup() {
  //   const msg=ref('I am a message');
  //   const onMsgChanged=(data)=>{
  //     // console.log(data);
  //     msg.value=data
  //   }
  //   return{
  //     msg,
  //     onMsgChanged
  //   }
  // }

  // 14.组件生命周期  
  // 14.1 setup:vue3中组合式API的入口 它在创建组件实例对象前执行 会在每次组件重新挂载时执行

  // 14.1.1 创建组件实例对象前执行
//  setup() {
//     console.log('setup')  
//   },
//   beforeCreate() {
//     console.log("before create")
//   },
  // 1.4.1.2  组件重新挂载时执行
  // setup(){
  //   const show=ref(true);
  //   return{show}
  // }

  // 1.4.2  ouMounted:组件挂载完成后执行 onUpdated:组件数据更新后执行  onUnmounted:组件卸载后执行
  // setup(){
  //   let timer=null;
  //   const count=ref(0)
  //   // 组件挂载完成之后开启定时器
  //   onMounted(()=>{
  //     timer=setInterval(()=>{
  //       console.log("timer...");
  //     },1000)
  //   })
  //   // 组件卸载完成之后清除定时器
  //   onUnmounted(()=>{
  //     clearInterval(timer)
  //   })
  //   const onClickHandler=()=>{
  //     count.value+=1
  //   }
  // // 组件更新之后在控制台输出onUpdated
  // onUpdated(()=>{
  //   console.log('onUpdated');
  // })
  // return{count,onClickHandler}
  // }
  // setup(){
  //   // 用于存储列表数据
  //   const data=ref(null)
  //   // 用于标识加载状态
  //   const loading=ref(false)
  //   // 用于存储错误信息
  //   const error=ref(null)
  //   // 用于发送请求方法
  //   async function getPosts(){
  //     // 更新加载状态
  //     loading.value=true;
  //     try{
  //       // 发送请求
  //       let response=await axios.get("https://jsonplaceholder.typicode.com/posts")
  //       console.log(response);
  //       // 存储列表数据
  //       data.value=response.data;
  //     }catch(err){
  //       // 存储错误信息
  //       error.value=err.message;
  //     }
  //     // 更新加载状态
  //     loading.value=false;
  //   }
  //   // 调用方法 发送请求
  //   getPosts()
  //   return{
  //     data,loading,error,getPosts
  //   }
  // }


  

  setup() {
    // 用于存储列表数据
    const list = ref();
    // 用于标识加载状态
    const loading = ref(false);
    // 用于存储错误信息
    const msg = ref();
    // 用于发送请求的方法
      axios.get( "https://jsonplaceholder.typicode.com/posts").then((response)=>{
        console.log(response);
      })

    
    // 调用方法 发送请求
  
    // 返回模板所需数据
    return { list, loading, error };
  },


}
</script>
