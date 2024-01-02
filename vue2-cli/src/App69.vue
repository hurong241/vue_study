<template>
  <div class="app">
    <div>
      p69:vue scoped样式：<br/>
      应用场景：如果多个组件被同时引用，且存在样同的样式名，会产生冲突<br/>
      效果：加上scoped后,样式所在标签会产生一个随机数，形如：p data-v-71e22880 class="name" <br/>
      本例中的.name样式冲突，加上scoped后解决<br/>
      用法：在组件xx.vue中的style上加scoped,如：'style scoped'<br/>
      <hr/>
    </div>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/69/School.vue";

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