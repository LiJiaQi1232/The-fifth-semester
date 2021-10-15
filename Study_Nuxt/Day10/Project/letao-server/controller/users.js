const {
  register,
  findUserByUserName,
  findUserInfo

} = require('../model/users')
const {
  crytoPaddword
} = require('../utils/index')
const {
  secret
} = require('../config/index')
const Joi = require('joi')
// 注册
module.exports.register = async (ctx) => {
  // 读取到请求参数
  const {
    username,
    password,
    mobile
  } = ctx.request.body;
  // console.log(ctx.request.body);

  // 校验用户名，密码，手机号
  const schema = Joi.object({
    username: Joi.string().min(4).max(20).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{6,20}$/),
    repeat_password: Joi.ref('password'),
    mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
  });
  // 校验结果对象
  const verify = schema.validate({
    username,
    password,
    mobile
  });
  if (verify.error) {
    ctx.body = {
      status: 0,
      msg: verify.error.details[0].message
    }
    return
  }
  // 查询当前用户是否已注册
  const user = await findUserByUserName(username);
  //已注册
  if (user[0]) {
    return ctx.body = {
      status: 0,
      msg: '你已注册，无需重复注册'
    }
  }
  // 操作数据模型层  
  const result = await register(username, crytoPaddword(password + secret), mobile);

  ctx.body = {
    status: 200,
    msg: '注册成功'
  }

}


module.exports.login = async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body
  // 在数据库查询用户信息是否存在
  const result = await findUserInfo(username, crytoPaddword(password + secret))
  if (result[0]) {
     ctx.body = {
      status: 200,
      msg: '登录成功'
    }
  } else {
    ctx.body = {
      status: 0,
      msg: '登录失败'
    }
  }
}