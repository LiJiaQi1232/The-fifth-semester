// 一级分类的业务逻辑
// 导入query查询方法 
const {
  oneCategory,
  twoCategory
} = require('../model/category')
module.exports.oneCategory = async (ctx) => {
  const result = await oneCategory()
  // 返回数据
  ctx.body = {
    status: 200,
    oneCategoryList: result
  }
}


module.exports.twoCategory = async (ctx) => {
  const {
    id
  } = await ctx.request.query;
  // 返回数据
  const result = await twoCategory(id);
  ctx.body = {
    status: 200,
    twoCategory: result
  }
}