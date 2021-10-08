// 存储公共数据
export const state = () => {
     return {
         count:0
     }
}


// 定义mutations  完成数据的同步修改
export const mutations = {
    // 同步加
    increment (state, payload) {
        // state.count ++;
        state.count += payload;
    },

    // 修改随机数
    updateRandom (state, payload) {
        state.count = payload;
    }
}

// 定义actions  完成数据的异步修改
export const actions = {
    // context= { commit }
    asyncIncrement ({ commit  }, payload) {
        setTimeout(function () {
            // 完成数据修改 最终要落实到mutations中的方法完成修改
            commit('increment', payload);
        }, 1000);
    }
}