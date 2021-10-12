const cookieparser = require('cookieparser');
export const state = () => {
  return {
    auth: ""
  }
};
export const mutations = {
  updateAuth(state, payload) {
    state.auth = payload;
  }
}
export const actions = {
  nuxtServerInit({
    commit
  }, {
    req
  }) {
    let auth = "";
    // 1.通过cookie判断用户是否已经登录

    if (req.headers.cookie) {
      let parser = cookieparser.parse(req.headers.cookie);a
      console.log(parser);
      auth = parser.auth;

    }

    commit('updateAuth', auth)
  }
}
