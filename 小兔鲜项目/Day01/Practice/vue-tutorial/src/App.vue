<template>
<div>
  <!-- 基本数据类型 -->
  <!-- <p>{{name}}||{{age}}</p>
  <button @click="onClickHandler">button</button> -->
  <!-- 1.6 引用行数据类型 -->
  <!-- <p> {{person.name}}|| {{person.age}}</p>
    <button @click="onClickHandler">button</button> -->
    <!-- 基本数据类型 -->
      <!-- <p> {{name}}</p>
    <button @click="onClickHandler">button</button> -->
    <!-- 2.计算属性 Computed -->
    <!-- <input type="text" v-model="search">
    <ul>
      <li v-for="item in firstNames" :key="item">{{item}}</li>
    </ul> -->
    <!-- 3. 监听 watch -->
    <!-- 3.1 监听基本数据类型响应数据  -->
    <!-- <input type="text" v-model="text"> -->
    <!-- 3.2 监听引用数据类型的响应式数据 -->
     <!-- <button @click="onClickHandler">{{person.name}}</button>  -->
     <!--3.4 监听响应式数据内部的具体属性（引用数据类型） -->
  <!-- <p>{{person.brand.title}}||{{person.name}} </p>
  <button @click="changeBrandTitle">title</button>
  <button @click="changeName">name</button> -->
  <!-- <p>{{person.name}}</p>
  <button @click="onClickHandler">button</button>  -->
  <!-- 3.6 监听多值变化 -->
  <!-- <input type="text" v-model="firstName">
  <input type="text" v-model="lastName"> -->
  
  <!-- 4. toRef
  <p>{{name}}</p>
  <p>{{person.brand.name}}</p>
  <button @click="onClickHandler">button</button> -->

  <!-- 5.toRefs -->
  <!-- <p>
{{ name }} {{ age }} {{ brand.title }} {{ brand.year }}
  </p> -->

  <!-- 6.组件通讯：父子传参 -->
  <div>
    I am father component
  </div>
<hr/>
<ChildComp :msg="msg"></ChildComp>
<button @click="onClickHandler">button</button>
</div>
  
</template>

