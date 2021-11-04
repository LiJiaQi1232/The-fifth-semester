const {
  oneCategory
} = require('../model/category')
module.exports.oneCategory = async (ctx) => {
  const results = await oneCategory()
  ctx.body = {
    status: 200,
    oneCategoryList: results
  }
}
