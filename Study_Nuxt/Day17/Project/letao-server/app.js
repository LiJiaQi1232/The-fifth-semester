const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
// 用于解析token
const jwt = require('koa-jwt');
// 导入加密字符串 
const {
  jwtSecret
} = require('./config')
// 启动dotenv
require('dotenv').config()
// 加载路由
const index = require('./routes/index')
const users = require('./routes/users')
const category = require('./routes/category')
const sms = require('./routes/sms')

// error handler  错误处理
onerror(app)

// 使用koa-jwt中间件 用于拦截客户端在调用服务端接口时 若请求头中没有设置token 直接返回401（无权限方位）
app.use(function (ctx, next) {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource,use Anthorization header to get access'
    } else {
      throw err;
    }
  })
})
// 设置哪些接口需要token
// jwt (加密信息) 加密信息一定要跟token生成使用加密字符串保持一致
// unless 排除哪些不需要在请求带token
app.use(jwt({
  secret: jwtSecret
}).unless({
  path: [/^\/public/, /^\/users\/register/, /^\/users\/login/, /^\/sendsms/]
}));

// middlewares  中间件
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger 记录操作日志
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes 注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(category.routes(), category.allowedMethods())
app.use(sms.routes(), sms.allowedMethods())


// error-handling一旦监听到异常，打印看到报错信息
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;