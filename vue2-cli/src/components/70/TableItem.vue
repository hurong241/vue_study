<template>
  <li>
    <label>
      <!--注意：这里是change不是onchange-->
      <input type="checkbox" :checked="isChecked" @change="handleCheck(todo.id)">
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn-delete" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'table-item',
  props: [
    'todo',
    'checkTodo',
    'deleteTodo',
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
      this.checkTodo(id)
    },
    //删除
    handleDelete(id) {
      if (confirm('确认删除吗？')) {
        console.log('删除,id:', id)
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
.btn-delete {
  display: none;
}

li:hover button {
  display: inline-block;
}
</style>