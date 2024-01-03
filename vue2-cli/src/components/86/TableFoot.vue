<template>
  <div v-show="total">
    <input type="checkbox" :checked="isAll" @change="checkAllItems">已选<span>{{doneTotal}}</span>/全部<span>{{ total }}</span>
    <button @click="clearAll">删除所有勾选</button>
    <button @click="pubSubTest">发布订阅方式向外层传勾选数量</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'table-foot',
  props: [
    'todos',
  ],
  computed: {
    //已完成
    doneTotal() {
      //reduce:初始值为0，判断为真则+1
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0)
      }, 0)
    },
    //全部
    total() {
      return this.todos.length;
    },
    //全选按钮是否选中
    isAll() {
      return this.doneTotal === this.total && this.total > 0
    }
  },
  methods: {
    //全选或全不选
    checkAllItems(e) {
      this.$bus.$emit('checkAll',e)
    },
    //清除
    clearAll() {
      this.$bus.$emit('clearAllChecked')
    },
    //发布订阅方式发送消息
    pubSubTest(){
      pubsub.publish('pubsub-test','total:'+this.total)
    }
  }
}
</script>

<style scoped>

</style>