const router = require('koa-router')()
// 导入
const {oneCategory,twoCategory}=require('../controller/category')



router.get('/oneCategory',oneCategory)
router.get('/twoCategory',twoCategory)

module.exports = router