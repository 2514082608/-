<template>
	<div class="outBox" :style= "{width:outWidth,height:outHeight,padding:padding,borderBottom:borderBottom}">
		<div class="left" :style = "{width:width,height:width,marginRight:marginLeft}">
			<img src="./img/thumbnails.png" alt="">
		</div>
		<label class="search" :style = "{width:inputWidth,height:inputHeight,backgroundColor:backgroundColor}">
			<span :style = "{width:spanWidth}">
				<img src="./img/location.png" alt="">
			</span>
			<input type="text" :placeholder = "placeholder" :style = "{backgroundColor:backgroundColor}">
		</label>
		
			
		<div class="right" :style = "{width:width,height:width,marginLeft:marginLeft}">
			<img src="./img/simplearrow.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headToggle',
		props:{
			outWidth: {
				type: String,
				default: "100%"
			},
			outHeight: {
				type: String,
				required:true
			},
			padding:{
				type:String,
				default: "0 0.2rem"
			},
			borderBottom:{
				type:String,
				default: ""
			},
			width:{
				type:String,
				default: "0.2rem"
			},
			height:{
				type:String,
				default: "0.2rem"
			},
			marginLeft:{
				type:String,
				default: "0.2rem"
			},
			inputWidth:{
				type:String,
				required:true
			},
			inputHeight:{
				type:String,
				required:true
			},
			placeholder:{
				type:String,
				default: ""
			},
			backgroundColor:{
				type:String,
				default: "#eee"
			},
			spanWidth:{
				type:String,
				default: ""
			},
		}
	}
</script>

<style scoped>
	.outBox{
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    box-sizing: border-box;
		background-color: #fff;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.left img,.right img{
	    width: 100%;
	    height: 100%;
	}
	.search{
		display:flex;
	    flex: 1;
		padding: 0.1rem;
	}
	.search span{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
	.search span img{
	    width: 0.3rem;
		height: 0.3rem;
	}
	input{
	    flex: 1;
		border: none;
		padding-left: 0.2rem;
		box-sizing: border-box;
	}
	
	
</style>
