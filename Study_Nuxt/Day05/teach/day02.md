## day02

### 1.asyncData

1.  nuxtjs新增的钩子函数，用于获取数据后服务端渲染页面

2.  页面刷新asyncData会在服务端运行

3. 页面跳转时asyncData运行在客户端

4. asyncData钩子返回的数据最终会和data返回的数据合并到一起，给页面使用

5. 我们可以process.server 判断代码运行客户端还是服务端  

6. asyncData只能使用在页面组件

7. asycData参数：对象，  该对象包含route，query,params等

   ```javascript
    asyncData ({ query, params, route }) {
   
    }
   ```

   

### 2.asyncData处理异步数据

1. async    await  ，  返回数据

   ```javascript
   //   推荐
        async asyncData () {
           const { data:{ data: topics } } =  await axios.get('https://cnodejs.org/api/v1/topics');
           return {
                topics
           }
         }
   ```

   

2. 返回promise

   ```javascript
      // 方式2：返回promise   
      asyncData() {
         return axios.get("https://cnodejs.org/api/v1/topics").then(res =>{
             return {
                 topics:res.data.data
             }
         });
     }
   ```

   

### 3.资源文件：

####   assets目录

1. assets目录，会被webpack打包
2. 访问路径，~/assets/路径
3. 最终是使用require(路径)

####   static目录

1. 该目录下的文件，不会被webpack打包
2. 访问时直接写static目录下的文件路径， (譬如) /imgs/xxx 
3. 无论是assets还是static 使用行内样式加载图片资源时，全部统一写法： require(~/静态资源目录/路径)



####   less/scss

1. 安装

     yarn add less less-loader@7.3.0

2. 配置nuxt.config.js 

     yarn add @nuxtjs/style-resources `

   ```javascript
   
   buildModules: [
       '@nuxtjs/style-resources',
     ],
   
     styleResources: {
        less:['~/assets/less/xxx.less']   // 全局变量
     }
   ```

3. 在assets目录下写你的less样式

4. 对应全局变量,可以在整个项目中直接使用，无需@import导入

 



#### pug

#####   是html模板， 简化标签写法

1. 安装

   1.  yarn add pug pug-plain-loader

2. 使用

     ```vue
     <template lang="pug">
      div    
          ul 
              li(v-for="item in list", :key="item.id")
                a {{ item.title }}
     
     </template>
     
     <script>
     import axios from "axios";
     export default {
       async asyncData() {
         const {
           data: { data: list },
         } = await axios.get("https://cnodejs.org/api/v1/topics");
     
         return {
           list,
         };
       },
     };
     </script>
     ```

   

