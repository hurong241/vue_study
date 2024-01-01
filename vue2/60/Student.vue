<!--组件的结构-->
<template>
  <div>
    <dl>
      <dt>学生信息</dt>
      <dd v-for="(s,index) in students" :index="s.id">
        {{ s.id }}-{{ s.name }}-{{ s.sex }}-{{ s.age }}
        <button @click="showId(s.id)">弹出id</button>
      </dd>
    </dl>
  </div>
</template>

<!--组件的交互代码:数据\方法-->
<script>
    const student = Vue.extend({
      //组件名称，这个名称仅是给vue插件中显示用的
      name: 'xuesheng',
      //组件数据
      data() {
        return {
          students: [//数组中的对象操作
            {id: 1, name: '李四', sex: '男', age: 39},
            {id: 2, name: '王五', sex: '女', age: 42},
          ]
        }
      },
      //组件方法
      methods: {
        showId(value) {
          alert(value)
        }
      }
    })
    //暴露
    export default student

    //简写方法 export default {...},就不需要后面的export default student了
    // export default {
    //   ....
    // }

</script>

<!--样式-->
<style>
dt {
  color: red;
}
</style>