<template>
	<div class="homeOut">
		<Banner :data = "bannerData" />
		<Show :data = "showArr" pictureWidth = "50%" />
		<PicList  :picdata = "picdata" />
	</div>
	
</template>

<script>
	import Banner from "../../components/Banner/Banner.vue"
	import Button from "../../components/Button.vue"
	import Liuinput from "../../components/liu-input.vue"
	import headToggle from "../../components/headToggle/headToggle.vue"
	import Show from "../../components/show/show.vue"
	import PicList from "../../components/picList.vue"
	import Footer from "../../layout/footer/footer.vue"
	export default {
		name: "Home",
		data(){
			return {
				bannerData: [],
				showArr: [
					{id:1,_id:2,url:"/img/show/1.png",content:"护肤套装",backgroundColor:"red",collectionName:"hufu"},
					{id:2,_id:"hufu",url:"/img/show/2.png",content:"Servers",backgroundColor:"green",collectionName:"hufu"},
					{id:3,_id:"hufu",url:"/img/show/3.png",content:"Hourse",backgroundColor:"blue",collectionName:"hufu"},
					{id:4,_id:"hufu",url:"/img/show/4.png",content:"Jobs",backgroundColor:"pink",collectionName:"hufu"},
					{id:5,_id:"hufu",url:"/img/show/5.png",content:"HotDeals",backgroundColor:"purple",collectionName:"hufu"},
					{id:6,_id:"hufu",url:"/img/show/6.png",content:"YardSales",backgroundColor:"yellow",collectionName:"hufu"},
					{id:7,_id:"hufu",url:"/img/show/7.png",content:"Free",backgroundColor:"tomato",collectionName:"hufu"},
					{id:8,_id:"hufu",url:"/img/show/8.png",content:"Category",backgroundColor:"orange",collectionName:"hufu"}
				],
				picdata: [
					{id:1,url:"/img/picList/1.jpeg",content:"漂亮姐姐"},
					{id:2,url:"/img/picList/2.gif",content:"这是驴"},
					{id:3,url:"/img/picList/3.jpg",content:"这是驴"},
					{id:4,url:"/img/picList/4.jpg",content:"这是驴"},
					{id:5,url:"/img/picList/5.jpg",content:"这是驴"},
					{id:6,url:"/img/picList/6.jpg",content:"这是驴"},
					{id:7,url:"/img/picList/7.jpg",content:"这是驴"},
					{id:8,url:"/img/picList/8.jpg",content:"这是驴"},
					{id:9,url:"/img/picList/9.jpg",content:"这是驴"},
				],
			}
		},
		components:{
			Banner,headToggle,Show,PicList,Footer
		},
		created(){
			this.$axios({
				url: "/api/home/banner",
				params: {_limit: 4},
			}).then(res => {
				this.bannerData = res.data.data;
			})
		}
	}
	// [
	// 	{id:1, _id: 6666, url: '/img/banner/banner1.jpg', query:'pengji'},
	// 	{id:2, _id: 8888, url:'/img/banner/banner2.jpg',  query:'pengji'},
	// 	{id:3, _id: 9999, url:'/img/banner/banner3.jpg', query:'pengji'},
	// 	{id:4, _id: 7777, url:'/img/banner/banner4.jpg', query:'pengji'},
	// ],
</script>

<style scoped>
	.homeOut{
		width: 100%;
		height: 100%;
	}
</style>
