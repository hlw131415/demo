<template>
	<div class="message">
		<v-header title='信息'></v-header>
		<div class="content">
			<div class="photo">
			<span><img src="../img/user8-128x128.jpg"/></span>
			<div class="user"><span>{{user}}</span></div>
			</div>
			<ul>
				<li><mt-field disableClear label="用户名" v-model="user" readonly="readonly"></mt-field></li>
			    <li><mt-field disableClear label="手机号" v-model="phone" readonly="readonly"></mt-field></li>
			    <li><mt-field disableClear label="邮箱" v-model="email" readonly="readonly"></mt-field></li>
			</ul>
			
			
			
	
			<div class="modiffy">
				<ul>
					<router-link to='/modiffypassword'><li><span class="iconfont icon-icon_password"></span><span style="color: black;">修改密码</span></li></router-link>
					<li @click="userBack"><span class="iconfont icon-tuichu"></span>退出登录</li>
				</ul>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import header from '../views/header'
	import { MessageBox } from 'mint-ui'
	export default {
		data() {
			return {
			   user:'',
			   username:'',
			   email:'',
			   phone:'',
			  
			}	
		},
		created(){	
			this.getDate();
		},
		components:{'v-header':header},
		methods:{
			getDate(){
				
				this.$axios.get('/sys/user/info?_'+Date.now())
				.then((res)=>{
					this.list = res.data
					console.log(this.list)
					this.email = this.list.user.email
					this.user = this.list.user.username
					this.phone = this.list.user.mobile
				})
				.catch(function(error){
					console.log(error);
				})
			},
			userBack(){
				MessageBox({
				  title: '退出',
				  message: '确定退出登录吗?',
				  confirmButtonText:'退出',
				  cancelButtonText: '再看看',
				  showCancelButton: true,
				  confirmButtonHighlight:true,
				  closeOnClickModal:true
				}).then((res) => {
			          if (res === 'confirm') {
			          	setTimeout(()=>{
			          		this.$toast('退出成功!')
			          		setTimeout(()=>{
			          			this.$router.push('/login');
			          		},1000)
			          	},500)
			            
			          }
			        }).catch(() => {
			          MessageBox.close(false)
			        })
				
			}
		}
	}
</script>

<style>
	.content{
		width: 3.75rem;
		margin: 0.45rem 0 0.51rem 0;
	}
	.photo{
		width: 3.75rem;
		height: 1.5rem;
		text-align: center;
		border-bottom: 1px solid #f5f5f5;
		
	}
	.photo img{
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;
		margin: 0.05rem auto;
	}
	.user{
		text-align: center;
		font-size: 0.22rem;
	}
	.modiffy ul{
		list-style: none;
		text-align: center;
		height: 0.9rem;
		line-height: 0.4rem;
		margin-top: 0.1rem;
		vertical-align: middle;
	}
	.modiffy ul li{
		font-size: 0.16rem;
		background-color: white;
		border-bottom: #f5f5f5 0.01rem solid;
		font-weight: 500;
		
	}
	.modiffy ul li span{
		vertical-align: middle;
		padding-right: 0.05rem;
	}
	.modiffy ul a{
		text-decoration: none;
	    color: #999999;
	}
	.icon-tuichu{
		color: red;
	}
	.icon-icon_password{
	    color: green;	
	}
</style>