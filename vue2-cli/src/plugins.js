/**插件**/
export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 8)
        })
        //定义全局指令
        Vue.directive('fbind', {
            //指令与元素成功绑定时
            bind(element,binding){
                element.value=binding.value
            },
            //指令所在元素被插入页面时
            inserted(element){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value=binding.value
            }
        })
        //定义混入
        Vue.mixin({
            //往bm上添加数据
            data() {
                return {
                    'plugin-test': '我来自plugins.js中的Vue.mixin.data()',
                }
            },
            methods: {
                //注意：如果在plugins.js中定义了混入，将会覆盖mixin.js
                showId(id) {
                    alert('我来自plugins.js中,id:'+id)
                }
            }
        })
        //在原型上添加方法
        Vue.prototype.hello = () => {
            alert('hello,i am from plugins.js')
        }
    }
}