<template>
  <div>
    <!--语法检查：所有有模板内容都应该放在最外层的div内-->
    <p>id：{{ school.id }}</p>
    <!--调用插件plugins.js中定义的全局过滤器-->
    <p>用plugins中的过滤器过滤名称：{{ school.name| mySlice }}</p>
    <p>地址：{{ school.address }}</p>
    <p>用plugins中的全局指令生成一个input并获得焦点：<input type="text" v-fbind:value="school.name"></p>
    <button @click="showId(school.id)">弹出id</button>
    <button @click="hello">原型上的hello</button>
  </div>
</template>

<script>
import {mixin} from "@/mixin";

export default {
  name: 'MySchool',//名称格式示例要2个词组成首字母大写：MySchool
  components: {},
  data() {
    return {
      school: {
        'id': '001',
        'name': '清华大学好长啊，用plugins中的过滤器，只要前面4个字符',
        'address': '北京'
      }
    }
  },
  mixins: {mixin},
}
</script>

<style>

</style>