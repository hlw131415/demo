<template>
	<div class="insertplay">
		<v-header title='插播'>		
			    <mt-button  slot="right" class="insert" @click="release" v-show="displays">发布</mt-button>
		</v-header>
		<div class="insertplay-conent">
			<div class="content">
		      <mt-field label="终 端 名:" v-model="title"></mt-field>
		      <mt-field label="插播时间">
		        <mt-switch v-model="isRemind"></mt-switch>
		      </mt-field>
		      <mt-cell title="开始时间" v-show="isRemind">
		        <div @click="chooseDatetime">{{dateTimeText}}</div>
		      </mt-cell>
		      <mt-cell title="结束时间" v-show="isRemind">
		        <div @click="chooseDatetimes">{{dateTimeTexts}}</div>
		      </mt-cell>
		      <textarea v-bind:maxlength="200" class="insert_content" @input="descArea" type="textarea" v-model="introduct" rows="8" placeholder="请输入插播内容"></textarea>
		             <span class="num-desc">{{Surplus}}/200</span>
		     <mt-datetime-picker
		        @confirm="confirm"
		        ref="picker"
		        type="datetime"
		        v-model="startTime">
		      </mt-datetime-picker>
		       <mt-datetime-picker
		        @confirm="closeConfirm"
		        ref="pickers"
		        type="datetime"
		        v-model="closeTime">
		      </mt-datetime-picker>
		    </div>
		</div>
	</div>
</template>

<script>
	import header from '../views/header'
	import { Toast } from 'mint-ui'
	export default {
		data(){
			return {
			  disabled: true,
			  title: '',
	          content: '',
	          datetime: '',
	          dateTimeText: '请选择播放时间',
	          dateTimeTexts:'请选择结束时间',
	          isRemind: false,
	          Surplus: 200,
	          introduct: '',
              displays:false,
              startTime:'',
              closeTime:''
			}
		},
		components:{'v-header':header},
		methods:{
			   descArea(){
			      var textVal = this.introduct.length;
			      this.Surplus = 200 - textVal;
			      if(textVal>=1){
			      	this.displays = true
			      }else{
			      	this.displays = false
			      }
			   },
			   release(){
			   	console.log(this.title);
			   	if(this.dateTimeText == this.dateTimeTexts){
			   		Toast('播放时间与结束时间不能相同！');
			   		return false;
			   	}else if(this.dateTimeText == '请选择播放时间' || this.dateTimeTexts == '请选择结束时间'){
			   		Toast('请设置播放和结束时间！');
			   	}
			   },
		      chooseDatetime(){
		        this.$refs.picker.open();
		        },
		      chooseDatetimes(){
		        this.$refs.pickers.open();
		      },
		      confirm(val){
		        this.dateTimeText = val.toLocaleString()
		      },
		      closeConfirm(val){
		      	this.dateTimeTexts = val.toLocaleString()
		      }
		     
         }
	}
</script>

<style>
	.insertplay-conent{
		margin: 0.45rem 0 0.5rem 0;
	}
     .num-desc,
	.insert-time{
		height: 0.35rem;
		line-height: 0.35rem;
		display: block;
		padding-left: 0.1rem;
		font-size: 0.16rem;
	}
	.insert-time{
		margin-top: 0.1rem;
	}
	.num-desc{
		position: absolute;
		right: 0;
	}
	.insert{
		position: absolute;
		right: 0.05rem;
		top: 0.05rem;
		width: 0.6rem;
		height: 0.35rem;
		border-radius: 0.1rem;
		font-size: 0.14rem;
		animation: first .3s linear;
	}
	@keyframes first{
		from{opacity: 0.5;transform: scale(1,3);}
		to{opacity: 1;transform: scale(1,1);}
	}
     .insert_content{
     	width: 3.75rem;
     	outline: none;
     	display: inline-block;
     	margin: 0 auto;
     	height: 1.5rem;
     	padding-left: 0.1rem;
     	padding-top: 0.1rem;
     	box-sizing: border-box;
     }
	 .seting-time{
	 	padding-left: 0.1rem;
	 	padding-top: 0.05rem;
	 	box-sizing: border-box;
	 	margin-top: 0.3rem;
	 }
	 .start-text,
	 .close-text{
	 	font-size: 0.16rem;
	 }
	 .close-text{
	 	margin: 0.2rem auto;
	 }
	.seting-time input{
		outline: none;
		margin-left: 0.2rem;
		width: 2rem;
		height: 0.3rem;
	}
</style>