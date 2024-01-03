<template>
  <li>
    <label>
      <!--注意：这里是change不是onchange-->
      <input type="checkbox" :checked="isChecked" @change="handleCheck(todo.id)">
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input ref="focusInput" v-show="todo.isEdit" type="text" :value="todo.title"  @blur="handlerBlur(todo,$event)">
    </label>
    <button v-show="!todo.isEdit" class="btn-edit" @click="handleEdit(todo)">编辑</button>
    <button class="btn-delete" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'table-item',
  props: [
    'todo',
  ],
  computed: {
    //渲染时判定是否绑定
    isChecked() {
      return this.todo.done
    }
  },
  methods: {
    //勾选与取消
    handleCheck(id) {
      console.log('点击了单个数据的checkbox,id:', id)
      //全局事件总线方式触发事件
      this.$bus.$emit('checkTodo',id)
    },
    //删除
    handleDelete(id) {
      if (confirm('确认删除吗？')) {
        console.log('删除,id:', id)
        //全局事件总线方式触发事件
        this.$bus.$emit('deleteTodo',id)
      }
    },
    //变为编辑状态
    handleEdit(todo){
      console.log('edit-id',todo.id)
      //这是错误的，不会产生set,get
      // todo.isEdit=true
      this.$set(todo,'isEdit',true)
      //获得焦点:这样是没有效果的，先获得焦点再渲染的模板，焦点又失去了
      //可以用setTimeout,推荐$nextTick,模板解析完后才执行$nextTick中的
      this.$nextTick(function(){
        this.$refs.focusInput.focus()
      })
      // setTimeout(()=>{
      //   this.$refs.focusInput.focus()
      // })
    },
    //失去焦点保存数据
    handlerBlur(todo,e){
      //这里可以这样写，是因为$set已要让他产生了set
      todo.isEdit=false
      this.$bus.$emit('updateTodo',todo.id,e.target.value)//这里要传新的数据而不是旧的todo.title
    }
  }
}
</script>

<style scoped>
.btn-edit,.btn-delete {
  display: none;
}

li:hover button {
  display: inline-block;
}
</style>