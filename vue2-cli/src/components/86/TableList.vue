<template>
  <ul>
    <TableItem
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
    >
    </TableItem>
  </ul>
</template>

<script>
import TableItem from "@/components/86/TableItem";

export default {
  name: 'table-list',
  components: {
    TableItem
  },
  props:[
      'todos',
  ]
}
</script>

<style scoped>
ul{
  list-style-type: none;
}
</style>