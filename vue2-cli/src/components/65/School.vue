<template>
  <div>
    <!--语法检查：所有有模板内容都应该放在最外层的div内-->
    <p ref="name">名称：{{ name }}</p>
    <p>地址：{{ address }}</p>
    <hr/>
    <Student ref="student"></Student>
    <div><button @click="show">获得引用信息</button></div>
  </div>
</template>

<script>
import Student from './Student.vue'

export default {
  name: 'MySchool',//名称格式示例要2个词组成首字母大写：MySchool
  components: {
    Student
  },
  data() {
    return {
      'name': '清华',
      'address': '北京'
    }
  },
  methods: {
    show() {
      //功能类似于document.getElementById
      console.log(this.$refs.name)
      console.log(JSON.stringify(this.$refs.student.students))
    }
  }
}
</script>

<style>

</style>