const {
  query
} = require('../db/query')

module.exports.list = async () => {
  return await query('select * from goods')
}
module.exports.addGoods = async (name, desc, price, img, id) => {
  return await query(`insert into goods (product_name,product_desc,product_price,product_img,id) values ("${name}","${desc}","${price}","${img}","${id}")`)
}
module.exports.delGoods = async (id) => {
  return await query(`delete from goods where id=?`, [id])
}