<template>
  <div class="app">
    <div>
      p80-83:组件间通讯方法2-自定义事件实现：<br/>
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