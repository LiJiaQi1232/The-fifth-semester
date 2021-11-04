const {
  list,
  addGoods,
  delGoods
} = require('../model/goods')
module.exports.list = async (ctx) => {
  const result = await list()
  ctx.body = {
    status: 200,
    res: result
  }
}
// 添加
module.exports.addGoods = async (ctx) => {
  console.log(ctx.request.body, '1111111111');
  const {
    product_name,
    product_desc,
    product_price,
    product_img
  } = ctx.request.body
  const results = await addGoods(product_name,
    product_desc,
    product_price,
    product_img)

  ctx.body = {
    status: 200,
    message: '添加成功'
  }
}

// 删除
module.exports.delGoods = async (ctx) => {
  const {
    id
  } = ctx.request.body
  const results = await delGoods(parseInt(id));
  ctx.body = {
    status: 200,
    message: '删除成功'
  }
}
// 更新
module.exports.update=async(ctx)=>{
  
}