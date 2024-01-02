<template>
  <div class="app">
    <div>
      vue props属性：组件间参数传递及数据验证<br/>
      场景：如A写了一个组件，B也想用，但是参数不一样，那B用A组件的时候可以传参过去<br/>
      eg:这里有个school.vue中要用到student.vue,但是学生所在班级不同，需要传数据过去<br/>
      注意：此时student.vue中不能定义data,它的数据从props接收<br/>
      <hr/>
    </div>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from "./components/66/School.vue";

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