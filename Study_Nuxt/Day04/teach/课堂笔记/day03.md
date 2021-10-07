# day03

### 1.路由过渡和动画

#### 1.过度

1.    用的vue过度,  默认类目是.page开通
2.    成对出现， 
   1. .page-enter, .page-leave-to {   }
   2. .page-enter-active, .page-leave-active {   }

#### 2.动画

1.   使用transtion属性在页面组件指定自定义动画名称
2.   在布局文件  给xxx-enter-active,xxx-leave-active  {    }





### 2.中间件

1.   中间件就是一个函数， 运行在客户端或者服务端
2.  项目启动或者刷新页面，运行在服务端
3.   切换路由，运行在客户端
4.  process.server / process.static  判断执行环境



#### 4.中间件分类

​    执行顺序：

1. nuxt.config.js
2. 布局文件
3. 页面文件

1.  全局中间件, 整个项目都可以使用

   1. middleware目录下xxx.js

   2. nuxt.config.js 全局注册  

      ```javascript
      router :{
          middleware:'全局中间件名称'
      }
      ```

   3. 整个项目路由切换时或者刷新页面时，全局中间件都会执行

2.布局中的中间件

1. middleware目录下xxx.js
2. 在布局文件中使用middleware:'中间件名称'



3.页面中的中间件

1. middleware目录下xxx.js
2. 在页面文件中使用middleware:'中间件名称'



### 3.插件

 默认插件

1. 就是一个plugins/js文件
2. 项目启动时/根目录刷新， 会在客户端和服务端都执行一次，此时要注意区分环境
3. 路由切换时，该插件不执行

 

客户端/服务端插件

1. plugins/xx.js

2. nuxt.config.js

   ```javascript
   plugins:[
       '~/plugins/xxx.js'  // 两端都会执行
       {src:'~/plugins/xxx.js', mode:'client'} // 客户端
       {src:'~/plugins/xx.js', mode:'server'} // 服务端
       {src:'~/plugins/xx.js', mode:'both'} // 两端
   ]
   ```

   

插件文件命名方式：

1. xxx.client.js   客户端插件
2. xxx.server.js  服务端插件





#### vue插件

1. plugins/xxx.js 

    ```vue
    import Vue from 'vue';
    import 插件名 from ‘包名’
    
    Vue.use(插件名)
    ```

2. nuxt.config.js 注册

   ```javascript
   plugins:[
       '~/plugins/xx.js'
   ]
   ```

   

### axios插件封装

1. plugins/axios.js

   ```javascript
   import axios from 'axios';
   
   export default (context, inject) =>{
       axios.defaults.baseURL = '';
       
       inject('api', {
           // 方法
       })
   }
   
   ```

2. 注册

   ```javascript
   plugins:[
       '~/plugins/xx.js'
   ]
   ```

3. 使用

   ```vue
   asyncData ({app}) {
      app.$api.方法()
   }
   ```

   
