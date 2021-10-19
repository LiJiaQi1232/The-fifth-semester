module.exports.config = {
  dev: {
    connectionLimit: 10, //最大连接数
    host: 'localhost', //主机
    user: 'root', //用户名
    password: 'root', //密码
    database: 'letaodb' //

  },
  uat: {
    connectionLimit: 10, //最大连接数
    host: 'localhost', //主机
    user: 'root', //用户名
    password: 'root', //密码
    database: 'letaodb' //
  },
  prd: {
    connectionLimit: 10, //最大连接数
    host: 'localhost', //主机
    user: 'root', //用户名
    password: 'root', //密码
    database: 'letaodb' //
  }
}