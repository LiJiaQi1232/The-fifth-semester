const router = require('koa-router')()
// 导入girdlist banners sports
const {
  girdlist,
  banners,
  sports
} = require('../controller/index')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })
router.get('/girdlist', girdlist);
router.get('/banners', banners);
router.get('/sports', sports)
module.exports = router