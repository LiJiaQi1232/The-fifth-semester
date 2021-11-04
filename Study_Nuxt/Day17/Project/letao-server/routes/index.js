const router = require('koa-router')()
const {
  gridlist,
  banners,
  sports
} = require('../controller/index')
// 宫格数据
router.get('/gridlist', gridlist)
// 轮播图数据
router.get('/banners', banners)
// 运动专区
router.get('/sports', sports)

module.exports = router