// 1.导入koa包
const Koa = require('koa')
// 2.调用koa构造函数 实例化koa实例
const app = new Koa();


// 4. 给浏览器返回响应
app.use(async ( ctx )=>{
  // console.log(ctx.query);
  console.log(ctx.querystring);
  ctx.body = "Hello Koa2";
})

// http://localhost:3000?a=1&b=2&name=zhangsan

// a=1&b=2&name=zhangsan

// 3.给koa实例指定端口
app.listen(3000, ()=> {
  console.log("serve is running at: http://localhost:3000");
})