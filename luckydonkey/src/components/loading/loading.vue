<template>
	<div class="outBox">
		<img src = "./loading.gif" />
		<p>别催了，数据已经在加油了...</p>
	</div>
	
</template>

<script>
	export default {
		name: "loading",
		props: {}
	}
</script>

<style scoped>
	div{
		width: 100%;
		height: 100%;
		background-color: #fff;
		position: relative;
	}
	img{
		width: 50%;
		height: 3rem;
		position: absolute;
		left: 25%;
		top: calc((100% - 3rem)/2);
		
	}
	p{
		width: 100%;
		height: 0.5rem;
		font-size: 0.3rem;
		color: #999;
		position: absolute;
		bottom: 3.8rem;
		left: 1.3rem;
	}
	
</style>
