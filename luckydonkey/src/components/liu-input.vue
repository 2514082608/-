<template>
	<div class = "Liuinput" 
		:style = "{width:divWidth,height:divHeight,fontSize:divSize,backgroundColor:divbgColor,
		marginBottom:marginBottom,borderRadius:borderRadius,lineHeight:divHeight,border:border}"   >
		

		<span v-if = "spanText"
		:style = "{width:spanWidth,backgroundColor:spanbg,color:spanColor,}"
		>{{spanText}}</span>
		
		
		<input
		:type = "type"  :placeholder = "placeholder"  :value = "value" autocomplete="on"
		:style = "{width: inputWidth,backgroundColor:backgroundColor,fontSize:inputSize}"
		@input = "$emit('input',$event.target.value)"
		>
	</div>
</template>

<script>
	export default {
		name: "Liuinput",
		props: {
			divWidth:{
				type: String,
				required: true
			},
			divHeight:{
				type: String,
				required: true
			},
			divbgColor:{
				type: String,
				default: '#fff'
			},
			divSize:{
				type: String,
				default: '0.16rem'
			},
			border:{
				type: String,
				default : ""
			},
			borderRadius:{
				type:String,
				default: ""
			},
			marginBottom:{
				type:String,
				default: ""
			},
			spanText:{
				type: String,
				default: "默认"
			},
			spanWidth:{
				type: String,
				default: ""
			},
			spanbg:{
				type: String,
				default: "#fff"
			},
			spanColor:{
				type: String,
				default: "#000"
			},
			type:{
				type: String,
				default: "text"
			},
			placeholder:{
				type: String,
				default: ""
			},
			value:{
				type:String,
				default: ""
			},
			inputWidth:{
				type: String,
				default: "1rem"  
			},
			inputSize:{
				type: String,
				default: "0.16rem"
			},
			backgroundColor:{
				type: String,
				default: "#fff"
			}
			
			
		},
	}
</script>

<style scoped>
	.Liuinput{
		overflow: hidden;
	}
	.Liuinput span{
		display: block;
		height: 100%;
		text-align: center;
		float: left;
		border: none;
	}
	.Liuinput input{
		height: 100%;
		border: none;
		outline: none;
		float: left;
		padding-left: 0.2rem;
		box-sizing: border-box;
	}
</style>
