## 1.用户是否已注册

### 1.目标

​      用户在注册时，调用注册接口，后端需要判断该用户是否已经注册，是，提醒用户已注册，否则，允许注册。

### 2.实现思路

1.  根据用户名查询数据库中用户表中是否存在该用户
2.  在model层，新建```findUserByUserName``` 方法，根据用户名负责查询用户
3.  在controller, 已注册->返回提示信息， 否->校验参数->存入数据库



### 3.代码实现

model/user.js

```javascript
const { query } = require('../db/query'); 

// 用户注册
module.exports.register = async ( username, password, mobile ) =>{
   return await query(`insert into user ( username, password, mobile ) values ("${username}", "${password}" , "${mobile}" )`);
}       


// 用户查询
module.exports.findUserByUserName = async ( username ) => {
   return await query('select * from user where username = ?', [username]);
}
```

controller/user.js

```javascript

const { register, findUserByUserName } = require('../model/users');
const Joi = require('joi');
module.exports.register = async (ctx) => {
    // 读取到请求参数
    const { username, password, mobile } = ctx.request.body;

    // 参数校验 是否合法   不合法返回提示信息  并return 退出
    const schema = Joi.object({
        username: Joi.string().min(4).max(20).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/),
        repeat_password:Joi.ref('password'),
        mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
    });

    const verify =  schema.validate({username, password, mobile });

    // 如果校验不通过，要return
    if (verify.error) {
        ctx.body = {
            status:0,
            message:verify.error.details[0].message
        }

        return;
    }

    // 查询当前用户是否已注册
    const user =  await findUserByUserName(username);

    // 已注册
    if (user[0]) {
        ctx.body = {
            status: 0,
            message:'您已注册,无需重复注册'
        }

       return;
    }
    // 操作数据数据模型层 model
    const result = await register(username, password, mobile)

    ctx.body = {
         status:200,
         message:'注册成功'
    }
}
```

#### 4.总结

​      对于向数据库插入性的操作，譬如：注册， 我们在写注册接口时，还需要对注册用户进行核对，是否已注册，这个功能应该在model写一个方法，查询数据库，是否满足条件， 对于查询结果交给controller层，来决定显示给用户的提示信息。



## 2.用户密码加密

#### 1.目标

​        正规业务，注册的用户，为了保证用户信息的安全型， 一般会对用户密码加密， 加密方式我们可以使用MD5

### 2.实现思路

1. 使用node内置crypto加密模块
   1. 文档地址：https://nodejs.org/dist/latest-v14.x/docs/api/crypto.html
2. 把加密封装成一个功能,  放到utils/index.js ， 导出加密方法
3. 方法完成功能： 根据用户密码+字符串 加密 返回加密后的密文，用户注册时，把密文存入数据库



  utils/index.js

```javascript
const crypto = require('crypto');

// 封装一个加密方法  
// 参数：用户注册的密码 拼接 一个字符串 合并后的字符串
// 返回值： 返回一个Md5加密的密文
module.exports.cryptoPaddword = (password) => {
    return crypto.createHash('MD5').update(password).digest('hex');
}
```

controller/users.js

```javascript

const { register, findUserByUserName } = require('../model/users');
const Joi = require('joi');
const { cryptoPaddword } = require('../utils');
module.exports.register = async (ctx) => {
    // 读取到请求参数
    const { username, password, mobile } = ctx.request.body;

    // 参数校验 是否合法   不合法返回提示信息  并return 退出
    const schema = Joi.object({
        username: Joi.string().min(4).max(20).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/),
        repeat_password:Joi.ref('password'),
        mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
    });

    const verify =  schema.validate({username, password, mobile });

    // 如果校验不通过，要return
    if (verify.error) {
        ctx.body = {
            status:0,
            message:verify.error.details[0].message
        }

        return;
    }

    // 查询当前用户是否已注册
    const user =  await findUserByUserName(username);

    // 已注册
    if (user[0]) {
        ctx.body = {
            status: 0,
            message:'您已注册,无需重复注册'
        }

       return;
    }
    // 操作数据数据模型层 model
    const result = await register(username, cryptoPaddword(password + 'screct'), mobile)

    ctx.body = {
         status:200,
         message:'注册成功'
    }
}
```





### 4.总结

​     根据用户密码拼接字符串生成加密后的密文，存入数据库



## 3.用户登录

#### 1.目标

​    完成登录接口：

​	背景：   

​			用户注册时，譬如注册密码是123456， 由于注册进行了加密，所以用户表里面该用户的密码是加密之后，用户在登录时，我们需要拿到用户密码再一次加密后进行比对，是否一致，决定是否登录成功。