<script>
// 1.4 引入ref
import {ref,reactive,computed,watch,watchEffect,toRef,toRefs} from "vue"
// 引入子组件
import ChildComp from "./components/ChildComp.vue"
export default {

  // setup(){
  //   // 1.1setup函数内部this为undefined 
  //   // console.log(this);
  //   // 1.3 setup函数的返回值为对象类型 
  //   // 注意：setup方法中声明的变量虽可在模板中显示 但是不是响应式数据 
  //   let name="张三";
  //   let age=20
  //   const onClickHandler=()=>{
  //     name="李四",
  //     age=30
  //   }
  //   console.log(name,age); //张三 20
  //   return{
  //     name,
  //     age,
  //     onClickHandler
  //   } 
  // },
   //1.2 setup函数在任何生命周期函数之前执行
  // beforeCreate() {
  //   console.log("before create");
  // },


  // 1.4 ref 用于创建响应式数据 即数据变化视图更新
  // 使用ref函数创建基本数据类型的响应式数据
    // setup(){
    //   const name=ref("张三")
    //   const age=ref(20)
    //   // 1.5 通过value属性修改数据
    //   const onClickHandler=()=>{
    //     name.value="李四",
    //     age.value=30
    //   }
    //   return {
    //     name,age,onClickHandler
    //   }
    // }

    // 1.6 使用ref创建引用型数据类型的响应式数据
  // setup(){
  //   const person=ref({name:'张三',age:20})
  //   const onClickHandler=()=>{
  //     person.value.name="李四"
  //     person.value.age=30
  //   }
  //   return{
  //     person,
  //     onClickHandler
  //   }
  // }

  // 1.7.1 reactive 用于 创建响应式数据  创建基于引用数据类型的响应式数据。
  // setup() { 
  //   const person=reactive({name:'张三',age:20});
  //   const onClickHandler=()=>{
  //     person.name="李四",
  //     person.age=30
  //   }
  //   return {
  //     person,
  //     onClickHandler
  //   }
  // }
 
  // 1.7.2 reactive 对基本数据类型不起作用  value cannot be made reactive: 张三
  // setup() {
  //   let name=reactive("张三")
  //   const onClickHandler=()=>{
  //     name="哇哈哈"
  //   }
  //   return{
  //     name,onClickHandler
  //   }
  // }

  // 1.7.3 使用reactive进行整体赋值 需要遍历
  //  在点击按钮后将 `newPerson` 中的值赋值给 `person`
  // setup() {
  //     let person=reactive({name:'张三',age:18})
  //     const newPerson=reactive({name:'李四',age:50})
  //     const onClickHandler=()=>{
  //       for(const item in newPerson){
  //         person[item]=newPerson[item]
  //       }
  //     }
  //     return{
  //       person,
  //       onClickHandler
  //     }
  // }

  // 1.7.4 使用ref进行整体赋值
  // setup() {
  //   let person=ref({name:'张三',age:18})
  //   const newPerson=ref({name:'李四',age:40})
  //   const onClickHandler=()=>{
  //  person.value=newPerson.value
  //   }
  // return{
  //   person,
  //   // newPerson,
  //   onClickHandler
  // }
  // }
  

  // 2.计算属性 Computed 使用原有响应式数据进行计算属性的创建 回调函数的返回值就是计算结果
  // setup() {
  //   const names=ref([
  //       "林俊杰",
  //     "孙燕姿",
  //     "周杰伦",
  //     "张惠妹",
  //     "刘若英",
  //     "林宥嘉",
  //     "刘德华",
  //     "张韶涵",
  //     "周笔畅",
  //     "孙楠"
  //   ])
  //   const search=ref("")
  // const firstNames=computed(()=>names.value.filter(item=>item.includes(search.value)))
  // return{
  //   search,firstNames
  // }
  // }

  // 3.监听状态 watch  用于监听响应式数据的变化
  // 3.1 使用watch监听基本数据类型响应式数据  不需要使用value
  // setup() {
  //   const text=ref("")
  //   watch(text,(current,previous)=>{
  //     console.log("current",current);  //现在的值
  //     console.log("previous",previous); //更新前的值
  //   })
  //   return{
  //     text
  //   }
  // }
  // 3.2 监听引用数据类型的响应式数据
  // setup(){
  //   const person=ref({name:'张三'});
  //   const onClickHandler=()=>{
  //     person.value.name="李四"
  //   }
  //   watch(person.value,(current)=>{
  //     console.log(current,'current');  //{name: '李四'} 
  //   })
  //   return{
  //     person,
  //     onClickHandler
  //   }
  // }

  // 3.3 监听响应式数据内部的具体属性（基本数据类型）
  // setup(){
  //   const person=ref({name:"哇哈"})
  // const onClickHandler=()=>{
  //     person.value.name="李四"
  //   }
  //   watch(()=>person.value.name,(current)=>{
  //         console.log(current,'current');   //李四 current
  //   })
  //   return{
  //     person,
  //     onClickHandler
  //   }
  // }

  // 3.4 监听响应式数据内部的具体属性（引用数据类型）
  // setup(){
  //   const person=ref({ brand: { title: "宝马" }, name: "张三" })
  //   const changeBrandTitle=()=>{
  //     person.value.brand.title="奔驰"
  //   }
  //   const changeName=()=>{
  //     person.value.name="哇哈哈"
  //   }
  //   watch(person.value.brand,(current)=>{
  //     console.log(current);
  //   })
  //   return{
  //     person,
  //     changeBrandTitle,
  //     changeName
  //   }
  // }
// 3.5 watch监听基于reactive创建的响应式数据
// setup(){
//   const person=reactive({name:'张三'})
//   const onClickHandler=()=>{
//     person.name="wahah"
//   }
//   watch(person,(current)=>{
//     console.log(current);
//   })
//   return{
//     person,onClickHandler
//   }
// }

//3.6 监听多值变化
// setup(){
//   const firstName=ref("")
//   const lastName=ref("")
//   watch([firstName,lastName],current=>{
//     console.log(current);
//   })
//   return{
//     firstName,
//     lastName
//   }
// }

//3.7 使watch监听数据在初始化时执行一次
// setup() {
//   const firstName=ref("hello")
//   const lastName=ref("world")
// watch([firstName,lastName],current=>{
//   console.log(current); //['hello', 'world']
// },
// {immediate:true }
// )
// return{
//   firstName,
//   lastName
// }
// }

// watchffect 监听状态  和watch一样 都是用于监听响应式数据的变化
// 区别： watchEffect 只关心数据的最新值 不关心旧值 默认会在初始化时执行一次

// setup(){
// const firstName=ref("hello")
//   const lastName=ref("world")
//   watchEffect(()=>{
//     console.log(firstName.value); //hello
//     console.log(lastName.value);  //world
//   })
//   return{
//     firstName,
//     lastName
//   }
// }

// 4. toRef 用于将响应式数据内部的普通数据转换为响应式数据 
//注：转换后的数据和原始数据存在引用关系 当原始数据发生变化时，toRef转换后的数据也会跟着变化
// setup() {
//   const person=ref({name:'哇哈哈'})
//   const onClickHandler=()=>{
//     person.value.name="bobySeven"
//   };
//   return{
//     name:toRef(person.value,'name'),
//     person,
//     onClickHandler
//   }
// }
// 4.1 需求：当响应式数据的结构层级较深时 可否在在模板中使用时能够简化结构层级
// setup() {
//   const person=ref({ brand: { name: "宝马" } });
//   const onClickHandler=()=>{
//     person.value.brand.name="宝马mini🤡"
//   };
//   return{
//     name:toRef(person.value.brand,'name'),
//     person,
//     onClickHandler
//   }
// }

// 5. toRefs toRef一次只能转换一个数据 通过toRefs可以实现批量数据转换
// setup() {
//   const person=reactive({
//     name:'张三',
//     age:20,
//     brand:{title:'宝马',year:1}
//   })
//   return{
//     ...toRefs(person)
//   }
// }

// 6.组件通讯
// 父->子 通过 props 向子组件传递数据
components:{ChildComp},
setup() {
  const msg=ref("a message from father")
  const onClickHandler=()=>{
    msg.value="a message from parent😀"
  }
  return{
    msg,
    onClickHandler
  }
}










}
</script>
