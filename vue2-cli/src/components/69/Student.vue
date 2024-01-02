<!--组件的结构-->
<template>
  <div>
    <dl>
      <dt class="name">{{ className }}学生信息</dt>
      <dd v-for="(s) in students" :key="s.id">
        {{ s.id }}-{{ s.name }}-{{ s.sex }}-{{ s.age }}
        <button @click="showId(s.id)">弹出id</button>
      </dd>
    </dl>
  </div>
</template>

<!--组件的交互代码:数据\方法-->
<script>
import {mixin} from "@/mixin";

export default {
  //组件名称，这个名称仅是给vue插件中显示用的
  name: 'my-student',
  //组件数据：由于数据是从props接收的，这里不能定义数据
  data() {
    return {
      className: '一年级',
      students: [//数组中的对象操作
        {id: 1, name: '李四', sex: '男', age: 39},
        {id: 2, name: '王五', sex: '女', age: 42},
      ]
    }
  },
  //组件方法
  methods: {
    //提到mixin.js中去了
    // showId(value) {
    //   alert(value)
    // }
  },
  //混入：如果多个组件中有相同功能的方法，可以移到mixin中实现共用
  mixins: [mixin]
}

</script>

<!--样式-->
<style scoped>
dt {
  color: red;
}
.name{
 font-size:30px;
  color: red;
}
</style>