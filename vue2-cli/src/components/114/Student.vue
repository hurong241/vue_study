<!--组件的结构-->
<template>
  <div>
    <dl>
      <dt>{{ className }}学生信息</dt>
      <!--不用计算属性-->
<!--      <dd v-for="(s) in $store.state.persons" :key="s.id">-->
      <dd v-for="(s) in persons" :key="s.id">
        {{ s.id }}-{{ s.name }}-{{ s.sex }}-{{ s.age }}
        <button @click="showId(s.id)">弹出id</button>
      </dd>
    </dl>
    <button @click="jia">将上面组件的sum+1</button>
  </div>
</template>

<!--组件的交互代码:数据\方法-->
<script>
import {mapState} from 'vuex'
export default {
  //组件名称，这个名称仅是给vue插件中显示用的
  name: 'my-student',
  computed:{
    ...mapState(['persons'])
  },
  //组件方法
  methods: {
    jia(){
      this.$store.dispatch('jia', 1)
    }
  },
}

</script>

<!--样式-->
<style scoped>
dt {
  color: red;
}
</style>