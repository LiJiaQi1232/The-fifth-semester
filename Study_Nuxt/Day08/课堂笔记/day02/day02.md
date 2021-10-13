## 1.首页接口

### 1.首页宫格接口开发

#### 1.目标  

完成宫格接口的开发

#### 2.实现思路

1. 在路由中index.js 中新增一个接口名为```gridlist```接口
2. 在接口```gridlist``` 返回宫格数据



#### 3.代码实现

routes/index.js  ->首页中用到的接口

```javascript
const router = require('koa-router')()

// 首页宫格数据
router.get('/gridlist', async (ctx) => {
  // 返回给客户端内容
  ctx.body = {
    status: 200,
    gridlist: [
      {
        id: 1,
        img_src: "/images/nav1.png"
      },
      {
        id: 2,
        img_src: "/images/nav2.png"
      },
      {
        id: 3,
        img_src: "/images/nav3.png"
      },
      {
        id: 4,
        img_src: "/images/nav4.png"
      },
      {
        id: 5,
        img_src: "/images/nav5.png"
      },
      {
        id: 6,
        img_src: "/images/nav6.png"
      }
    ]
  }
});

module.exports = router

```



#### 4.总结

只需要在routes/index.js  使用```router.get('/api的名称', 回调) ```, 注意：让新增```api```生效，必须要在app.js 导入注册才可以使用

### 2.MVC设计模式

#### 1.目标

​     MVC是一种后端开发常用的设计模式, 掌握MVC的概念

#### 2.实现思路

1. ​     M：model     model层     提供数据
2. ​     V:    view         视图层        使用model提供的数据，呈现页面
3. ​     C:  controller  控制层       控制Model层，在这里进行逻辑业务的编写

4. ​    优势：低耦合    view层，  model层和controller层  三层彻底分离，  方便维护，降低耦合度



#### 思考：

​     ```mvvm是什么？```

​       MVVM: 是前端非常流行设计思想， 它只是MVC中的View层

```javascript
  M : 提供数据的

  v ： 模板

  vm: 模板和数据的桥梁:  Vue实例化时产生vm
  
  
  const vm = new Vue({
       // m
       data：{
      
       }，
                     
       methods:{
                     
                     
      }
  })
  
 
```



#### 4.总结

1. ```mvc```是后端开发一种架构思想，目的解决控制层，数据层，视图，耦合问题
2. ```mvvm:  是针对mvc中的视图层(v)```     
   1. m:    ```vue```中的data上的数据
   2. v:     模板
   3. ```vm： m和v的桥梁      new Vue({});```



### 3.按照MVC架构思想编写服务端代码

#### 1.目标

​        使用```mvc```结构，完成对首页宫格的接口的改造

#### 2.实现思路

1. 需要把routes/index.js  中```gridlist```接口拆分
2. 用户请求接口时,首先会先进入controller层， 在控制model， 返回数据给前端调用者view
3. controller/index.js  导出一个```gridlist``` 控制宫格数据业务逻辑
4. 在routes/index.js  导入

#### 3.代码实现

1. controller/index.js

   ```javascript
   // 宫格数据的业务控制
   module.exports.gridlist = async (ctx) => {
       // 返回给客户端内容
       ctx.body = {
         status: 200,
         gridlist: [
           {
             id: 1,
             img_src: "/images/nav1.png"
           },
           {
             id: 2,
             img_src: "/images/nav2.png"
           },
           {
             id: 3,
             img_src: "/images/nav3.png"
           },
           {
             id: 4,
             img_src: "/images/nav4.png"
           },
           {
             id: 5,
             img_src: "/images/nav5.png"
           },
           {
             id: 6,
             img_src: "/images/nav6.png"
           }
         ]
       }
     }
   ```

   

  2.routes/index.js

```javascript
const router = require('koa-router')()
const { gridlist } = require('../controller/index');

// 首页宫格数据
router.get('/gridlist', gridlist);

module.exports = router

```

### 4.首页接口：

#### 1.目标

​    首页轮播图接口，运动接口的完成

#### 2.实现思路

1.   我们在路由routes/index.js  新增两个接口  banners  sports
2.   controller目录index.js  分别导出 banners  sports

#### 3.代码实现

routes/index.js

```javascript
const router = require('koa-router')()
const { gridlist,banners,sports  } = require('../controller/index');

// 首页宫格数据
router.get('/gridlist', gridlist);

// 轮播图接口
router.get('/banners', banners);

// 运动专区接口
router.get('/sports', sports);

module.exports = router

```

controller/index.js

```javascript
// 宫格数据的业务控制
module.exports.gridlist = async (ctx) => {
    // 返回给客户端内容
    ctx.body = {
        status: 200,
        gridlist: [
            {
                id: 1,
                img_src: "/images/nav1.png"
            },
            {
                id: 2,
                img_src: "/images/nav2.png"
            },
            {
                id: 3,
                img_src: "/images/nav3.png"
            },
            {
                id: 4,
                img_src: "/images/nav4.png"
            },
            {
                id: 5,
                img_src: "/images/nav5.png"
            },
            {
                id: 6,
                img_src: "/images/nav6.png"
            }
        ]
    }
}

// 首页轮播图
module.exports.banners = async (ctx) => {
    ctx.body = {
        status: 200,
        swipperList: [
            {
                id: 1,
                img_src: "/images/banner1.png",
            },
            {
                id: 2,
                img_src: "/images/banner2.png",
            },
            {
                id: 3,
                img_src: "/images/banner3.png",
            },
            {
                id: 4,
                img_src: "/images/banner4.png",
            },
            {
                id: 5,
                img_src: "/images/banner5.png",
            },
        ]
    }
}

// 首页运动专区
module.exports.sports = async (ctx) => {
    ctx.body = {
        status: 200,
        sports: [
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            },
            {
                name: 'FORUM 84 LOW 新款低帮经典运动鞋',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 899.00
            },
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            },
            {
                name: 'adidas阿迪达斯 男式 场下休闲篮球鞋S83700',
                img: '/images/product.jpg',
                price: 1.00,
                oldPrice: 888.00
            }
        ]
    }
}
```



### 5.一级分类接口用的表

####   1.目标

​      一级分类接口，需要用到分类表category， 我们在letaoDB中创建catogory表，然后插入测试数据

####   2.实现思路

1. 使用create  table () {} 创建表
2. 使用insert into 表名插入测试数据

####   3.代码实现

​        1.category表的创建

```mysql
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,    
  `categoryName` varchar(50) DEFAULT null,  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

```

2. 插入数据

```mysql
insert  into `category`(`id`,`categoryName`) 
values (1,'运动馆'),(2,'女士馆'),(3,'男士馆'),(4,'帆布馆'),(5,'户外管');
```



补充：查询

```mysql
--查询表所有
select * from 表名


-- 查询指定的列
select 列名1， 列名2... from 表名


-- 查询时，给查询字段起别名

select 列名1 as 别名， 列名2 = 别名，  列名3 别名... from 表名

-- 有条件查询
select * from 表名  where 字段名 > 10  and 字段名 < 20

```



#### 4.总结

  	  掌握数据表的查询和插入就可以完成一级分类接口的开发























