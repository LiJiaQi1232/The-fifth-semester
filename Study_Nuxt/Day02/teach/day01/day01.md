# Nuxt笔记

## 1.Nuxt脚手架项目

中文文档：https://www.nuxtjs.cn/

### 1.安装

```javascript
  1. yarn  create nuxt-app 项目名
  2. npx create-nuxt-app 项目名
```

### 2.启动

```javascript
yarn dev
```

### 3.客户端和服务端渲染区别

1. 客户端渲染，是要经过JS动态生成HTML和内容，但是爬虫在爬取网站时，JS无法执行，导致爬虫无法收录网页的内容，不利于SEO优化
2. 服务端渲染：网页上的内容在服务端已经渲染好了，浏览器是直接拿到服务器渲染好的页面，直接呈现给用户，由于爬虫爬取网页内容，有利于SEO优化



### 4.nuxt脚手架项目

  1.components目录下的组件，在pages目录中 的页面组件中直接使用即可

nuxt.config.js

  ```javascript
  components:true   // 自动在页面组件中导入components目录下的组件
  ```



### 5.页面组成

1.布局文件： layouts/default.vue    默认布局文件就是default.vue 

2.布局文件中，使用<Nuxt />  可以看成vue-router, 占位， 把路由匹配到的页面组件放到该位置

3.页面组件: 可以直接使用复用组件



### 6.布局文件

1. 默认是default.vue ， 它是项目中所有页面的根组件
2. 自定义布局文件， 在layouts目录下，创建一个xxxx.vue布局文件
3. 在页面中使用时， 通过layout:'自定义布局文件名称'
4. 布局文件作用： 网站通用布局结构



### 7.error组件

1. 定义在layouts/error.vue,  作用：路由找不到时，显示一个错误页面，提升用户体验
2. 要把error组件看成页面页面，继承自default.vue布局, 当然也可以通过layout属性指定自定义布局文件



### 8.路由

1.pages/xxx.vue  文件即路由， nuxt内置了vue-router, 无需自己配置

2.路径参数：

​	路径：/goods/100            一个参数的获取   -----> pages/goods/__gid.vue    ---->   $routes.params._gid

​    路径：/goods/100/200            二个参数的获取   -----> pages/goods/___cid/__gid.vue    ---->   $routes.params.cid   $routes.params.gid   

   

3.查询参数

  /goods?cid=100           pages/goods.vue     $route.query.cid

  /goods?cid=100 &gid=200      $route.query.gid



4.推荐使用路径参数，便于SEO优化。