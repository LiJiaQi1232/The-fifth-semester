const {
  query
} = require("../db/query")

module.exports.oneCategory = async () => {
  return await query('select * from category')
}
module.exports.twoCategory = async (id) => {
  return await query('select * from brand where categoryId=?', [id])
}