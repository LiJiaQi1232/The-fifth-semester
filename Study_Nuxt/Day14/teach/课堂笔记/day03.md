## 1.连接数据库

###  1.目标

​       koa连接数据库，先下载MySQL

###  2.实现思路

1. 下载安装mysql  

   1. yarn add mysql

2. koa连接mysql

   

   ### 3.代码实现

   db/query.js

   ```javascript
   var mysql = require('mysql');
   
   // 连接数据库配置信息
   var pool  = mysql.createPool({
       connectionLimit : 10,  // 最大连接数
       host            : 'localhost',    // 主机
       user            : 'root',   // 用户名
       password        : '123456',  // 密码
       database        : 'letaodb'  // 数据库名称
   });
   
   
    //  创建连接
   pool.getConnection(function(err, connection) {
     if (err) throw err; // not connected!
    
     // Use the connection
     connection.query('select 1 + 1 as 结果', function (error, results, fields) {
       // When done with the connection, release it.
       connection.release();
    
       // Handle error after the release.
       if (error) throw error;
   
       console.log(results,'results');
    
       // Don't use the connection here, it has been returned to the pool.
     });
   });
   ```

   #### 4.总结

      我们连接或者操作mysql，首先下载mysql, 创建数据库连接配置对象，发送sql语句到数据库，数据库会接受到sql语句，执行，在回调函数中，我们可以拿到查询后的结果





##    2.查询myql数据库的封装

​     db/query.js

```javascript
 //  创建连接   sql：sql语句
module.exports.query = (sql) =>{
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!  没有连接上
       
        // Use the connection   使用连接 发送sql语句到数据库mysql，mysql中的letaodb数据库会执行sql语句，
        // 执行结果 在回调函数中参数二返回 
        connection.query(sql, function (error, results, fields) {
          // When done with the connection, release it.   没连接上之拿到返回数据的之后，会把当前连接释放掉
          connection.release();
       
          // Handle error after the release.  抛出异常
          if (error) throw error;
      
          console.log(results,'results');  // 
       
          // Don't use the connection here, it has been returned to the pool.
        });
      });
}
```

## 3.分类页

### 1.目标

​     完成一级分类接口编写

### 2.实现思路

1. 在routes/category.js   
2. 编写一级分类的接口  
3. 调用该接口时，需要返回一级分类的数据

### 3.代码实现

db/query.js

```javascript
var mysql = require('mysql');

// 连接数据库配置信息
var pool = mysql.createPool({
  connectionLimit: 10,  // 最大连接数
  host: 'localhost',    // 主机
  user: 'root',   // 用户名
  password: '123456',  // 密码
  database: 'letaodb'  // 数据库名称
});


//  创建连接   sql：sql语句
module.exports.query = (sql) => {
 return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!  没有连接上

      // Use the connection   使用连接 发送sql语句到数据库mysql，mysql中的letaodb数据库会执行sql语句，
      // 执行结果 在回调函数中参数二返回
      connection.query(sql, function (error, results, fields) {
        // When done with the connection, release it.   没连接上之拿到返回数据的之后，会把当前连接释放掉
        connection.release();

        // Handle error after the release.  抛出异常
        if (error) throw error;

        resolve(results);

        // Don't use the connection here, it has been returned to the pool.
      });
    });
  });
}
```



routes/category.js

```javascript
const router = require('koa-router')();
const { query } = require('../db/query');

// 一级分类接口
router.get('/oneCategory', async (ctx)=>{
     const result =  await query('select * from category');
     
     // 返回数据
     ctx.body = {
          status:200,
          oneCategoryList:result
     }
});

// 二级分类接口

module.exports = router;
```

app.js注册

```javascript
const category = require('./routes/category');
app.use(category.routes(), category.allowedMethods())
```



### 4.总结

在封装query方法， 参数封装好之后，还需要返回数据给调用者，考虑用函数调用返回一个promise实例， 成功的数据使用resolve



## 4.用MVC结构改写一级分类

### 1.目标

​     我们项目中所有的接口都是按照MVC结构编写, 对已完成的一级分类接口进行改写.

### 2.实现思路

1. controller/category.js   处理逻辑
2. model/category.js 提供数据
3. routes/category.js  导入controller/category.js  中方法



### 3.代码实现

routes/category.js

```javascript
const router = require('koa-router')();
const { oneCategory } = require('../controller/category');

// 一级分类接口
router.get('/oneCategory', oneCategory);

// 二级分类接口


module.exports = router;
```



controller/category.js

```javascript
const { query } = require('../db/query');
const { oneCategory } = require('../model/category');

// 一级分类的业务逻辑处理
module.exports.oneCategory = async (ctx)=>{
    // const result =  await query('select * from category');
    const result = await oneCategory()
    // 返回数据
    ctx.body = {
         status:200,
         oneCategoryList:result
    }
}
```

model/category.js

```javascript
// 一级分类数据层
module.exports.oneCategory = async ()=>{
   return await query('select * from category');
}
```



#### 4.总结

  前端通过ajax调用接口时，会通过路径找到后端代码```routes.get('/api的名称')```,  进入controller层进行业务处理，需要的数据问model层要数据，拿到数据，再进行下一步逻辑，比如直接响应数据给调用者



