<template>
  <div>
    <!--语法检查：所有有模板内容都应该放在最外层的div内-->
    <p>名称：{{ school.name }}</p>
    <p>地址：{{ school.address }}</p>
    <hr/>
    <!--
    通过组件传参:
    假如接收方显示count等于此处传过去的count+1,则要在count前加:号，
    不然传过去的是个字符，计算错误,如：传的2，期望结果是2+1=3，实际显示的是字符串21
    测试结果是如果传的不是string貌似都要加:
    -->
    <Student className="二年级" :count="count" :students="students"></Student>
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
      count:3,
      school: {
        'name': '清华',
        'address': '北京'
      },
      students: [
        {id: 1, name: '李四', sex: '男', age: 39},
        {id: 2, name: '王五', sex: '女', age: 42},
        {id: 3, name: '张三', sex: '女', age: 32},
      ]
    }
  },
  methods: {}
}
</script>

<style>

</style>