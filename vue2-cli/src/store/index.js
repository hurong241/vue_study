//该文件用于创建vuex中最为核心的store
//引入vue及vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//准备actions：用户响应组件里面的动作
//注意：对数据的操作要放到mutations中，如果放在actions中开发者工具监测不到数据的变化,actions中只做逻辑判断
const actions = {
    //App105.vue例子
    //context:上下文，一个迷你的store
    jia(context, value) {
        console.log('vuex:src/store/index.js中的actions中的jia()被调用')
        //调用mutations中的JIA
        context.commit('JIA', value)
    }
}
//准备mutations：用户操作数据state
//注意：对数据的操作要放到mutations中，如果放在actions中开发者工具监测不到数据的变化
const mutations = {
    //App105.vue例子
    JIA(state, value) {
        console.log('vuex:src/store/index.js中的mutations中的JIA()被调用')
        state.sum += value
    }
}
//准备state:用于存储数据
const state = {
    sum: 0,//App105.vue例子中的求和结果
    school:'清华',
    subject:'计算机',
    subjectEnglish:'英语',
    history:'历史',
    persons:[
        {id: 1, name: '李四', sex: '男', age: 39},
        {id: 2, name: '王五', sex: '女', age: 42},
    ],
}
//准备getters（非必须）:将state中的数据加工
const getters={
    bigSum(state){
        return state.sum*10
    }
}
//创建store
const store = new Vuex.Store({
    //名称一样时可以简写为不要:后面的,如:action
    actions: actions,
    mutations: mutations,
    state: state,
    getters,//简写形式
})
export default store