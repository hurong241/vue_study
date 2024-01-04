<template>
  <div class="app">
    p102-104:vue-插槽slot<br/>
    它主要解决组件复用时，组件中又有个性化的数据问题<br/>
    <hr/>
    <SlotList :title="title">无名称的插槽1111111111</SlotList>
    <SlotList>
      <span slot="receive">具名插槽22222222222</span>
    </SlotList>
  </div>
</template>

<script>
import SlotList from './components/102/SlotList'

export default {
  name: 'App',
  data(){
    return {
      title:'插槽',
    }
  },
  components:{
    SlotList
  }
}
</script>

<style scoped>

</style>