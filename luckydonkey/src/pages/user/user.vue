<template>
	<div class="user">
			<liuCell  
			:title = "title"  title-size = "0.4rem"  titleColor = "#000"
			height = "1.5rem"  padding = "0 0.15rem"  
			:picUrl = "picUrl" arrow = true   @click = "goReg"
			>
			</liuCell>
			
			<ul class="inf">
				<li>
					<i>{{follow}}</i>
					<span>关注</span>
				</li>
				<li>
					<i>{{fans}}</i>
					<span>粉丝</span>
				</li>
				<li>
					<i>{{collection}}</i>
					<span>收藏</span>
				</li>
			</ul>
			 
			<liuCell  
			title = "修改个人信息"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem"
			addText = ""  arrow = true  @click = "changeInfomation"
			/>
			<liuCell
			title = "促销订单"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem"
			addText = "彭冀"  arrow = true  	@click = "go"
			/>
			<liuCell
			title = "我喜欢的/与我相关"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem" border-bottom = ""
			addText = "290"  arrow = true  add-color = "#ccc" margin-bottom = "0.2rem"
			 @click = "go"
			/>
			
			<liuCell
			title = "浏览历史"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem"
			addText = ""  arrow = true @click = "go"
			/>
			<liuCell
			title = "邀请朋友"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem"
			addText = ""  arrow = true  @click = "go"
			/>
			<liuCell
			title = "设置"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem" margin-bottom = "0.2rem"
			addText = ""  arrow = true  @click = "go" border-bottom = ""
			/>
			
			<liuCell
			title = "帮助中心"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem" 
			addText = ""  arrow = true  @click = "go"
			/>
			<liuCell
			title = "退出当前账号"  title-size = "0.3rem"  titleColor = "#000"
			height = "0.8rem"  padding = "0 0.15rem" border-bottom = ""
			addText = ""  arrow = true  @click = "exit"
			/>	
	</div>
</template>

<script>
	import liuCell from "../../components/liu-cell.vue"
	import interceptors from "../../plug/interceptors.js"
	export default {
		name: "User",
		data(){
			return {
				title: "注册 / 登录",
				picUrl: "/img/wutou.jpg",
				topTitle: "User",
				follow:  "0",
				fans: "0",
				collection: "0",
			}
		},
		components:{liuCell},
		methods:{
			goReg(){
				this.$router.push("/reg")
			},
			changeInfomation(){
				this.$router.push("/personalInf")
			},
			exit(){
				window.localStorage.removeItem("user");
				this.title = "注册 / 登录";
				this.$router.push("/reg");
			},
			go(){
				
			}
		},
		created(){
			interceptors({
				method: "GET",
				url: "/api/user", 
			}).then( res => {
				if(res.data.err === 0){
						this.title = res.data.data.nickname;
						this.picUrl = this.$baseUrl + res.data.data.icon;
						this.follow = res.data.data.follow ?  res.data.data.follow : 0;
						this.fans = res.data.data.fans ? res.data.data.fans : 0;
						this.collection = res.data.data.shoucang ? res.data.data.shoucang : 0;
					}
				})
		},
		mounted(){
			// console.log("mounted",'user')
		},
		updated(){
			// console.log("updated","user")
		},
		destroyed(){
			// console.log("destoryed","user")
		}
		}
</script>

<style scoped>
	.user{
		width: 96%;
		height: 100%;
		background-color: #eee;
		margin: 0 auto;
	}
	.inf{
		width: 100%;
		height: 1.2rem;
		background-color: #fff;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-bottom: 0.2rem;
	}
	.inf li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.inf li i{
		font-size: 0.4rem;
		color: #000;
	}
	.inf li span{
		font-size: 0.3rem;
		color: #ccc;
	}
	.changeNickname{
		margin-left: 0.2rem;
		color: #00FFFF;
		text-decoration: underline;
	}
</style>
