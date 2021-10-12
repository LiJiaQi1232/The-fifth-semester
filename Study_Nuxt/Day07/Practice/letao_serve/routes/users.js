const router = require('koa-router')()

// 自动给当前users接口模块自动加/users
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response66666'
})

module.exports = router
