export const state = () => {
  return {
    count: 0
  }
}

// 定义mutations 完成数据的同步修改
export const mutations={
  // 同步加
  increment(state,payload){
    state.count+=payload
  }
}
// 定义actions 完成数据的异步修改
export const actions={
  // 异步加
  asyncIncrement({commit},payload){
    console.log(commit);
    setTimeout(function(){
      commit('increment',payload)
    },100 )
  }
}