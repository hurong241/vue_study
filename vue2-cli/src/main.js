//引入Vue
import Vue from 'vue'
//引入组件
import App from './App102.vue'
//引入插件
import plugins from './plugins'
//关闭生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(plugins)
//创建vm
new Vue({
    render: h => h(App),
    //全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
