<template>
  <div class="container">
    <!--传method及数据给组件-->
    <TableTop :addTodo="addTodo"></TableTop>
    <TableList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></TableList>
    <TableFoot :todos="todos" :checkAll="checkAll" :clearAllChecked="clearAllChecked"></TableFoot>
  </div>
</template>

<script>
import TableTop from "@/components/70/TableTop";
import TableList from "@/components/70/TableList";
import TableFoot from "@/components/70/TableFoot";

export default {
  name: 'table-container',
  components: {
    TableTop,
    TableList,
    TableFoot
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []//从存储中取数据,无则返回空数组
    };
  },
  methods: {
    //接收来自top组件的数据
    addTodo(value) {
      console.log('收到TableTop回传的数据', value)
      this.todos.unshift(value)
    },
    //勾选或取消勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    //删除
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        if (todo.id !== id) return todo
      });
    },
    //全选或全不选
    checkAll(e) {
      this.todos.forEach((todo) => {
        todo.done = e.target.checked
      })
    },
    //清除所有已选
    clearAllChecked() {
      console.log('删除所有勾选')
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
  },
  watch: {
    //在这里统一深度监视todos变化，只要变化就重新存储
    'todos': {
      deep: true,//一条数据中的某个字段值变化也监视
      handler(oldValue, newValue) {
        console.log('todo中数据变化', oldValue, newValue)
        localStorage.setItem('todos', JSON.stringify(oldValue))
      },
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid #aaa;
  padding: 10px;
}
</style>