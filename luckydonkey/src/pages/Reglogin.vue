<template>
	<div class="regLogin">
		<Button  text = "<返回" class = "goBack"
			width = "1.5rem" height = "1rem" background-color = "transparent" border-radius = "20px"
			font-size = "0.3rem" font-weight = "700" color = "#000" border = "none"
			@click = "goBack" />
		<h1>lucky donkey</h1>
		<p class="regLoginMsg">{{regLoginMsg}}</p>
		<div class="input">
			<LiuInput
			  divWidth = "4.5rem" divHeight = "0.8rem" divSize = "0.3rem" margin-bottom = '0.3rem' border-radius = "0.15rem" 
			  spanText = "账 号"  spanWidth = "1rem"  spanbg = "#fff"  border = "solid 0.01rem #000" 
			  inputWidth = "calc(100% - 1rem)" inputSize = "0.3rem" type = "text"   placeholder = "请输入账号"  
			  v-model = "username"
			  />
			  <LiuInput
			  divWidth = "4.5rem" divHeight = "0.8rem"  divSize = "0.3rem" margin-bottom = '0.15rem' border-radius = "0.15rem" 
			  spanText = "密 码"  spanWidth = "1rem"  spanbg = "#fff"  border = "solid 0.01rem #000" 
			  inputWidth = "calc(100% - 1rem)" inputSize = "0.3rem" type = "password"   placeholder = "请输入密码" 
			   v-model = "password"
			  /> 
			  
			  
			  <p v-if = "backError">**用户名或密码错误**</p>
			  
			  <label for="agree" ref = 'protocol' v-show= "agreeShow">
			  	<input type="checkbox" id = "agree" v-model = "agree">我已阅读并同意用户协议
			  </label>
			  
			  <Button  :text = "text" class = "toggleLogin"
			  	width = "2.5rem" height = "0.8rem" background-color = "#fff" border-radius = "0.2rem"
			  	font-size = "0.5rem"  color = "#000" border = "solid 0.01rem #000"
			  	@click = "regOrLogin" />
				
			  <Button  text = "没有账号？点我注册" class = "toggleLogin" v-if = "!agreeShow"
				width = "3.5rem" height = "0.5rem" background-color = "transparent" border-radius = "20px"
				font-size = "0.3rem"  color = "#000" border = "none"
				@click.native = "toggleReg" />
				<Button  text = "已有账号？点我登录" class = "toggleLogin" v-if = "agreeShow"
				width = "3.5rem" height = "0.5rem" background-color = "transparent" border-radius = "20px"
				font-size = "0.3rem"  color = "#000" border = "none"
				@click = "toggleLogin" />
		</div>
	</div>	
</template>

<script>
	import LiuInput from "../components/liu-input.vue"
	import Button from "../components/Button.vue"
	export default {
		name: "regLogin",
		data(){
			return {
				agree: "",            //    控制用户注册时是否同意用户协议，用来双向绑定复选框 
				agreeShow: "",        //    控制同意用户协议和没有账号去注册的显示和消失
				text: "登 录",         //    用来控制当前显示登陆还是注册，默认是注册   
				username: "",         //    控制双向绑定传递的用户名
				password: "",         //    控制双向绑定传递的密码
				regLoginMsg: "欢迎  **亲亲**  登录~~",      //    控制注册和登陆的状态 =>  登录成功，用户名已存在等等
				backError: "",        //    控制用户名或密码错误的显示
			}
		},
		components:{LiuInput,Button},
		mounted(){
			// console.log("mounted","reg")
		},
		destroyed(){
			// console.log("destroyed","reg")
		},
		methods:{
			goBack(){
				this.$router.push("/user");
			},
			toggleReg(){
				this.regLoginMsg = "欢迎  **亲亲**  注册~~";
				this.agreeShow = true;
				this.text = "注 册";
			},
			toggleLogin(){
				this.regLoginMsg = "欢迎  **亲亲**  登录~~";
				this.agreeShow = "";
				this.text = "登 录";
			},
			regOrLogin(){
				//  同一个按钮对接两个接口，根据里面的内容判断现在该访问那个接口
				if(this.text == "注 册"){
					//  点击访问注册接口， 这时要判断用户协议是否通过
					if(this.agree == true){
						this.$refs.protocol.style.color = "#000"
						// 到这里表示已经勾选上同意用户协议，可以发送请求了
						this.$axios({
							method: "POST",
							url: "/api/reg", 
							data: {username: this.username,password:this.password},
						}).then(res => {
							// console.log(res)
							if(res.data.err === 0){
								//  等于0时表示注册成功，去往用户界面，并将用户信息带过去渲染
								//  但是在注册时不种token，因为新用户打开时肯定是进入首页，遇到访问权限时才跳进来，先放到数据库里面
								//  后端这里进行判断用户名是否已经存在，一般的APP的注册和登录都是两个页面，注册完毕之后随后会跳转到登录界面，
								//  需要再次使用注册的密码进行登录，然后才可以访问别的页面。
								//  在这一次登录的时候（也就是用户第一次登录的时候）才会种植token。
								this.regLoginMsg = "注 册 成 功....."
								//  这里注册成功按照上面的要求应该是跳转到登录界面，重新在进行登录
								this.regLoginMsg = "欢迎  **亲亲**  登录~~";
								this.agreeShow = "";
								this.text = "登 录";
							}else if(res.data.err === 1){
								//  等于1时表示用户信息已经存在，应该走登录界面
								this.regLoginMsg = res.data.msg;
							}
						})
					}else{
						this.$refs.protocol.style.color = "red"
					}
				}
				if(this.text == "登 录"){
					//  点击访问登录接口
					this.$axios({
						method: "POST",
						url: "api/login",
						data:{username: this.username,password:this.password}
						}).then(res => {
							// console.log(res)
							//  在第一次登陆成功时候的种token
							if(res.data.err == 0){
								// 这里表示登陆成功，首先种 token
								window.localStorage.setItem("user",JSON.stringify(res.data))
								// 种完token后跳转回到以前的页面，如果没有以前界面，暂时先跳到user，跳过去时，将用户信息带过去渲染
								this.$router.replace({
									path: "/user",
									query:res.data
								})
							}else{
								this.backError = res.data.msg;
							}
						})
				     }
			}
		},
	}
</script>

<style scoped>
	
	.regLogin{
		width: 100%;
		height: 100%;
		background-image: url(../../public/img/bgpic.jpg);
		background-size: 100% 100%;
		overflow: hidden;
		text-align: center;
		background-color: rgba(255,255,255,0.5);
	}
	.regLogin h1{
	    font-size: 0.8rem;
		font-weight: 700;
		color: #000;
	    margin: 1rem auto 3rem;
	}
	.regLoginMsg{
		height: 0.5rem;
		font-size: 0.5rem;
		font-weight: 700;
	}
	.input{
	    width: 4.5rem;
	    height: 3rem;
	    /* border: solid 0.01rem hotpink; */
	    margin: 0.5rem auto 0;
	}
	.input p{
		color: red;
		text-align: left;
	}
	label{
		font-size: 0.3rem;
	}
	#agree{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.2rem;
		
	}
	.toggleLogin{
		font-weight: 700;
		margin: 0 auto;
		margin-bottom: 0.2rem;
		margin-top: 0.2rem;
	}
	.goBack{
		float: left;
		margin-left: 0.2rem;
	}
</style>
