import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// 创建一个vue应用
// 1. 导入createApp函数
// 2. 编写一个根组件App.vue，导入进来
// 3. 基于根组件创建应用实例
// 4. 挂载到index.html的#app容器
createApp(App).mount('#app')
