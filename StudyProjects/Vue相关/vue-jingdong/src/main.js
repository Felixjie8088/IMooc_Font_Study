import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 处理各个浏览器之间的css差异
import 'normalize.css'
// 基础样式
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')
