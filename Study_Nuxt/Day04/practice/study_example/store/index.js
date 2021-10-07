export const state=()=>{
  return{
    num:0
  }
}
export const mutations={
  updateNum(state,payload){
    state.num=payload
  }
}