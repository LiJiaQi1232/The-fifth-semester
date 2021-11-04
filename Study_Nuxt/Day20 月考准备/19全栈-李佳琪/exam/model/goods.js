const {
  query
} = require('../db/query')

module.exports.list = async () => {
  return await query('select * from goods')
}
module.exports.addGoods = async (name, desc, price, img) => {
  return await query(`insert into goods (product_name,product_desc,product_price,product_img) values ("${name}","${desc}","${price}","${img}")`)
}
module.exports.delGoods = async (id) => {
  return await query(`delete from goods where id=?`, [id])
}