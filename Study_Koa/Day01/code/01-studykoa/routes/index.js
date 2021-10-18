// 1.导入Koa-router包
const Router = require('koa-router');
// 2.调用 Router构造函数 生成 Router实例对象
const router = new Router();

// 3.把homeRouter导入进来
const homeRouter = require('./homeRouter')
// 
const aboutRouter = require('./aboutRouter')

// 4.使用刚才生成的Router实例，把homeRouter挂到router上
router.use(homeRouter.routes(), homeRouter.allowedMethods());


router.use(aboutRouter.routes(), aboutRouter.allowedMethods());

// 5.导出
module.exports = router;