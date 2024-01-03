<template>
  <div class="app">
    <div>
      p80-83:组件间通讯方法2-自定义事件实现：<br/>
      通过组件上传参，并自定义事件方法名传给子组件，<br/>
      子组件通过$emit触发自定义事件,$off销毁自定义事件实现通讯<br/>
      如果要用原生事件要加上修饰符native,如：@click.native，否则它就是一个算义的click事件<br/>
      <hr/>
    </div>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/80/School.vue";

export default {
  name: 'App',
  components: {
    School,
  },
  methods:{
  }
}
</script>

<style>
.app {
  background-color: #dedede;
  padding: 10px;
}
</style>