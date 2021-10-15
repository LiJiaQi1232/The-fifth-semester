
const { register } = require('../model/users');
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


    // 操作数据数据模型层 model
    const result = await register(username, password, mobile)


    ctx.body = {
         status:200,
         msg:'注册成功'
    }
}