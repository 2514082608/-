<template>
	<ul class="footer">
		<router-link tag="li" :to = "{name:'home',params:{id:2345},query:{titleName:'',toggleHome: 'home'}}" >
			<img src="./home.png"> <span>home</span>
		</router-link>
	
		<router-link tag="li" :to = "{name:'chat',params:{id:2345},query:{titleName:'chat',toggleHome: ''}}" >
			<img src="./balloon.png"> <span>chat</span>
		</router-link>
		
		<router-link class="center" tag="li" :to = "{name:'publish',params:{id:2345},query:{titleName:'publish',toggleHome: ''}}">
			<img src="./camera.png">
		</router-link>
		<router-link tag="li" :to = "{name:'cart',params:{id:2345},query:{titleName:'cart',toggleHome: ''}}">
			<img src="./cart.png"> <span>cart</span>
		</router-link>
		<router-link tag="li" :to = "{name:'user',params:{id:2345},query:{titleName:'user',toggleHome: ''}}">
			<img src="./user.png"> <span>me</span> 
		</router-link>
	</ul>
</template>

<script>
	export default {
		name: "Footer",
		data(){
			return {
			}
		},
		methods:{
			show(){
				console.log("你是猪");
			}
		}
			
				
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 1rem;
		background-color: #fff;
		border: solid 0.01rem #000;
		box-sizing: border-box;
		position: absolute;
		bottom: 0;  left: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.footer li{
		width: 1rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer li img{
		width: 0.35rem;
		height: 0.35rem;
	}
	/* .footer li.center{
		width: 0.8rem;
		height: 0.8rem;
		border: solid 0.01rem #000;
		border-radius: 50%;
	} */
	.footer li.center img{
		width: 0.7rem;
		height: 0.7rem;
	}
	.footer li span{
		font-size: 0.3rem;
	}
</style>
