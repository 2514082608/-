<template>
	<div class="topTitle" :style = "{width:width}">
		<span>{{topTitle}}</span>
	</div>
</template>

<script>
	export default {
		name: "topTitle",
		props: {
			topTitle:{
				type:String,
				required:true
			},
			width:{
				type:String,
				default: "96%"
			}
		},
	}
</script>

<style scoped>
	.topTitle{
		height: 0.8rem;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-bottom: 0.1rem;
		border-bottom: solid 0.01rem #ccc;
		position: absolute;
		left: 2%;
		top: 0;
	}
	.topTitle span{
		font-size: 0.3rem;
		color: #000;
	}
</style>
