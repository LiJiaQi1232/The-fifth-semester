# 乐淘项目

 

## 0.技术栈： 

​	   后端开发语言： Koa    Koa脚手架搭建```koa```项目， 微信支付，  短信验证， JWT， 加密 

​       数据库：  ```mysql```

​       服务器：

​	                   腾讯云：window server 2012 

​     

## 1.项目介绍 

### 1.目标

   后端开发流程：

        1.  我们后端开发流程，先看设计稿，有多少页面，每个页面需要用到哪些接口，以及接口功能
        2.  提前先思考，先要设计数据库中需要拿到所少个表，表里面需要用到哪些字段， 数据库中表设计完成之后
        3.  使用KOA完成接口的开发, 自己开发的接口，我们可以使用postman进行接口，测试是否正常使用

​     目标： 首页用到的接口

###   2. 实现思路

1.  乐淘项目有首页， 分类页， 购物车，会员中心页面
2. 首页需要用到的接口：
   1.  banners接口   提供首页轮播图数据的
   2.  ```gridList ``` 宫格接口   提供宫格数据
   3.  ```sportList```  运动专区   提供运动专区的数据
   4.  ```brandList``` 品牌专区  提供品牌专区的数据
3. 分类页面用到接口
   1. 一级分类  ```oneCategoryList```    提供一级分类列表  数据库中需要新建分类表
   2. 二级分类  ``twoCategoryList``    根据id获取二级分类数据

### 3.总结

后端没开发，先看设计稿，思考之后设计数据库，开发接口，postman测试是否可用， 发布测试环境给前端联调。

注意： 后端开发中，会提前告诉前端开发人数据，接口地址，以及每个接口返回的数据结构，字段，注释， 前端拿到接口地址，接口返回的结构，使用mock等模拟数据，同时进行开发， 前后端都开发完成v,前后端一起联调。



## 2.项目初始化

### 1.目标

​	 	  ```koa```脚手架安装和使用

### 2.实现思路

1. ```npm```  官网下载安装```koa ```生成器
   1. ```npm install -g koa-generator```
2. 使用Koa 生成项目
   1. koa2 项目名称

### 3.总结

  安装```koa```生成器，使用koa2  项目名称   启动时： yarn start



## 3.koa脚手架项目结构

### 1.目标

​      ``` koa```生成器会生成满足```koa```开发一系列的相关默认配置和文件，我们对初始化的文件目录以及文件掌握

### 2.实现思路

1.  查看目录结构进行说明
2. 查看文件进行说明

### 3.总结

1. bin/www    服务启动文件
2. routes      ``` koa ```路由文件
3. public      存放资源文件 ```imgs  css ```
4. app.js      入口文件， 初始化```koa ```， 加载路由
5. views      前端模板文件，  后续在乐淘项目中用不到，我们要开发前后端分离的项目，有这个文件给使用者测试使用
6. ```pageage.json    ```   
   1. 开发时： yarn start   yarn dev   
   2. 区别： 
      1. yarn dev  使用```nodemon```启动服务， 实时编译
      2.  yarn start  是node启动的服务， 代码修改时， 需要重新打包



## 4.核心文件代码说明

### 1.目标

​      我们要掌握脚手架生成核心文件中核心代码

#### 2.实现思路

1. app.js  把里面代码注释一下
2. bin/www 服务启动文件



### 3.代码讲解

app.js

```javascript
const Koa = require('koa')  // KOA 包
const app = new Koa()  // 创建app服务
const views = require('koa-views')  // 处理静态资源
const json = require('koa-json')   // json 格式化
const onerror = require('koa-onerror') // 处理异常
const bodyparser = require('koa-bodyparser')  // 解析post请求
const logger = require('koa-logger') // 记录日志

// 加载路由
const index = require('./routes/index')
const users = require('./routes/users')

// error handler  错误处理
onerror(app)

// middlewares  中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger  记录操作日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes  注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling  一旦监听到异常，打印看到报错信息
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

```



#### 总结

1.  yarn dev   使用bin/www启动服务， 启动服务器时www文件会读取app.js ，使用http启动服务，  在app.js 初始化```koa```服务，以及路由注册，中间件注册，错误处理等等。









































































