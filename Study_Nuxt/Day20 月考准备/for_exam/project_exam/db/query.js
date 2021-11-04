var mysql = require('mysql');
var pool = mysql.createPool({
  // connectionLimit: 10, //最大连接数
  // host: 'localhost', //主机
  // user: 'root', //用户名
  // password: '123456', //密码
  // database: 'for_exam' //数据库名称
  connectionLimit: 10, // 最大连接数
  host: 'localhost', // 主机
  user: 'root', // 用户名
  password: 'root', // 密码
  database: 'letaodb' // 数据库名称
});

// 创建连接
module.exports.query = (sql,values) => {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(sql,values, function (error, results, fields) {
        connection.release();
        if (error) throw error;
        // console.log(results,'results');
        resolve(results)
      })
    })
  })
}