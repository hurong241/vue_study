<template>
  <div>
    <!--通过自定义事件接收到来自Student子组件的数据-->
    School.vue收到来自Student.vue中的数据为：{{students}},{{other}}
    <hr/>
    <!--语法检查：所有有模板内容都应该放在最外层的div内-->
    <p>id：{{ school.id }}</p>
    <p>名称：{{ school.name }}</p>
    <p>地址：{{ school.address }}</p>
    <button @click="showId(school.id)">弹出id</button>
    <hr/>
    <!--这里传递了一个自定义事件myEventDemo到Student.vue,传递过去后将保存组件实例的$emit中-->
<!--    <Student v-on:myEventDemo="myEventDemo"></Student>-->
    <!--自定义事件：简写形式-->
<!--    <Student @myEventDemo="myEventDemo"></Student>-->
    <!--自定义事件：简写形式.只能用一次-->
    <!--    <Student @myEventDemo.once="myEventDemo"></Student>-->
    <!--自定义事件第二种实现方法：ref+$mount-->
<!--    <Student ref="student"></Student>-->
    <!--这里看似是click事件，事实是一个叫做click的自定义事件-->
<!--    <Student ref="student" @click="show()"></Student>-->
    <!--如果要用原生的click事件要加上修饰符native,它会把这个事件叫给student组件的最外层容器，这也是为什么语法检查时如果组件内容不允许放在最外层容器外的原因-->
        <Student ref="student" @click.native="show()"></Student>
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
      school: {
        'id': '001',
        'name': '清华',
        'address': '北京'
      },
      students:'',
      other:'',
    }
  },
  methods: {
    //自定义事件实现方法1：接口来自Student中的数据
    myEventDemo(data,...params){
      this.students=data
      this.other=params
      console.log(params)
    },
    show(){
      alert(1)
    }
  },
  mounted() {
    //自定义事件，实现方法2，更灵活：本例3秒后这个事件才可以用
   // setTimeout(()=>{
      this.$refs.student.$on('myEventDemo',this.myEventDemo)
      //只能用一次
      // this.$refs.student.$once('myEventDemo',this.myEventDemo)
   // },3000)
  }
}
</script>

<style scoped>
.name{
  font-size:60px;
  color:blue;
}
</style>