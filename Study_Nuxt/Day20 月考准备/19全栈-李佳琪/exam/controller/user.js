const {
  register,
  findUserByUserName,
  findByUserInfo
} = require('../model/user')

module.exports.register = async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body
  const isRegister = await findUserByUserName(username)
  console.log(isRegister[0]);
  if (isRegister[0]) {
    return ctx.body = {
      status: 0,
      message: '已注册'
    }
  }
  const results = await register(username, password)
  ctx.body = {
    status: 200,
    message: '注册成功'
  }
}

module.exports.login = async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body
  const results = await findByUserInfo(username, password)
  if (results[0]) {
    return ctx.body = {
      status: 200,
      message: "登录成功"
    }
  } else {
    return ctx.body = {
      status: 0,
      message: "用户或密码输入错误"
    }
  }
}