<template>
	<div class="moren">
		<topTitle :topTitle = "topTitle" />
		<div class = "showOut">
			<div class = "showIn">
				<!-- <goodList :goodsListData = "goodsListData" /> -->
			</div>
		</div>
		<Footer />
	</div>
	
	
</template>

<script>
	import topTitle from "../components/topTitle.vue"
	import goodList from "../components/goodsList.vue"
	import Footer from "./footer/footer.vue"
	export default {
		name: "Default",
		components:{
			topTitle,goodList,Footer,
		},
		data(){
			return {
				topTitle: "女  装",
				goodsListData: [
					  {id:1, _id: 6666,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url: '/img/banner/banner1.jpg', salePrice:79,marketPrice:198,saleDiscount:"4.0折"},
					  {id:2, _id: 8888,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url:'/img/banner/banner2.jpg', salePrice:88,marketPrice:230,saleDiscount:"3.5折"},
					  {id:3, _id: 9999,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url:'/img/banner/banner3.jpg', salePrice:69,marketPrice:125,saleDiscount:"7.0折"},
					  {id:4, _id: 7777,title:"【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤",url:'/img/banner/banner4.jpg', salePrice:135,marketPrice:208,saleDiscount:"4.8折"},
				],
				
			}
		}
	}
</script>

<style scoped>
	.moren{
		width: 96%;
		height: 100%;
		margin: 0 auto;
	}
	.showOut{
		width: 100%;
		height: calc(100% - 1.8rem);
		padding: 0.8rem 0rem 1rem 0rem;
		overflow: scroll;
	}
	.showIn {
		width: 100%;
	}
</style>
