// 1.导入koa包
const Koa = require('koa')
// 2.调用koa构造函数 实例化koa实例
const app = new Koa();
const path = require('path');

const Router = require('koa-router');
const static = require('koa-static');

const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))

const router = new Router();


router.get("/", async (ctx) => {
  ctx.body = "Hello Koa211";
})

app.use(router.routes());

// http://localhost:3000/static/main.css
// 4. 给浏览器返回响应
// app.use('/',async ( ctx )=>{
//   ctx.body = "Hello Koa2";
// })

// 3.给koa实例指定端口
app.listen(3000, ()=> {
  console.log("serve is running at: http://localhost:3000");
})