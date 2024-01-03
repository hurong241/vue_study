<!--组件的结构-->
<template>
  <div>
    <dl>
      <dt>{{ className }}学生信息</dt>
      <dd v-for="(s) in students" :key="s.id">
        {{ s.id }}-{{ s.name }}-{{ s.sex }}-{{ s.age }}
        <button @click="showId(s.id)">弹出id</button>
      </dd>
    </dl>
    <button @click="sendUserToSchool">将学生数据发送给School组件</button>
    <button @click="unbind">解绑:将学生数据发送给School组件</button>
    <button @click="die">销毁组件事件就解绑了</button>
  </div>
</template>

<!--组件的交互代码:数据\方法-->
<script>

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
    //发送学生数据给Student
    sendUserToSchool() {
      //触发School.vue传递过来的自定义事件
      this.$emit('myEventDemo', this.students, 111111111, 2222222)
    },
    //解绑事件
    unbind() {
      //解绑所有事件
      this.$off('myEventDemo')
      //解绑多个指定事件
      //this.$off(['myEventDemo','xxxxxxxxxx'])
      //这样会解绑所有事件
      // this.$off()
    },
    die() {
      this.$destroy()
    }
  },
}

</script>

<!--样式-->
<style scoped>
dt {
  color: red;
}
</style>