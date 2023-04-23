import request from './request.js'

// 测试

export const test = () => {
  return request({ url: `/api/user/test`, method: 'get' })
}

// 登录
export const userLogin = data =>
  request({ url: `/user/login`, method: 'post', data })

// 注册
