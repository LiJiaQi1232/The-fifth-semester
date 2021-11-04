const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'exam'
})

module.exports.query = (sql, values) => {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err; //没有连接
      connection.query(sql, values, function (error, results, fieled) {
        connection.release();
        if (error) throw error;
        resolve(results)
      })
    })
  })
}