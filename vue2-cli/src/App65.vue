<template>
  <div class="app">
    <p>
      p65:vue ref属性:(获取元素或组件信息)<br/>
      1、ref被用来给元素或子组件注册引用信息（docuement.getElementById中id的替代）<br/>
      2、应用在html标签上获取的是真实dom元素，应用在组件标签上获得的是组件实例对像
    </p>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/65/School.vue";

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