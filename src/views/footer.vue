<template>
	<div class="drop">
		<div class="tab1">
			<span class="tab_terminal">
				<router-link to='/terminal' class="mui-active">
				<span class="iconfont icon-zuzhiqunzu"></span>
				<span class="text">{{tab_type}}</span>
			</router-link>
			</span>
		</div>
		<div class="tab2">
			<span class="tab_terminal">
				<router-link to='/program'>
				<span class="iconfont icon-gongnengdingyi"></span>
				<span>{{tab_type1}}</span>
			</router-link>
			</span>
		</div>
		<div class="tab3">
			<span class="tab_terminal">
				<router-link to='/insertplay'>
				<span class="iconfont icon-icon_fabu"></span>
				<span>{{tab_type2}}</span>
			</router-link>
			</span>
		</div>
		<div class="tab4">
			<span class="tab_terminal">
				<router-link to='/message'>
				<span class="iconfont icon-zhanghaoquanxianguanli"></span>
				<span>{{tab_type3}}</span>
			</router-link>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tab_type:'终端',
				tab_type1:'节目',
				tab_type2:'插播',
				tab_type3:'信息'
			}
		}
	}
</script>

<style>
	
	.drop{
		width: 3.75rem;
		height: 0.5rem;
		background-color: #F7F7F7;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: space-around;
		border-top: #CECED1 1px solid;
		z-index: 999;
		padding-top: 0.05rem;
	}
	.tab1,
	.tab2,
	.tab3,
	.tab4{
		flex-grow: 1;
		text-align: center;
		font-size: 0.11rem;
		
	}
	.tab1 span .iconfont,
	.tab2 span .iconfont,
	.tab3 span .iconfont,
	.tab4 span .iconfont{
		font-size: 0.22rem;
	}
	
	.tab1 span,
	.tab2 span,
	.tab3 span,
	.tab4 span{
		display: block;
		
		font-size: 0.16rem;
	}
	.tab_terminal a{
		text-decoration: none;
		display: block;
		color: #999999;
	}
	.tab_terminal{
		height: 100%;
	}
	
	.router-link-active{
		color: #007AFF!important;
	}
	
</style>