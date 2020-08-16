<template>
	<div class="outBox">
		<router-link :to = "{path:`/home/hufu/${item._id}`,query:{collectionName:item.collectionName}}"
		 tag="div" v-for = "(item,index) of goodsListData" :key = "index" class = "dl">
			<dt>
				<img :src="item.smallImage" alt="">
			</dt>
			<dd>
				<div class = "biaoti">{{item.title}}</div>
				<div class="goodsInf">
					<span class="salePrice">
						￥<i>{{item.price.salePrice}}</i>
					</span>
					<span class="marketPrice">
						￥<i>{{item.price.marketPrice}}</i>
					</span>
					<span class="saleDiscount">{{item.price.saleDiscount}}</span>
				</div>
				<div class="option">
					<img src="../layout/footer/heart.png" alt="">
					<Button 
					text = "加入购物车" class = "shopCar"
						width = "1.2rem" height = "0.5rem" background-color = "transparent" border-radius = "0.1rem"
						font-size = "0.2rem"  color = "#000" border = "solid 0.01rem #000"
						@click = "show"
					/>
				</div>
			</dd>
		</router-link>
	</div>
</template>

<script>
	import Button from "./Button.vue"
	export default {
		name:"goodList",
		props:{
			goodsListData:{
				type: Array,
				required: true
			}
		},
		components:{Button,},
		methods:{
			show(){}
		}
	}
</script>

<style scoped>
	.outbox{
		width: 96%;
		background-color: aqua;
		padding: 0.2rem;
		box-sizing: border-box;
		border: solid 0.01rem #000;
		margin: 0 auto;
	}
	.dl{
		width: 100%;
		height: 3rem;
		background-color: #fff;
		display: flex;
		margin-bottom: 0.2rem;
	}
	.dl dt{
		width: 40%;
		height: 100%;
	}
	.dl dt img{
		width: 100%;
		height: 100%;
	}
	.dl dd{
		flex: 1;
		padding: 0.2rem;
	}
	.biaoti{
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp: 2;
		overflow:hidden;
		font-size: 0.3rem;
		line-height: 0.5rem;
		margin-bottom: 0.2rem;
	}
	.goodsInf{
		width: 85%;
		height: 0.8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.1rem;
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
	.option{
		float: right;
		/* width: 3rem; */
		height: 0.5rem;
		display: flex;
	}
	.option img{
		width: 0.5rem;
		height: 0.5rem;
		margin-right: 0.4rem;
	}
	
	
</style>
