<template>
	<input 
	class = "btn"
	:type = "type"
	:value = "text"
	:style = "{width:width,height:height,backgroundColor:backgroundColor, border:border,
			     fontSize:fontSize,fontWeight:fontWeight,color:color,borderRadius:borderRadius  }"		 
	@click = "$emit('click')"
	 />
</template>

<script>
	export default {
		name: "liuButton",
		props: {
			text: {
				type: String,
				default: "按 钮",
			},
			type: {
				type: String,
				default: "button"
			},
			width: {
				type: String,
				require,
			},
			height: {
				type: String,
				require,
			},
			backgroundColor: {
				type: String,
				default: ''
			},
			fontSize: {
				type: String,
				default: '16px'
			},
			fontWeight:{
				type: String,
				default: ""
			},
			color: {
				type: String,
				default: '#fff'
			},
			border:{
				type:String,
			},
			borderRadius: {
				type: String,
				default: "0px"
			}
		}
		
	}
</script>

<style scoped>
	.btn{
		display: flex;
		justify-content: center;
		align-items: center;
		outline: none;
	}
	.btn:active{
		opacity: 0.8;
	}
	
</style>
