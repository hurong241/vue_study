<template>
  <div class="app">
    p70-79:vue列表综合实例：全局事件总线实现<br/>
    生成id库安装方法：npm i nanoid<br/>
    实现方法：main.js中在beforeCreate()中定义全局事件总线$bus<br/>
    其它组件的通讯都通过它来实现，现当于一个中转角色<br/>
    它不再需要props,是比较常用的通讯方法
    <hr/>
    <TableContainer></TableContainer>
  </div>
</template>

<script>
//引入组件
import TableContainer from "@/components/86/TableContainer";

export default {
  name: 'App',
  components: {
    TableContainer
  },
}
</script>

<style>
.app {
  background-color: #dedede;
  padding: 10px;
  width: 60%;
  margin:0 auto;
}
</style>