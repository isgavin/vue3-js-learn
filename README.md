
### 接下来要做的

### 已经复习的技术

#### 基础

- 数据绑定、双向绑定
- 生命周期
- 计算属性
- watch 监听

#### 其他常用

- element-plus 按需自动引入
- 三方动画库

#### Vue 组件间的数据传输

- 路由传参
- props `父 ===> 子`
- **pinia** `任意组件间`
- 全局总线，Pubsub.js `任意组件间`

**使用 Apifox mock 数据**

解决跨域问题，浏览器同源策略的限制，
vite 开启本地node服务器转发
先在 vite 中配置代理，然后请求路径核对好

Apifox 学习
[教程链接](https://www.bilibili.com/video/BV1ae4y1y7bf)

- 前端mock
- 接口测试
- 自动生成文档

#### 有趣的功能

- mmarkdown 渲染
- 姓名添加(copilot 真的牛逼)
- **axios 二次封装**

[vite配置解决跨域](https://cn.vitejs.dev/config/server-options.html)

```text
响应拦截、请求拦截
统一错误处理
常用接口处理 get post put delete
```

常用接口封装思路，有必要封装吗？
无语了，少个 return 接不到数据
