<template>
  <div>
    <label>
      <input placeholder="请输入" type="text" v-model="title" @keyup.enter="add">
    </label>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: 'table-top',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    add() {
      //const title = e.target.value.trim()//不建议这样，尽量用vm操作
      const title = this.title.trim()
      if (!title) return alert('请输入')//空输入过滤
      //生成id库安装方法：npm i nanoid
      const todoObj = {id: nanoid(), title: title, done: false}
      console.log('由TableTop生成的todoObj:', todoObj)
      //通过TableContainer传过来的接收函数，将todos回传给TableContainer
      this.$bus.$emit('addTodo', todoObj)
      //清空输入框
      //e.target.value=''//不建议这样操作，尽量用vm操作
      this.title = ''
    }
  },
  //接收从TableContainer传过来方法
  props: []
}
</script>

<style scoped>
input {
  padding: 5px;
  border-radius: 5px;
}
</style>