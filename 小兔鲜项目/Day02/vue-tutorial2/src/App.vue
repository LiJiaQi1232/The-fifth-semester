<template>
  <!-- 与服务端通信 -->
  <!-- <div v-if="loading">loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="data && data.length > 0">
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
  <div v-else>暂无数据</div> -->
    <!-- // 2.1 获取单个DOM对象 -->
  <!-- <div ref="divRef">helloworld</div> -->
  <!--2. 获取Dom对象 -->
  <!-- <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" :ref="(el)=>{elms[index]=el}" >{{item}}</li>
    </ul>
    <button @click="handleClickHandler">button</button>
  </div> -->
  <!-- 3.provide inject  -->
  <div>
    <!-- <ChildComponent/> -->
    <!-- <button @click="changePerson">button</button> -->
  <!-- 4.teleport -->
  <!-- <teleport to='#modal' /> -->
  <!-- <Modal/> -->
  <!-- 5.1suspense -->
  <!-- <Suspense>
    <Posts/>
  </Suspense> -->
  <!--5.2  通过 suspense 组件还可以为异步操作添加等待提示效果。 -->
    <Suspense>
      <template v-slot:default>
           <Posts/>
      </template>
  <template v-slot:fallback>loading  </template>
  </Suspense>
  </div>
</template>
<script>
// import Modal from "./components/Modal.vue"
import Posts from "./components/Post.vue"
// import { onMounted, onUpdated, ref,provide } from "vue";
// import ChildComponent from "./components/ChildComponent.vue"
// import axios from "axios";
export default {
    // <!-- 与服务端通信 -->
  // setup() {
  //  // 用于存储列表数据
  //   const data = ref(null);
  //   // 用于标识加载状态
  //   const loading = ref(false);
  //   // 用于存储错误信息
  //   const error = ref(null);
  //   // 用于发送请求的方法
  //   async function getPosts() {
  //     // 更新加载状态
  //     loading.value = true;
  //     try {
  //       // 发送请求
  //       let response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       // 存储列表数据
  //       data.value = response.data;
  //     } catch (err) {
  //       // 存储错误信息
  //       error.value = err.message;
  //     }
  //     // 更新加载状态
  //     loading.value = false;
  //   }
  //   // 调用方法 发送请求
  //   getPosts();
  //   // 返回模板所需数据
  //   return { data, loading, error };
  // },

  // 2.1 获取单个DOM对象
  // setup(){
  //   const divRef=ref(null);
  //   onMounted(()=>{
  //     console.log(divRef.value);
  //   })
  //   return{
  //     divRef
  //   }
  // }

  // 2.2 获取一组DOM对象
//   setup(){
//     const list=ref(['a','b','c'])
//     const elms=ref([])
//     const handleClickHandler=()=>{
//       list.value.push("d")
//     }
//     onMounted(()=>{
//        console.log(elms.value);
//     })
//     onUpdated(()=>{
//        console.log(elms.value);
//     })
//   return {list,elms,handleClickHandler}
// }

//   <!-- 3.provide inject  -->
// components:{ChildComponent},
// setup(){
//   const person=ref({name:"wahah"})
//   const changePerson=()=>{
//     person.value.name="李四"
//   }
//   provide("person",person)
//   provide("changePerson",changePerson)
//   // return{
//   //   changePerson
//   // }
// }
  // teleport
  // components:{Modal},  
  // <!-- 5.suspence -->
  components:{Posts}

}
</script>

<style>

</style>