const {oneCategory,twoCategory}=require('../model/category')

// 一级分类的业务逻辑处理
module.exports.oneCategory=async(ctx)=>{
  const result=await oneCategory();
  // 返回数据
  ctx.body={
    status:200,
    oneCategoryList:result
  }
}

// 二级分类的业务逻辑处理
module.exports.twoCategory=async(ctx)=>{
  // 获取请求参数id 
  const {id}=ctx.request.query;
  // 数据查询交给model层
  const result=await twoCategory(id);
  ctx.body={
    status:200,
    twoCategoryList:result
  }
}