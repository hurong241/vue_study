/**
 * mixin:多个组件中相同功能的方法可以提取到这里实现共用
 * 注意：如果在plugins.js中定义了混入，将会覆盖mixin.js
 */
export const mixin = {
    data() {
        return {
            'mixin-test': '我来自mixin.js中的data()'
        }
    },
    methods: {
        showId(id) {
            alert('我来自mixin.js中,id:'+id)
        }
    }
}