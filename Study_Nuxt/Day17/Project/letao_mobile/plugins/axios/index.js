const {
  httpcode
} = require('./httpcode')
import {
  Toast
} from "vant"
// $axios,store, redirect  从context 上下文中拿到
export default function ({
  $axios,
  store,
  redirect
}, inject) {
  // 请求拦截
  $axios.onRequest(config => {
    // 加载loading

    
    // 在请求头中设置token
    // 已登陆
    if (store.state.token) {
      // 后端有开启JWT校验 前端调用接口 需要设置token
      $axios.setHeader('Authorization', `Bearer ${store.state.token}`)
    }
    console.log('Making request to ' + config.url)
    return config;
  })
  // 响应拦截
  $axios.onResponse(res => {
    // 结束loading
    console.log(res.data.message, 'res');
    const {
      status,
      message
    } = res.data;

    // 接口操作失败
    if (!status) {
      Toast(message)
    }
  })
  // 错误拦截
  $axios.onError(error => {
    // http错误码
    const code = parseInt(error.response && error.response.status)
    // console.log(httpcode)
    Toast(httpcode[code])
    // 错误处理
    if (code == 404) {
      redirect('404')
    }
    // 没有权限访问接口
    else if (code == 401) {
      redirect('/my/login')
    }
  })

  // 封装请求方法
  let requestMethod = {};

  ['$get', '$post', '$delete', '$put'].forEach(method => {
    // 区分请求参数 是params 还是data
    // let paramsOrData = method == '$get' || method == '$delete' ? 'params' : 'data';
    // requestMethod[method] = (url, data) => {
    //   return $axios({
    //     method,
    //     url,
    //     [paramsOrData]: data
    //   });
    // }
    requestMethod[method] = (url, data) => {
      return $axios[method](url, data)
    }
  })
  inject('request', requestMethod);
}
