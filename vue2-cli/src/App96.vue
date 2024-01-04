<template>
  <div class="app">
    p96:vue-axios安装及代理服务器配置<br/>
    安装:npm i axios<br/>
    vue-cli中用代理服务器实现跨域原理：当我们启动vue-cli后，访问localhost:8080展示首页<br/>
    本例中点击按钮发送http请求访问一个接口如：(http://api.hu-rong.com/about)<br/>
    如果用以前的ajax请求，则我们请求时的接口地址就是上面这个接口的地址，这样就有跨域的问题，导致请求不成功<br/>
    vue-cli中配置了代理后，启动了一个代理服务器，它的端口也是8080，所以应该将请求地址设置为<br/>
    http://localhost:8080/about<br/>
    而不是<br/>
    http://api.hu-rong.com/about<br/>
    当点击按钮触发请求时，他先经过http://localhost:8080/代理服务器，<br/>
    通过规则(在vue.config.js中配置)将对应请求地址转为真实的接口地址http://api.hu-rong.com<br/>
    因为它底层走的不是http协议，所以不存在跨域问题
    <hr/>
    <input readonly v-model="id" type="text" placeholder="输入相册id">
    <button @click="search">搜索相册</button>
    <hr/>
    <!--相册列表-->
    <div v-show="photos.length" class="photo-list" v-for="p in photos" :id="p.id">
      <img :src="p.image" border="0" width="120px" height="80px"/>
    </div>
    <!--欢迎-->
    <h3 v-show="isFirst">欢迎！</h3>
    <!--loading-->
    <h3 v-show="isLoading">加载中...</h3>
    <!--error-->
    <h3 v-show="error">{{ error }}</h3>

    <div class="clear-float"></div>
  </div>
</template>

<script>
//引入axios
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      id: 1,//相册id
      isFirst: true,//是否初次展示
      isLoading: false,//是否加载中
      error: '',//错误信息
      photos: {},
    }
  },
  methods: {
    search() {
      //发请求前
      this.isFirst = false
      this.isLoading = true
      this.photos = {}
      //http://localhost:8080是代理服务器的地址，发请求后通过它转发到真实接口，真实接口请求成功后，代理服务器将结果返回
      axios.get('http://localhost:8080/photo/' + this.id).then(
          response => {
            console.log('请求成功', response.data)
            this.isLoading = false
            this.photos = response.data.images
          },
          error => {
            this.isLoading = false
            this.error = '请求失败,错误信息:' + error
            console.log('请求失败')
          }
      )
    }
  },
  mounted() {
    this.search()
  }
}
</script>

<style scoped>
.photo-list {
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  float: left;
}
</style>