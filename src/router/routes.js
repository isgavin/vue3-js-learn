import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue' // AboutView.vue
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/data',
    component: () => import('../views/DataCom.vue'),
    props: {
      user: {
        id: 1,
        name: 'Gavin',
        age: 30,
        email: '123456@qq.com'
      }
    }
  },
  {
    path: '/router',
    component: () => import('../views/RouterData.vue'),
    props: {
      user: {
        id: 1,
        name: 'Gavin',
        age: 30,
        email: '123456@qq.com'
      }
    }
  }
]

export default routes
