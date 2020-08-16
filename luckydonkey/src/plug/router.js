import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "../pages/home/home.vue"
import User from "../pages/user/user.vue"
import Cart from "../pages/cart/cart.vue"
import Chat from "../pages/chat/chat.vue"
import Publish from "../pages/publish/publish.vue"
import Reglogin from "../pages/Reglogin.vue"
import PersonalInf from "../pages/personalInfo.vue"
import gdList from "../pages/gdList.vue"
import gdDetail from "../components/goodsDetail.vue"


let routes = [
	{path:"/home",component:Home,name:"home"},
	{path:"/home/hufu",component:gdList,name: "hufu"},
	{path:"/home/hufu/:id",component:gdDetail},
	{path:"/user",component:User,name:"user"},
	{path:"/cart",component:Cart,name:"cart"},
	{path:"/chat",component:Chat,name:"chat"},
	{path:"/publish",component:Publish,name:"publish"},
	{path:"/reg",component:Reglogin,name:"Reglogin"},
	{path:"/personalInf",component:PersonalInf,name: "PersonalInf"},
	{path: "/",redirect:"/home"},
	
]
let router = new VueRouter({
	routes,
})

export default router
