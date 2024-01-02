<template>
  <div class="app">
    <div>
      vue 插件plugins：<br/>
      可以在其中定义全局过滤器、全局指令、混入、在原型上添加方法等
      <hr/>
    </div>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/68/School.vue";

export default {
  name: 'App',
  components: {
    School,
  }
}
</script>

<style>
.app {
  background-color: #999;
  padding: 10px;
}
</style>