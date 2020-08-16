<template>
	<div class="wrap">
	    <figure v-for = "(item,index) of picdata" :key = "item.id">
			<img :src= "item.url" alt="">
			<span>{{item.content}}</span>
		</figure>
	</div>
</template>

<script>
	export default {
		name: "PicList",
		props:{
			picdata:{
				type: Array,
				required:true
			}
		}
	}
</script>

<style scoped>
	.wrap{
	    width: 96%;
	    height: auto;
		padding: 0.2rem;
		box-sizing: border-box;
		background-color: #eee;
	    column-count: 3;
	    margin: 0 auto;
	}
	.wrap figure{
	   box-shadow: 0 0 0.02rem 0.02rem  #ccc;
	    padding: 0.05rem;
		margin: 0;
	    margin-bottom: 0.1rem;
		background-color: #fff;
	    text-align: center;
	    break-inside: avoid;
	}
	.wrap figure img{
	    width: 100%;
	}
</style>
