<!--组件的结构-->
<template>
  <div>
    <dl>
      <dt>学校信息</dt>
      <dd v-for="(s) in schools" :key="s.id">
        {{ s.id }}-{{ s.name }}
        <button @click="showId(s.id)">弹出id</button>
      </dd>
    </dl>
  </div>
</template>

<!--组件的交互代码:数据\方法-->
<script>
    export default{
      //组件名称，这个名称仅是给vue插件中显示用的
      name: 'my-school',
      //组件数据
      data() {
        return {
          schools: [//数组中的对象操作
            {id: 11, name: '清华'},
            {id: 22, name: '北大'},
          ]
        }
      },
      //组件方法
      methods: {
        showId(value) {
          alert(value)
        }
      }
    }

</script>

<!--样式-->
<style>
dt {
  color: blue;
}
</style>