<template>
  <div class="container">
    <!--传method及数据给组件-->
    <TableTop></TableTop>
    <TableList :todos="todos"></TableList>
    <TableFoot :todos="todos"></TableFoot>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import TableTop from "@/components/86/TableTop";
import TableList from "@/components/86/TableList";
import TableFoot from "@/components/86/TableFoot";

export default {
  name: 'table-container',
  components: {
    TableTop,
    TableList,
    TableFoot
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],//从存储中取数据,无则返回空数组
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
      console.log(id)
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
    },
    //行内编辑
    updateTodo(id,title){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.title=title
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
  },
  mounted() {
    //全局事件总线实现
    this.$bus.$on('addTodo', this.addTodo)
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
    this.$bus.$on('checkAll', this.checkAll)
    this.$bus.$on('clearAllChecked', this.clearAllChecked)
    this.$bus.$on('updateTodo', this.updateTodo)
    //发布订阅方式监听一个消息
    this.pubsubTestId=pubsub.subscribe('pubsub-test', (msgName, data)=>{
      alert('pubsub:收到消息,消息名:'+msgName+','+'数据:'+data)
    })
  },
  beforeDestroy() {
    //解绑全局事件
    this.$bus.off(['addTodo', 'checkTodo', 'deleteTodo', 'checkAll', 'clearAllChecked','updateTodo'])
    //取消订阅
    pubsub.unsubscribe(this.pubsubTestId)
  }
}
</script>

<style scoped>
.container {
  border: 1px solid #aaa;
  padding: 10px;
}
</style>