
const cookieparser = require('cookieparser');

export const state = ()=>{
     return {
         auth:''
     }
}


export const mutations = {
     updateAuth (state, payload) {
         state.auth = payload
     }
}


export const actions = {
    // 1. 让vuex的用户信息数据持久化存储
    nuxtServerInit ({commit}, { req }) {
        
        let auth = '';
        // 1.通过cookie 判断用户是否已经登录
        if (req.headers.cookie) {
            let parser = cookieparser.parse(req.headers.cookie);
            // 修改auth
            auth = parser.auth;
        }
        commit('updateAuth', auth);
    }
}

