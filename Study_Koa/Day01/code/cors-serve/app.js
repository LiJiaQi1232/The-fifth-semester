// 1.导入koa包
const Koa = require('koa')
const cors = require('koa2-cors');

// 2.调用koa构造函数 实例化koa实例
const app = new Koa();
// const path = require('path');

app.use(cors());
const Router = require('koa-router');
// const static = require('koa-static');

// const staticPath = './static'

// app.use(static(
//   path.join( __dirname,  staticPath)
// ))

const router = new Router();


router.get("/", async (ctx) => {
  ctx.body = [
    {
      id: 1,
      name: 'zs',
      age: 18,
    },
    {
      id: 2,
      name: 'ls',
      age: 20,
    },
    {
      id: 3,
      name: 'ww',
      age: 24,
    }
  ];
})

app.use(router.routes());

// 3.给koa实例指定端口
app.listen(3000, ()=> {
  console.log("serve is running at: http://localhost:3000");
})