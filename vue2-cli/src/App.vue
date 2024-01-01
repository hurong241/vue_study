<template>
  <div class="app">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
//引入组件
import School from "./components/62/School.vue";
import Student from "./components/62/Student"

export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>
.app {
  background-color: #999;
  padding: 10px;
}
</style>