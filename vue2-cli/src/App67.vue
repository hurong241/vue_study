<template>
  <div class="app">
    <div>
      vue mixin混入：<br/>
      场景：如果多个组件中用到同样功能的方法，如：showId(id)<br/>
      可以把这些同样功能的方法抽离出来放到一个js中,如:mixin.js<br/>
      然后
      <hr/>
    </div>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/67/School.vue";

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