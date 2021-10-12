// 1.导入koa包
const Koa = require('koa')
// 2.调用koa构造函数 实例化koa实例
const app = new Koa();


// 4. 给浏览器返回响应
// app.use(async ( ctx )=>{
//   console.log(ctx);
//   ctx.body = "Hello Koa2";
// })


// 配置路由
// const Router = require('koa-router');
// 调用Router构造函数 生成路由实例
// const router = new Router();
// // 使用路由实例的 请求方法 接收前端的请求 并返回响应
// router.get('/', async (ctx, next)=>{
//   ctx.body = "我是路由 / 的结果";
// })

// app.use(router.routes())


// 导入刚才声明好的router
const router = require('./routes')
// 挂载导入的router
app.use(router.routes(), router.allowedMethods())
// 3.给koa实例指定端口
app.listen(3000, ()=> {
  console.log("serve is running at: http://localhost:3000");
})