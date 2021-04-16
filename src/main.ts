/**
 * 这是一个主入口文件，也就是vue2的main.js
 */
/**
 * 引入createApp函数，创建对应的应用，产生应用的实例对象
 */
import {createApp} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/**
 * 创建App应用返回对应的实例对象并调用use().mount()方法进行挂载
 * use支持链式调用，可以一直.use
 */
createApp(App).use(store).use(router).mount('#app')
