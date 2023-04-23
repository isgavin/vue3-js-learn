import axios from 'axios' //引入axios
import router from '../router' //引入路由

// 设置 axios 请求格式
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = axios.create({
  timeout: 5000
})
// 根据环境，设置请求前缀
if (process.env.NODE_ENV === 'development') {
  service.baseURL = 'https://mock.apifox.cn/m1/2618775-0-default/api'
} else if (process.env.NODE_ENV === 'production') {
  service.baseURL = 'http://rap2api.taobao.org/app/mock/310202/api'
}

// 请求拦截器
service.interceptors.request.use(
  config => {
    let needAuthentication = config.needAuthentication // 获取 axios对象 中的 needAuthentication 属性
    // 设置令牌
    if (needAuthentication && getToken()) {
      config.headers['token'] = getToken()
    }
    return config
  },
  error => {
    // 请求错误处理
    console.error(error)
    Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    const code = response.data.code || 200 // 获取服务器响应的数据中的状态码
    //状态码200 直接返回数据
    if (code === 200) {
      return response.data.data
    }

    // 这个 errorCode 对象是自己定义的，用来存储错误码和错误信息的对应关系
    const msg = errorCode.get(code)
    if (code === 401) {
      // 401, token失效 路由跳转到登录页面
      alert('登录失效，请重新登录')
      router.replace('/login')
    } else if (msg) {
      alert(msg)
    } else {
      alert(response.data.msg || '发生了未知错误')
    }

    return Promise.reject('error') // 跳转到 promise 的 error 回调
  },
  error => {
    // 响应错误处理
    const { status } = error.response
    if (status === 401) {
      alert('需要登录后才能继续当前操作哦')
    } else if (status === 403) {
      alert('用户权限不足，无法执行当前操作')
    } else if (status === 404) {
      alert('请求的资源不存在哦')
    } else if (status >= 500) {
      alert('服务器出现异常啦')
    }

    return Promise.reject(error)
  }
)

export default service
