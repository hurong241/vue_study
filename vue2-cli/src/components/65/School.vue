<template>
  <div>
    <!--语法检查：所有有模板内容都应该放在最外层的div内-->
    <p>
      p65:vue ref属性:(获取元素或组件信息)<br/>
      1、ref被用来给元素或子组件注册引用信息（docuement.getElementById中id的替代）<br/>
      2、应用在html标签上获取的是真实dom元素，应用在组件标签上获得的是组件实例对像
    </p>
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
      console.log(this.$refs.name)
      console.log(this.$refs.student)
    }
  }
}
</script>

<style>

</style>