const {
  query
} = require("../db/query")
module.exports.register = async (username, password, mobile) => {
  return await query(`insert into user (username,password,mobile) values ("${username}","${password}","${mobile}" )`)
}

// 用户查询
module.exports.findUserByUserName = async (username) => {
  return await query('select * from user where username=?', [username])
}
// 用户信息查询
module.exports.findUserInfo = async (username, password) => {
  return await query('select * from user where username=? and password=?', [username, password])
}