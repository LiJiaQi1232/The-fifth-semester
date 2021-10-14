const {
  register
} = require('../model/users')
const Joi = require('joi')
module.exports.register = async (ctx) => {
  // 读取到请求参数
  const {
    username,
    password,
    mobile
  } = ctx.request.body;

  // 校验用户名，密码，手机号
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,20}$/),
    repeat_password: Joi.ref('password'),
    // 手机号正则
    mobile: Joi.string().pattern(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/)
  })

  // 校验结果对象
  const result=schema.validate({username, password, mobile});
  if(result.error){
    ctx.body={
      status:false,
      msg:result.error.details[0].message
    }
    return
  }
  // 操作数据模型层  
  // cryptoPyd 加密
  await register(username, cryptoPyd(password+secret), mobile);

  ctx.body = {
    status: 200,
    msg: '注册成功'
  }
}