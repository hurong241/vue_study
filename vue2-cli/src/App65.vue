<template>
  <div class="app">
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