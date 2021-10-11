// 1.导入koa-router
const Router = require('koa-router');
// 2.调用Router构造函数 生成Router实例
const router = new Router();
// 3. 把homeRouter导入进来
import homeRouter from './homeRouter';
// 4.使用刚才生成的Router实例，把homeRouter挂到router上
router.use(homeRouter.routes(),homeRouter.allowedMethods());
// 5.导出
module.exports=router;