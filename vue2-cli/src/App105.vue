<template>
  <div class="app">
    p105-113:vuex安装及多组件共享实例:<br/>
    在vue中实现集中式状态、数据管理的一个vue插件<br/>
    多个组件的共享状态进行集中式管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信<br/>
    什么时候用vuex:<br/>
    1、多个组件依赖于同一状态<br/>
    2、来自不同组件的行为需要变更同一状态<br/>
    安装vuex:<br/>
    npm i vuex(注意这样是安装的最新版本，vue2中只能用vuex3,vue3中用vuex4)<br/>
    目前用和vue2,则安装命令为:npm i vuex@3
    使用vuex:<br/>
    1、main.js中:import Vuex from 'vuex'<br/>
    2、Vue.use(Vuex)<br/>
    3、新建目录及文件:/src/store/index.js(官方推荐)或/src/vuex/store.js<br/>
    <hr/>
    <h1>当前求和结果为:{{ $store.state.sum }}</h1>
    <h1>调用getters当前求和*10结果为:{{ $store.getters.bigSum }}</h1>
    <h1>调用mapGetters当前求和*10结果为:{{ bigSum }}</h1>
    <h3>我的:{{ school }},学习:{{ $store.state.subject }}</h3>
    <h3>我的:{{ school }},学习:{{ xuexiao }}、{{ history }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button @click="increment">加-methods方式</button>
    <!--mapActions要传参-->
<!--    <button @click="increment(n)">加-mapAction要传参</button>-->
    <button @click="increment1">加-跳过vuex的action环节</button>
    <!--mapMutations要传参-->
<!--    <button @click="increment1(n)">加-mapMutations要传参</button>-->
    <h3>下方组件共有:{{persons.length}}个学生</h3>
    <hr/>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
//这几个是为了简少computed和methods中代码量
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import MyStudent from "@/components/114/Student";
export default {
  name: 'App',
  components: {MyStudent},
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    //计算属性实现简单的插值语法
    school() {
      return this.$store.state.school
    },
    //借助mapState生成计算属性，从state中读取数据
    ...mapState({xuexiao: 'subjectEnglish'}),
    //名称一样时简写形式
    ...mapState(['history','persons']),
    //mapGetters读getters,简写形式同mapState
    ...mapGetters({bigSum: 'bigSum'})
  },
  methods: {
    /************************以下用dispatch时**********************/
    //不要在methods中调用vuex的方法中写逻辑，统一写到store/index.js中，提高代码复用性
    increment() {
      //调用vuex的dispatch
      this.$store.dispatch('jia', this.n)
    },
    // ...mapActions({increment:'jia'}),
    /************************以下用commit时**********************/
    increment1(){
      //如果action中的方法没有什么逻辑，可以跳转，直接调mutations中的方法
      //注意名称
      this.$store.commit('JIA',this.n)
    },
    //this.$store.commit可以用这种方式，但注意绑定方法的时候要传参，不然传过去的是个鼠标事件
    // ...mapMutations({increment1: 'JIA'})
  }
}
</script>

<style scoped>

</style>