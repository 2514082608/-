<template>
	<div class="goo">
		<topTitle :topTitle = "topTitle"/>
		<goodList :goodsListData = "goodsListData"/>
	</div>
</template>

<script>
	import topTitle from "../components/topTitle.vue"
	import goodList from "../components/goodsList.vue"
	export default {
		name: "gdList",
		components:{goodList,topTitle,},
		data(){
			return{
				topTitle: "女装",
				goodsListData: [],
			}
		},
		methods:{
			
		},
		created(){
			this.$axios({
				url: "/api/home/" + this.$route.query.collectionName,
			}).then(res => {
				console.log(res.data.data)
				this.goodsListData = res.data.data
			})
		}
		
	}
</script>

<style scoped>
	
</style>
