<template>
  <div>
    <!--语法检查：所有有模板内容都应该放在最外层的div内-->
    <p>id：{{ school.id }}</p>
    <p class="name">名称：{{ school.name }}</p>
    <p>地址：{{ school.address }}</p>
    <button @click="showId(school.id)">弹出id</button>
    <hr/>
    <Student></Student>
  </div>
</template>

<script>
import Student from './Student.vue'
import {mixin} from "@/mixin";

export default {
  name: 'MySchool',//名称格式示例要2个词组成首字母大写：MySchool
  components: {
    Student
  },
  data() {
    return {
      school: {
        'id': '001',
        'name': '清华',
        'address': '北京'
      }
    }
  },
  methods: {
    //提到mixin.js中去了
    // showId(value) {
    //   alert(value)
    // }
  },
  //混入：如果多个组件中有相同功能的方法，可以移到mixin中实现共用
  mixins: [mixin],
}
</script>

<style scoped>
.name{
  font-size:60px;
  color:blue;
}
</style>