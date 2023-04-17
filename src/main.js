import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(pinia) // pinia
app.use(router)
app.use(ElementPlus)
app.mount('#app')
