// 1.导入Koa包
const Koa = require('koa');
// 2.使用new 调用koa()构造函数，来创建应用程序
const app = new Koa();

// 4.给浏览器返回响应
// app.use(async (ctx)=>{
//   console.log(ctx);
//   ctx.body="Hello Koa2"
// })

// // 配置路由
// const Router = require('koa-router');
// // 调用Router构造函数 生成路由实例
// const router = new Router();
// // 使用路由实例的 请求方法 接收前端的请求 并返回响应
// router.get('/', async (ctx, next) => {
//   ctx.body = "我是路由/的结果"
// })
// app.use(router.routes());



// 导入刚才声明好的router
const router=require("./routes");
const homeRouter = require('./routes/homeRouter');
// 挂载导入的router
app.use(homeRouter.routes(),homeRouter.allowedMethods());



// 3.监听 指定的 3000 端口
// app.listen(3000);
app.listen(3000, () => {
  console.log("serve is running at:http://localhost:3000");
})