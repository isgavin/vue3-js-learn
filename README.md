
### 接下来要做的

- 全局总线，mitt
- **axios 二次封装**

```text
响应拦截、请求拦截
统一错误处理
常用接口处理 get post put delete
```

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
- props *父 ===> 子*
- **pinia** *任意组件间*

```text
可以认为 pinia 就是一个特殊的组件，
state 是 data, action 是 function，getter 是 computed，再换成组合式 api 写法，就跟写普通组件的感觉是一样的
先定义 仓库，在 main.js 中引入
创建 stores 文件夹，分别进行存放，
在组件中，引入store文件，通过方法创建 store 对象，然后将 state 和 getter 解构赋值并响应式，action 解构赋值即可
```

#### 有趣的功能

- mmarkdown 渲染
