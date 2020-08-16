<template>
  <div class = "app">
	  <headToggle class = "headd" v-if = "toggleHome" 
	  	outHeight = '0.8rem' width = "0.3rem" margin-left = "0.2rem" 
	  	inputWidth = "3rem"  inputHeight = "0.3rem" placeholder = "彭冀是猪" spanWidth = "0.5rem" 
	  />
	  <topTitle :topTitle = "topTitle" v-if = "topTitle"/>
	  
	  <div class="viewOut" :style = "{height:outHeight,padding:padding}">
	  	<div class="viewIn" :style = "{height:inHeight}">
			 <router-view></router-view>
	  	</div>
	  </div>
	 
	 <Footer v-show = "toggleFooter"/> 
  </div>
</template>

<script>
import liuButton from './components/Button.vue'
import liuCell from './components/liu-cell.vue'
import Banner from './components/Banner/Banner.vue'
import Liuinput from "./components/liu-input.vue"
import Loading from "./components/loading/loading.vue"
import Home from "./pages/home/home.vue"
import User from "./pages/user/user.vue"
import Footer from "./layout/footer/footer.vue"
import regLogin from "./pages/Reglogin.vue"
import goodList from "./components/goodsList.vue"
import gdList from "./pages/gdList.vue"
import moren from "./layout/moren.vue"
import goodsDetail from "./components/goodsDetail.vue"
import topTitle from "./components/topTitle.vue"
import headToggle from "./components/headToggle/headToggle.vue"

export default {
  name: 'App',
  data(){
	  return {
		  url: "https://www.baidu.com",
		  bannerData: [
				{id:1, _id: 6666, url: '/img/banner/banner1.jpg', query:'pengji'},
				{id:2, _id: 8888, url:'/img/banner/banner2.jpg',  query:'pengji'},
				{id:3, _id: 9999, url:'/img/banner/banner3.jpg', query:'pengji'},
				{id:4, _id: 7777, url:'/img/banner/banner4.jpg', query:'pengji'},
			],
	  inp: "彭冀大佬",
	  goodsListData: [
		  {id:1, _id: 6666,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url: '/img/banner/banner1.jpg', salePrice:79,marketPrice:198,saleDiscount:"4.0折"},
		  {id:2, _id: 8888,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url:'/img/banner/banner2.jpg', salePrice:88,marketPrice:230,saleDiscount:"3.5折"},
		  {id:3, _id: 9999,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url:'/img/banner/banner3.jpg', salePrice:69,marketPrice:125,saleDiscount:"7.0折"},
		  {id:4, _id: 7777,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url:'/img/banner/banner4.jpg', salePrice:135,marketPrice:208,saleDiscount:"4.8折"},
	  ],
	  detailData:{id:1, _id: 6666,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url: '/img/banner/banner1.jpg', salePrice:79,marketPrice:198,saleDiscount:"4.0折"},
	  toggleHome: "home",
	  topTitle: "" ,
	  outHeight: 'calc(100% - 1.8rem)',
	  inHeight: 'auto',
	  padding:'0.8rem 0rem 1rem 0rem',
	  toggleFooter: true,
	}  
  },
  components: {liuButton,liuCell,Banner,Liuinput,Loading,Home,User,Footer,
				regLogin,goodList,gdList,moren,goodsDetail,topTitle,headToggle},
  methods: {
	  show(data){
		 // this.inp = data;
	  },
	  go(){
		  if(this.url){
			  window.open(this.url,"blank");
		  }else if(this.to){
			  this.$router.push({to:to.name,params:to.params,query:to.query})
		  }
	  }
  },
  created(){
	  // console.log("mounted" ,"app");
	  this.toggleHome = this.$route.path.split("/")[1] == "home" ? "home" : "";
	  if(this.$route.path.split("/")[1] == "home"){
	  		   this.topTitle = "";
			   this.toggleFooter = true;
	  }else if(this.$route.path.split("/")[1] == "reg"){
	  		  this.topTitle = "";
			  this.toggleFooter = "";
			  this.outHeight = '100%';
			  this.padding = '0';
			  this.inHeight = "100%";
	  }else{
	  		  this.topTitle = this.$route.path.split("/")[1];
			  this.toggleFooter = true;
			  this.outHeight =  'calc(100% - 1.8rem)';
			  this.padding = '0.8rem 0rem 1rem 0rem';
			  this.inHeight = "auto"
	  }
  },
  updated(){
	  // console.log("updated","app");
	  this.toggleHome = this.$route.path.split("/")[1] == "home" ? "home" : "";
	  if(this.$route.path.split("/")[1] == "home"){
	  		   this.topTitle = "";
			  this.toggleFooter = true;
	  }else if(this.$route.path.split("/")[1] == "reg"){
	  		  this.topTitle = "";
			  this.toggleFooter = false;
			  this.outHeight = '100%';
			  this.padding = '0';
			  this.inHeight = "100%"
	  }else{
	  		  this.topTitle = this.$route.path.split("/")[1];
	  		  this.toggleFooter = true;
			  this.outHeight = 'calc(100% - 1.8rem)';
			  this.padding = '0.8rem 0rem 1rem 0rem';
			  this.inHeight = "auto";
	  }
  }
}
</script>

<style scoped>
.app{
		width: 100%;
		height: 100%;
		background-color: #eee;
		overflow: hidden;
	}
	.viewOut{
		width: 100%;
		/* height: calc(100% - 1.8rem); */
		/* padding: 0.8rem 0rem 1rem 0rem; */
		overflow: scroll;
	}
	.viewIn{
		width: 100%;
		/* height: auto;		 */
	}
</style>
