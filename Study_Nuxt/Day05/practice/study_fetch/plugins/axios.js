import axios from "axios";

export default (context, inject) => {
  axios.defaults.baseURL = 'https://cnodejs.org/api/v1';

  // 注入插件
  inject('api', {
    /**
     * 加载主题列表
     * @param {String} path  路径
     * @returns  Promsie 
     */
    getTopics(path) {
      return axios.get(path);
    },
    /**
     * 加载主题详情
     * @param {String} path  路径
     * @returns  Promsie 
     */
    getTopicsDetail(path) {
      return axios.get(path)
    }
  });
}
