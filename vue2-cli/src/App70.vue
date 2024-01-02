<template>
  <div class="app">
    p70-79:vue列表综合实例：<br/>
    生成id库安装方法：npm i nanoid<br/>
    <hr/>
    <TableContainer></TableContainer>
  </div>
</template>

<script>
//引入组件
import TableContainer from "@/components/70/TableContainer";

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