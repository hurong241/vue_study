//引入Vue
import Vue from 'vue'
//引入组件
import App from './App105.vue'
//引入插件
import plugins from './plugins'
//引入store
import store from './store/index.js'
//关闭生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(plugins)

//创建vm
const vm = new Vue({
    el: '#app',
    render: h => h(App),
    store: store,//简写store
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})
console.log(vm)