<!--组件的结构-->
<template>
  <div>
    <dl>
      <dt>{{ className }}学生信息,共有{{ count + 1 }}个学生</dt>
      <dd v-for="(s) in students" :key="s.id">
        {{ s.id }}-{{ s.name }}-{{ s.sex }}-{{ s.age }}
        <button @click="showId(s.id)">弹出id</button>
      </dd>
    </dl>
  </div>
</template>

<!--组件的交互代码:数据\方法-->
<script>
export default {
  //组件名称，这个名称仅是给vue插件中显示用的
  name: 'my-student',
  //组件数据：由于数据是从props接收的，这里不能定义数据
  // data() {
  //   return {
  //     className:'一年级',
  //     students: [//数组中的对象操作
  //       {id: 1, name: '李四', sex: '男', age: 39},
  //       {id: 2, name: '王五', sex: '女', age: 42},
  //     ]
  //   }
  // },
  //组件方法
  methods: {
    showId(value) {
      alert(value)
    }
  },
  //接收School传过来的数据
  //简写方式1:只定义参数名称
  //props:['className'],
  //简写形式2：定义参数名及数据类型
  // props:{
  //   className:String,
  // },
  //完整写法：参数、类型、是否必须等
  props: {
    className: {
      type: String,
      required: true,
      default: '一年级',
    },
    count: {
      type: Number,
      require: true,
      default: 0,
    },
    students: {}
  }
}

</script>

<!--样式-->
<style>
dt {
  color: red;
}
</style>