import Vue from 'vue'
import App from './App.vue'
import router from "./plug/router.js"

//  引入font适配js
import "./assets/js/font/hash.js"
//  q去除广告
Vue.config.productionTip = false
//  拦截器中使用了路由，这里引用需要放到路由引用的后面，而引用的内容，就是为axios增加拦截方法,相当于把这个方法分出去写，所以不用暴露
//  引入进来后，全局所有的this.$axios就都带有自动拦截功能，以及按网页携带token功能
//  如果要在不能使用this的地方想要使用axios，则需要在手动引入原生axios；
//  如果要在不能使用this的地方想要使用封装好的带拦截功能的interceptors，则需要去
import "./plug/interceptors.js"

//  安装默认服务器目录上的根头像的路径
import {baseUrl} from "./config/name.js";
Vue.prototype.$baseUrl = baseUrl;

let vm = new Vue({
  render: h => h(App),
  router,
  data:{}
}).$mount('#app')   
//  Vue的渲染是通过Vue实例来进行渲染的，而渲染的内容是实例上的方法和数据，所以这个main.js相当于是这个项目的主入口，因为这里有Vue实例
//  这里表示手动挂载到index.html中id为app的元素中，所以会从这个文件自动将组件注入到id为APP的div中
//  所以上面都在这个主文件中配置  相关的数据，例如路由等
