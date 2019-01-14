<template>
	<div class="login">
		<div class="all">
			<div class="logo">
				<div class="logoImg"><img src="../assets/img/logo.png" alt="" /></div>
				<div class="logoText">信息发布系统</div>
			</div>
			<div class="from">
				<mt-field  class="iconfont icon-zhanghao" v-model="username" placeholder="账号"></mt-field>
				<mt-field disableClear :type="seen?'password':'text'"  class="iconfont icon-mima" v-model="password" placeholder="密码"><i @click="seen = !seen" :class="seen?'iconfont icon-yanjing-bi':'iconfont icon-yanjing'"></i></mt-field>
				<mt-field class="iconfont icon-yanzhengma" v-model="captcha" placeholder="验证码"></mt-field>
			</div>
			<div class="code" @click="captchas">
				<img :src="path"  alt="" />
			</div>
			<div class="beginLogin" @click="login"><mt-button type="primary">登陆</mt-button></div>
		    <div class="text">
		    	<p>信息发布管理系统</p>
		    	<p>V0.0.001 B2019.1.5.0001</p>
		    </div>
		</div>
	</div>
</template>

<script>
	import { MessageBox,Toast } from 'mint-ui'
	export default {
		data(){
			return{
				 username:'',
	             password:'',
	             captcha:'',
				 path:'http://localhost:8080/sys/captcha.jpg',
				 seen:true
			}
		},
		methods:{
			captchas(){
				this.path = 'http://localhost:8080/sys/captcha.jpg?time='+Date.now()
			},
			login(){
				if(!this.username){
					MessageBox('警告', '账号不能为空！');
					setTimeout(()=>{
									this.captchas(); 
								},100)
				}else if(!this.password){
					MessageBox('警告', '密码不能为空！');
					setTimeout(()=>{
									this.captchas(); 
								},100)
				}else if(!this.captcha){
					MessageBox('警告', '验证码不能为空！');
					setTimeout(()=>{
									this.captchas(); 
								},100)
				}else{
					var obj = new FormData();
					obj.append("username",this.username.trim())
					obj.append("password",this.password.trim())
					obj.append("captcha",this.captcha.trim())
					this.$axios.post('sys/login',obj,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
						.then((res)=>{
							
							var resa = res.data;
							console.log(resa);
							if(resa.code == '500'){
								MessageBox('警告', '用户名或密码不正确！');
								setTimeout(()=>{
									this.captchas(); 
								},100)
								
							}else if(resa.code == '0'){
								 this.$router.push('/terminal')
							}
						})
						.catch(function(error){
							console.log(error);
              Toast(error)
						})
				}
				
			}
		}
	}
</script>

<style>
	.login{
		width: 3.75rem;
		min-height: 6.67rem;
		background: url(../assets/img/timg.jpg) no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.all{
		width: 85%;
		height: 5rem;
		display: flex;
		flex-direction: column;
	}
	.logo{
		width: 100%;
		height: 1rem;
		display: flex;
		justify-content: space-between;
	}
	.logoImg{
		width: 0.8rem;
		height: 0.8rem;
	}
	.logoImg img{
		width: 100%;
		height: 100%;
	}
	.logoText{
		height: 100%;
		flex-grow: 3;
	}
	.logoText{
		text-align: center;
		line-height: 0.8rem;
		font-size: 0.3rem;
		font-weight: bold;
		text-shadow: 0.01rem 0.01rem #f5f5f5;
	}
	/*.username,
	.psw{
		letter-spacing: 0.15rem;
	}*/
	.code{
		width: 99%;
		height: 0.6rem;
		border: 1px solid darkgray;
		margin-top: 0.2rem;
		box-shadow: 0.01rem 0.01rem darkgrey;
	}
	.code img{
		width: 100%;
		height: 100%;
	}
	.beginLogin{
		margin-top: 0.2rem;
		width: 100%;
		height: 0.5rem;
	}
	.beginLogin button{
		width: 100%;
		height: 100%;
	}
	.all .text{
		width: 100%;
		height: 0.5rem;
		display: flex;
		flex-direction: column;
		text-align: center;
		line-height: 0.3rem;
		font-size: 0.15rem;
		font-weight: bold;
		color: white;
		margin-top: 0.2rem;
		text-shadow: 0.01rem 0.01rem darkgray;
	}
	.icon-zhanghao,
	.icon-mima,
	.icon-yanzhengma{
		line-height: 0.45rem;
		font-size: 0.21rem;
		padding-left: 0.1rem;
		
	}

</style>
