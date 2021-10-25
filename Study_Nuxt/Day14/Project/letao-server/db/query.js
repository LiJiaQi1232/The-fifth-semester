const mysql = require('mysql');
const {
  config
} = require('./config')
const dbConfig = config[process.env.DB_ENV]

// console.log( process.env.DB_HOST);
// 连接数据库配置信息
var pool = mysql.createPool(dbConfig)

// 创建连接 sql:sql语句
module.exports.query = (sql, values) => {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; //not connected  没有连接上
      // user the connection  使用连接 发送sql语句到数据库mysql，mysql中的letaodb数据库会执行sql语句
      connection.query(sql, values, function (error, results, fields) {
        // 没连接上之拿到返回数据的之后 ，会把当前连接释放掉
        connection.release();
        // 抛出异常
        if (error) throw error;
        resolve(results)
      })
    })
  })
}