#### 2.实现思路

1.   在controller/users.js  写一个登录方法login  拿到请求参数，用户信息
2.  在model/users.js  查询数据表当前用户信息是否存在
3.  根据查询结果来决定是否登录成功



#### 3.代码实现

controller/users.js

```javascript

const { register, findUserByUserName, findUserInfo } = require('../model/users');
const Joi = require('joi');
const { cryptoPaddword } = require('../utils');
const { secret }= require('../config');

// 注册
module.exports.register = async (ctx) => {
    // 读取到请求参数
    const { username, password, mobile } = ctx.request.body;

    // 参数校验 是否合法   不合法返回提示信息  并return 退出
    const schema = Joi.object({
        username: Joi.string().min(4).max(20).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/),
        repeat_password:Joi.ref('password'),
        mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
    });

    const verify =  schema.validate({username, password, mobile });

    // 如果校验不通过，要return
    if (verify.error) {
        ctx.body = {
            status:0,
            message:verify.error.details[0].message
        }

        return;
    }

    // 查询当前用户是否已注册
    const user =  await findUserByUserName(username);

    // 已注册
    if (user[0]) {
        ctx.body = {
            status: 0,
            message:'您已注册,无需重复注册'
        }

       return;
    }
    // 操作数据数据模型层 model
    const result = await register(username, cryptoPaddword(password + secret), mobile)

    ctx.body = {
         status:200,
         message:'注册成功'
    }
}


// 登录
module.exports.login = async (ctx) => {
    const { username, password  } = ctx.request.body;

    // 在数据库查询用户信息是否有
    const result = await findUserInfo(username, cryptoPaddword(password + secret));

    // 用户是否存在
    if (result[0]) {
        ctx.body = {
            status: 200,
            message: '登录成功'
        }
    }else {
        ctx.body = {
            status:0,
            message:'登录失败，请检查用户名或者密码'
        }
    }

}
```



model/users.js

```javascript
const { query } = require('../db/query'); 

// 用户注册
module.exports.register = async ( username, password, mobile ) =>{
   return await query(`insert into user ( username, password, mobile ) values ("${username}", "${password}" , "${mobile}" )`);
}       


// 用户查询
module.exports.findUserByUserName = async ( username ) => {
   return await query('select * from user where username = ?', [username]);
}


// 登录
module.exports.findUserInfo = async (username, password) =>{
   return await query('select * from user where username = ?  and password = ?', [username, password]);
}  
```



routes/index.js

```javascript
const router = require('koa-router')()
const { register,login} = require('../controller/users');

// 自动给当前users接口模块自动加/users
router.prefix('/users')

// 注册
router.post('/register', register);

// 登录
router.post('/login', login);

module.exports = router

```



### 4.总结

​      用户注册登录，由于密码在数据库是密文的，所以在登录也应该使用传递的密码拼接同一个字符串生成密文，进行比对，决定登录是否成功





## 4.腾讯云短信接入

####   1.目标

​         使用腾讯云提供SDK， 完成短信发送功能

####   2.实现思路

1. 下载安装SDK

   1. ```javascript
      yarn add tencentcloud-sdk-nodejs
      ```

2.  复制粘贴腾讯云给的模板，发送短信



###    3.代码实现

​     controller/sms.js

```javascript

const { sendsms, getRandomByLength } = require('../utils');
module.exports.sendsms = async (ctx) => {
    const { mobile } = ctx.request.body;
    // 短信验证码
    const code = getRandomByLength(6);
    const result = await sendsms(mobile, code);

    // 是否发送成功
    if (result.SendStatusSet[0].Code == 'Ok') {
        ctx.body = {
            status:200,
            data:code,
            message:'短信发送成功'
        }
    }else {
        ctx.body = {
            status:0,
            message:'短信发送失败'
        }
    }
   
}
```

routes/sms.js

```javascript
const router = require('koa-router')();
const { sendsms } = require('../controller/sms.js');


// 发送短信
router.post('/sendsms', sendsms);

module.exports = router;

```



app.js

```javascript
const sms = require('./routes/sms');
app.use(sms.routes(), sms.allowedMethods())
```



#### 4.总结

1. 短信服务通开通后，按照官方提供sdk  代码复制粘贴，相关信息，我们要能使用env   ndoe环境变量做配置
2. 手机号，我们可以通过请求提获取到
3. 验证码，我们需要封装一个工具类, 实现指定位数的随机数





























































