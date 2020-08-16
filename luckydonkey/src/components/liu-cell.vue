<template>
	<div class="liu-cell" 
		:style = "{width:width,height:height,borderBottom:borderBottom,
		padding:padding,lineHeight:height,marginBottom:marginBottom,backgroundColor:backgroundColor}" >
		<div class="left">
			<img v-if = "picUrl" :src="picUrl" :style = "{width:imgWidth,height:imgWidth}">
			<span :style = "{fontSize: titleSize,color:titleColor}">{{title}}</span>
		</div>
		
		<div>
			<i v-show = "arrow" :style = "{width:iWidth,height:iHeight}" @click = "$emit('click')">
				<img :src = "arrowImg" />
			</i>
			<a :style = "{fontSize:addSize,color:addColor,marginRight:addMarginRight}">{{addText}}</a>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "liuCell",
		props: {
			width:{
				type: String,
				default: "100%"
			},
			height:{
				type: String,
				default: "0.5rem"
			},
			backgroundColor:{
				type:String,
				default: '#fff'
			},
			borderBottom:{
				type:String,
				default: "solid 1px #ccc"
			},
			padding:{
				type:String,
				default: null,
			},
			marginBottom:{
				type:String,
				default: ""
			},
			picUrl:{
				type:String,
				default: ""
			},
			imgWidth:{
				type:String,
				default: "1rem"
			},
			title:{
				type: String,
				required: true
			},
			titleSize:{
				type: String,
				default: "0.16rem"
			},
			titleColor:{
				type: String,
				default: "#000"
			},
			iWidth:{
				type: String,
				default: "0.2rem"
			},
			iHeight:{
				type: String,
				default: "0.2rem"
			},
			arrow:{
				type: String,
				default: false,
			},
			arrowImg:{
				type: String,
				default: "/img/liu-cell/gt.png"
			},
			addText:{
				type:String,
				default: ""
			},
			addSize:{
				type:String,
				default: "0.16rem"
			},
			addColor:{
				type:String,
				default: "orange"
			},
			addMarginRight:{
				type:String,
				default: "0.15rem"
			}
		},
		
	}
</script>

<style scoped>
	.liu-cell{
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	.left{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.left img{
		margin-right: 0.2rem;
		border-radius: 50%;
	}	
	.liu-cell i{
		float:right;
		display: inline-block;
		vertical-align: middle;
	}
	.liu-cell i img{
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
	/* .liu-cell a{
		float: right;
		
	} */
	
</style>
