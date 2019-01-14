<template>
	<div class="addterminal">
		<v-header title="添加终端">
				<span slot='left' class="iconfont icon-fanhui addback" @click="back">返回</span>
		</v-header>
		<div class="add-content">
			<mt-field label="标识码" placeholder="请输入标识码" v-model="id"></mt-field>
			<mt-field label="备   注" placeholder="备注" v-model="remarks"></mt-field>
		</div>
		<div classs="addValue">
		    	<mt-button type="primary" class="adds" @click="beginAdd">添加</mt-button>
		    </div>
	</div>
	
</template>

<script>
	import header from '../views/header'
	import { Toast } from 'mint-ui'
	export default {
		data() {
			return {
				id:'',
				remarks:''
			}
		},
		components:{'v-header':header},
		methods:{
			back(){
				this.$router.go(-1)
			},
			beginAdd(){
				Toast("添加成功!");
			}
		}
	}
</script>

<style>
.addterminal{
	position: relative;
	margin-bottom: 0.51rem;
}

.addback{
		position: absolute;
		font-size: 0.13rem;
		left: 0.05rem;
		
	}
.add-content{
	margin-top: 0.45rem;
}
.adds{
	width:100%;
	margin-top: 0.05rem;
}

</style>