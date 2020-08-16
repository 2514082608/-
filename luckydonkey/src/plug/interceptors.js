import Vue from "vue";
import axios from "axios";
import router from "vue-router"
 
 
axios.interceptors.request.use(function(config){
	//  用户访问其他信息都需要携带token，访问user不需要携带，因为除了从其他页面跳转到注册，还可以直接从用户界面点击到注册，所以无需携带
	//  当访问主页时也不需要带token，因为用户打开这个网站的第一个页面就是主页，所以只有以下三个需要判断
	   //  如果访问这三个页面的话，就必须要携带token
		//  发送请求之前先看看用户电脑上有没有后端服务器存上去的含着token的信息   "{err:0,msg:'xx',data:{},token:'xx'}"
		let localStorageData = window.localStorage.getItem("user");
		//  localStorage中取出来的是字符串的数据，需要转换为JSON格式的数据，才能取出其中的token
		let token = localStorageData ? JSON.parse(localStorageData).token : "";
		//  判断 token 的值，如果没有token表示未登录，需要先跳转到登录界面进行登录
		// if(token){
		// 	//  这里表示可以取到token，即用户已经登陆过了，或者token未过期，那就让用户带着token正常访问
			config.headers = {token}
		// }else{
		// 	//  这里表示没有token或者token过期，要跳转到登录界面
		// 	//  但是登陆之前需要先记录自己是从哪个网页过来的，记录当前的网址
			
		// 	//  记录后，跳转到登录并将这个当前网页带过去，方便那边登录成功在跳回来
		// 	router.replace({path:"/reg",query: currentRoute});
		// }
	
	//  最后将这个配置信息返回出来
	return config;
},function(error){ return Promise.reject(error)})

// axios.interceptors.response.use(function(response){
// 	let currentRoute = router.currentRoute.fullPath;
// 	console.log(response.data)
// 	if(response.data.err === 2 && !currentRoute.includes("/reg")){
// 		router.replace({
// 			path: "/api/reg",
// 			// query: {p:currentRoute}
// 		})
// 	}
// 	// 加工完毕后在将response返回回去
// 	return response;
// },function(error){ return Promise.reject(error)})

//  上述拦截功能封装配置好以后，引入到项目入口文件main.js中。因为只是把axios单独拿到这个文件进行配置所以不用引入暴露，就直接将
//  这个文件作为他的一部分放进去就可以了。因为main.js是项目的主要配置文件，所以为了在全文中使用拦截器配置了以下两种方法。
//  第一种：  如果能访问到Vue，就通过this.$axios来访问
Vue.prototype.$axios = axios;
//  第二种：  如果访问不到Vue，就需要在将这个文件引入进来，然后暴露一个改装好的axios进行使用
//  因为第一种方法的main.JS中有router和vue所以最上方引不引入不影响，但是第二种当做模块，一个独立个体暴露出来的话，它需要自己携带
//  所有他用到的东西，所以要在最上方引入router和vue。
export default axios;


