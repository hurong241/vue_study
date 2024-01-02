<template>
  <ul>
    <TableItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
    >
    </TableItem>
  </ul>
</template>

<script>
import TableItem from "@/components/70/TableItem";

export default {
  name: 'table-list',
  components: {
    TableItem
  },
  props:[
      'todos',
      'checkTodo',
      'deleteTodo',
  ]
}
</script>

<style scoped>
ul{
  list-style-type: none;
}
</style>