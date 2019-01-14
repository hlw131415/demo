<template>
	<div class="modiffy">
		<v-header title='修改密码'>
			<span slot='left' class="iconfont icon-fanhui modiffyText" @click="back">返回</span>
		</v-header>
		<div class="content">
			<mt-field label="旧密码" placeholder="请输入旧密码" v-model="oldpassword"></mt-field>
			<mt-field label="新密码" placeholder="请输入新密码" type="password" v-model="newpassword"></mt-field>
			<mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="qrpassword"></mt-field>
		    <div class="anniu">
		    	<div class="anniu-btn">
		    		<mt-button type="primary" @click="ok" v-show="backButton">确认</mt-button>
            <mt-button type="danger" @click="cancel" v-if="backButton">取消</mt-button>
            <mt-button type="primary" @click="cancel" v-else>返回</mt-button>
		    	</div>
		    </div>
		</div>
		
	</div>
</template>

<script>
	import header from '../views/header'
	import { MessageBox } from 'mint-ui'
	export default {
		data(){
			return {
			   oldpassword:'',
			   newpassword:'',
			   qrpassword:'',
         backButton:true
			}
		},
		components:{'v-header':header},
		methods:{
			back:function(){
				this.$router.go(-1)
			},
			ok:function(){
				var oldpassword = this.oldpassword;
				var newpassword = this.newpassword;
				var qrpassword = this.qrpassword;
				if(!oldpassword){
					this.$toast('旧密码不能为空!')
					return false
				}else if(!newpassword){
					this.$toast('新密码不能为空!')
					return false
				}else if(!qrpassword){
					this.$toast('请再次确认密码')
					return false
				}else if(newpassword != qrpassword){
					this.$toast('两次输入不一致!')
					return false
				}else{
					var obj = new FormData();
					obj.append("pswd",oldpassword)
					obj.append("newPswd",newpassword)
					this.$axios.post('/sys/user/updatePswd?_'+Date.now(),obj,{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
						.then((res)=>{
							
							var resa = res.data;
							console.log(resa);
							if(resa.code == '500'){
								MessageBox('警告', '旧密码不正确！');
							}else if(resa.code == '0'){
								 MessageBox('提示', '修改成功！');
								 setTimeout(()=>{
                   this.backButton = false;
                 },600)
							}
						})
						.catch(function(error){
							console.log(error);
						})
				}
				
			},
			cancel:function(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.content{
		width: 3.75rem;
		margin: 0.45rem 0 0.51rem 0;
	}
	.modiffyText{
		float: left;
		font-size: 0.13rem;
		padding-left: 0.05rem;
	}
	.list{
		width: 3.75rem;
		height: 0.4rem;
		background-color: white;
		border-bottom: 1px solid #f5f5f5;
		line-height: 0.4rem;
		padding-left: 0.1rem;
		box-sizing: border-box;
		position: relative;
		font-size: 0.16rem;
		overflow: hidden;
		vertical-align: top;
	}
	.list input{
		height: 80%;
		border: none;
		outline: none;
		width: 78%;
		position: absolute;
		top: 0.05rem;
		right: 0;
		line-height: 0.4rem;
		vertical-align: top;
	}
	.list label{
		text-align: center;
	}
	.anniu{
		display: flex;
		justify-content: space-around;
		margin-top: 0.3rem;
	}
    
</style>