.env

```javascript
DB_ENV=uat
```

app.js

```javascript
// 启动dotenv
require('dotenv').config()
```



5.使用Node变量配置数据各种环境

1.    我们在开始时用的数据库是开发环境，开发完成需要切换到测试环境, 测试完成需要切换到生产环境
2.   dev:  开发环境    uat:测试环境  prd:生产环境
3.    为了环境切换方便，我们使用doten 实现环境的动态切换
   1. 安装dotenv 
      1. yarn add dotenv 
   2. 在app.js 开启dotenv
   3. 根目录创建.env文件





## 5.二级分类接口

### 1.目标

​     前端点击一级分类列表时，会加载对应(id)的二级分类， 我们完成二级分类接口开发

### 2.实现思路

1. controller层 ， model层 新加二级分类

2. 在routes/category.js 路由导入controller层导出二级分类api

3. 点击一级分类时，需要拿到当前唯一标识id，查询数据库

   

### 3.代码实现

controller/category.js

```javascript
const { oneCategory, twoCategory } = require('../model/category');

// 一级分类的业务逻辑处理
module.exports.oneCategory = async (ctx)=>{
    // const result =  await query('select * from category');
    const result = await oneCategory()
    // 返回数据
    ctx.body = {
         status:200,
         oneCategoryList:result
    }
}


// 二级分类
module.exports.twoCategory = async (ctx) =>{
    // 获取请求参数id    (你点击了一级分类商品中具体哪一个商品)
    const { id } = ctx.request.query;

    console.log(id,'id');
    // 数据查询交给model层   
    const result =  await twoCategory(id);

    ctx.body = {
        status:200,
        twoCategory:result
    }
}
```

model/category.js

```javascript
const { query } = require('../db/query');
// 一级分类数据层
module.exports.oneCategory = async ()=>{
   return await query('select * from category');
}

// 一级分类数据层
module.exports.twoCategory = async (id)=>{
   return await query('select * from brand where id = ?', [id]);
}
```



routes/category.js

```javascript
const router = require('koa-router')();
const { oneCategory,twoCategory } = require('../controller/category');

// 一级分类接口
router.get('/oneCategory', oneCategory);

// 二级分类接口
router.get('/twoCategory', twoCategory);


module.exports = router;
```



db/query.js

```javascript
var mysql = require('mysql');
const {config} = require('./config');

// 配置信息
const dbConfig = config[process.env.DB_ENV]

// 连接数据库配置信息
var pool = mysql.createPool(dbConfig);


//  创建连接   sql：sql语句
module.exports.query = (sql, values) => {
 return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; // not connected!  没有连接上

      // Use the connection   使用连接 发送sql语句到数据库mysql，mysql中的letaodb数据库会执行sql语句，
      // 执行结果 在回调函数中参数二返回
      connection.query(sql, values, function (error, results, fields) {
        // When done with the connection, release it.   没连接上之拿到返回数据的之后，会把当前连接释放掉
        connection.release();

        // Handle error after the release.  抛出异常
        if (error) throw error;

        resolve(results);

        // Don't use the connection here, it has been returned to the pool.
      });
    });
  });
}
```



#### 4.总结

1. ```ctx```是请求和响应对象的上下文， ```ctx.request.query```    访问get请求参数
2. 带参数参数查询的sql   
   1. ‘“select * from 表名  where 字段 = ?”, [获取参数值]



## 6.用户注册

### 1.目标

​	     用户注册接口的开发

###  2.实现思路

1. 创建用户表，并且插入测试数据
2. 按照mvc结构创建对应目录和api接口
3. postman测试接口

### 3.代码实现

controller/users.js

```javascript

const { register } = require('../model/users');
module.exports.register = async (ctx) => {
    // 读取到请求参数
    const { username, password, mobile } = ctx.request.body;

    // 操作数据数据模型层 model
    const result = await register(username, password, mobile)


    ctx.body = {
         status:200,
         msg:'注册成功'
    }
}
```

model/users.js

```javascript
const { query } = require('../db/query'); 
module.exports.register = async ( username, password, mobile ) =>{
   return await query(`insert into user ( username, password, mobile ) values ("${username}", "${password}" , "${mobile}" )`);
}       
```



routes/users.js

```javascript
const router = require('koa-router')()
const { register } = require('../controller/users');

// 自动给当前users接口模块自动加/users
router.prefix('/users')

router.post('/register', register);

module.exports = router

```



### 4.总结

1. post请求，会把请求参数放到请求报文中，get请求是把请求参数放到url地址栏中， post请求比get请求更加安全
2. post请求可以传输的数据量>get请求
3. post请求参数的获取， ```ctx.reques.body```
4. get请求参数的获取， ```ctx.reques.query```







## 1.表单校验

### 1.目标

  我们在开发接口，比如注册，需要提交表单数据，我们前后端都需要做表单校验,服务端校验推荐joi

### 2.实现思路

1. 下载安装joi
   1. yarn add joi
2. 参照官方文档使用joi



#### 3.总结

1.使用joi库做服务端拦截

2.校验成功，插入数据到数据库,否则退出程序，返回用户提示信息



























































