const router = require('koa-router')()
// 导入
const {
  register,
  login
} = require('../controller/user')
router.prefix('/users')
// 注册路由
router.post('/register', register)
router.post('/login', login)
module.exports = router