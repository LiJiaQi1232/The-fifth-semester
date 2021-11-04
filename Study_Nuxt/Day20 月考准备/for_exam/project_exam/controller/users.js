const {
  register,
  findUserByUserName,
  findUserInfo
} = require('../model/users')
// 表单校验
const Joi = require('joi');

module.exports.register = async (ctx) => {
  // 读取请求参数
  const {
    username,
    password,
    mobile
  } = ctx.request.body;
  // 校验数据
  const schema = Joi.object({
    username: Joi.string().min(4).max(30).required(),
    password: Joi.string().pattern(new('^[a-zA-Z0-9]{3,30}$')),
    mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
  })
  const verify = schema.validate({
    username,
    password,
    mobile
  });
  // 如果校验不通过 要return
  if (verify.error) {
    ctx.body = {
      status: 0,
      message: verify.error.details[0].message
    }
    return
  }

  //查询当前用户是否已注册
  const user = await findUserByUserName(username); //'zs' 为true 提示无需重复注册 '' 为false 
  if (user[0]) {
    ctx.body = {
      status: 0,
      message: '您已注册，无需重复注册'
    }
  }

  // 操作数据数据模型层 model
  const result = await register(username, password, mobile)
  ctx.body = {
    status: 200,
    msg: "注册成功"
  }
}

// 登录
module.exports.login = async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body;
  // 在数据块中查询用户信息是否存在
  const result = await findUserInfo(username, password);
  if (result[0]) {
    ctx.body = {
      status: 200,
      message: '登录成功'
    }
  } else {
    ctx.body = {
      status: 0,
      message: '登录失败，请检查用户名或者密码'
    }
  }
}