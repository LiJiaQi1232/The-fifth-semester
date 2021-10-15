const router = require('koa-router')()
const { register } = require('../controller/users');

// 自动给当前users接口模块自动加/users
router.prefix('/users')

router.post('/register', register);

module.exports = router
