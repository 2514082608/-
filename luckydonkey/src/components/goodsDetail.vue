<template>
	<div class="goodsDetail">
		<div class="goodsInf">
			<div class="showbox">
				<img src="/img/banner/banner2.jpg" alt="">
			</div>
			<ul class = "showList">
				<li ><img src="/img/banner/banner1.jpg" alt=""></li>
				<li ><img src="/img/banner/banner1.jpg" alt=""></li>
				<li ><img src="/img/banner/banner1.jpg" alt=""></li>
				<li ><img src="/img/banner/banner1.jpg" alt=""></li>
			</ul>
			<p class="biaoti">【婆婆妈妈明星推荐】夏季新品男士冰氧吧情侣衫男式T恤</p>
			<div class="goodsprice">
				<span class="salePrice">
					￥<i>{{detailData.salePrice}}</i>
				</span>
				<span class="marketPrice">
					￥<i>{{detailData.marketPrice}}</i>
				</span>
				<span class="saleDiscount">{{detailData.saleDiscount}}</span>
			</div>
			<Button
			text = "加入购物车" class = "shopCar"
				width = "1.2rem" height = "0.5rem" background-color = "transparent" border-radius = "0.1rem"
				font-size = "0.2rem"  color = "#000" border = "solid 0.01rem #000"
				@click = "show"
			/>
		</div>
	</div>
</template>

<script>
	import Button from "./Button.vue"
	export default {
		name: "goodsDetail",
		props:{
			detailData:{
				type:Object,
				required:true
			},
		},
		components:{Button},
		created(){
			this.$axios({
				url: "/api/home/" + this.$route.params.id,
			}).then(res => {
				this.goodsListData = res.data.data
			})
		}
		
	}
</script>

<style scoped>
	.goodsDetail{
		width: 100%;
		height: 100%;
	}
	.goodsInf{
		width: 96%;
		height: 80%;
		margin: 0 auto;
	}
	.showbox{
		width: 100%;
		height:60%;		
	}
	.showbox img{
		width: 100%;
		height: 100%;
	}
	.showList{
		width: 100%;
		height: 20%;
		padding: 0.2rem;
		box-sizing: border-box;
	}
	.showList li{
		width: 1rem;
		height: 1rem;
		float: left;
		margin-right: 0.2rem;
	}
	.showList li img{
		width: 100%;
		height: 100%;
	}
	.biaoti{
		 font-size: 0.3rem;
		 overflow:hidden; 
		 white-space:nowrap; 
		 text-overflow:ellipsis;
		 padding-left: 0.2rem;
		 box-sizing: border-box;
	}
	.goodsprice{
		width: 50%;
		height: 0.8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.2rem;
		box-sizing: border-box;
	}
	.salePrice{
		font-size: 0.5rem;
		font-weight: 700;
	}
	.marketPrice{
		text-decoration: line-through;
		padding-top: 0.2rem;
	}
	.saleDiscount{
		padding-top: 0.2rem;
	}
	.shopCar{
		float: right;
	}
</style>
