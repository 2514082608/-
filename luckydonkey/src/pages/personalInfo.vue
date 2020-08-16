<template>
	<div class="inf">
		<div>
			<label class="changeInf" for = "">
				<span>请输入修改后的昵称</span>
				<input type="text" v-model = "nickName">
			</label>
		</div>
		
		
		<liuButton  text = "应用此昵称" class = "toggleLogin"
			width = "2rem" height = "0.8rem" background-color = "skyblue" border-radius = "0.2rem"
			font-size = "0.3rem"  color = "#000" border = "solid 0.01rem #000"
			@click = "changeNickname" />
		
		
		<div class = "tou">
			<span>上传头像</span>
			<input type="file" value = "" id = "tou" >	
		</div>
		
		<liuButton  text = "应用此头像" class = "toggleLogin"
			width = "2rem" height = "0.8rem" background-color = "skyblue" border-radius = "0.2rem"
			font-size = "0.3rem"  color = "#000" border = "solid 0.01rem #000"
			@click = "changeTouxiang" />
			
			
		<liuButton  text = "返回" class = "toggleLogin"
			width = "2rem" height = "0.8rem" background-color = "skyblue" border-radius = "0.2rem"
			font-size = "0.3rem"  color = "#000" border = "solid 0.01rem #000"
			@click = "goback" />
		
		<p>{{message}}</p>
	</div>
	
</template>

<script>
	import liuButton from "../components/Button.vue"
	import Liuinput from "../components/liu-input.vue"
	export default {
		name: "personalInf",
		components:{liuButton,Liuinput},
		data(){
			return {
				nickName: "",
				message: "",
			}
		},
		methods:{
			changeNickname(){
				let formData = new FormData();
				formData.append("nickname",this.nickName); 
				this.$axios({
					method: "POST",
					url: "/api/reg",
					data: formData,
				}).then(res => {
					console.log(res);
					if(res.data.err == 0){
						this.message = "修改昵称成功";
						
							this.$router.push("/user");
						
					}else{
						this.message = res.data.msg;
					}
				})
			},
			changeTouxiang(){
				let formData = new FormData();
				let inputFile = document.querySelector("#tou");
				formData.append("icon",inputFile.files[0])
				
			},
			goback(){
				this.$router.push("/user");
			}
		},
	}
</script>

<style scoped>
	.inf{
		width: 96%;
		margin: 0 auto;
	}
	.changeInf{
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-bottom:  solid 0.02rem #000;
	}
	.changeInf span{
		width: 3.5rem;
		height: 100%;
		line-height: 1rem;
		float: left;
	}
	.changeInf input{
		width: calc(100% - 0.5rem);
		height: 100%;
		font-size: 0.3rem;
		padding-left: 0.5rem;
		border: none;
		box-sizing: border-box;
		float: left;
	}
	.tou{
		width:100%;
		height: 1.5rem;
		border-bottom: 0.02rem solid #000;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	.tou span{
		width: 1.5rem;
		height: 100%;
		background-color: #ccc;
		border-radius: 50%;
		text-align: center;
		line-height: 1.5rem;
	}
	.tou input{
		font-size: 0.2rem;
		/* display: none; */
	}
</style>
