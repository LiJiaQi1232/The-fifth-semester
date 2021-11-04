const router = require('koa-router')()
// 导入
const {
  list,
  addGoods,
  delGoods
} = require('../controller/goods')
router.prefix('/goods')
// 注册路由
router.get('/list', list)
router.post('/addGoods', addGoods)
router.post('/delGoods', delGoods)
module.exports = router;