const {
  query
} = require('../db/query')
module.exports.register = async (username, password) => {
  return await query(`insert into user (username,password) values ("${username}","${password}") `)
}
// 判断用户是否已经存在
module.exports.findUserByUserName = async (username) => {
  return await query(`select * from user where username=?`, [username])
}
// 登录
module.exports.findByUserInfo = async (username, password) => {
  return await query(`select * from user where username=? and password`, [username, password])
}