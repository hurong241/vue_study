<template>
  <div>
  <dl>
    <dt>{{title}}</dt>
      <dd>php</dd>
      <dd>java</dd>
      <dd>golang</dd>
      <dd><slot>no name</slot></dd>
    <dd><slot name="receive">has name</slot></dd>
  </dl>
  </div>
</template>

<script>
export  default {
  props:[
      'title',
      'name',
  ]
}

</script>

<style scoped>

</style>