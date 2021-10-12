// 1.导入 koa-router
const Router = require('koa-router');
// 2.调用 Router构造函数 生成 Router实例对象
const homeRouter =  new Router({
  // 路由标识符的前缀
  prefix: "/home"
})

// 3.用Router实例对象调用请求方法，接收前端请求，并处理响应
homeRouter.get("/", async (ctx, next) => {
  ctx.body = "home页面"
})

// 4.导出

module.exports = homeRouter;