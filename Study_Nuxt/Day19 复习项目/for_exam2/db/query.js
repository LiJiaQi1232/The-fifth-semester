var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'letaodb'
})

module.exports.query = (sql, values) => {
  return new Promise(function (resolve, reject) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(sql, values, function (error, results, fields) {
        connection.release();
        if (error) throw error;
        resolve(results)      })
    })
  })
}