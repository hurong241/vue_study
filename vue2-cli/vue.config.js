const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true,//关闭语法检查
  //代理配置:准确的说应该是代理服务器转发规则
  devServer:{
    /**
     * 单代理设置
     * 请求地址填：http://localhost:8080/about
     * 转为：https://api.hu-rong.com/about
     */
    proxy:'https://api.hu-rong.com'
    //多个代理
    // proxy:{
    //   /**
    //    *当请求前缀为api时走代理,如请求地址为:http://localhost:8080/demo/about则走此处代理
    //    *最终请求的真实地址为:https://api.hu-rong.com/about
    //    */
    //   '/demo':{
    //     target:'https://api.hu-rong.com',
    //     pathRewrite:{'^/demo':''},//地址重写，将url中的/demo替换为空，则请求的真实地址为https://api.hu-rong.com/about
    //     //ws:true,//用于支持websocket,默认为true
    //     //changeOrigin:true,//请求控制请求头中的host值,默认为true;false时为代理的地址，true为真实服务器地址
    //   },
    // }
  }
})
