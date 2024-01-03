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