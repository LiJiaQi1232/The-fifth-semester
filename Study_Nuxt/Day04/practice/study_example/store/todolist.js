export const state = () => {
  return {
    list: [10, 20, 30, 40]
  }
}
export const mutations = {
  updateList(state,payload) {
    state.list.push(payload)
  }
}
