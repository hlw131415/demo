<template>
	<div class="program">
		<v-header title='我的模板' class="index"></v-header>
		<div class="program-content">
			
		</div>
		<mt-search
      v-model="value"
      class="search"
    ></mt-search>
	</div>
</template>

<script>
	import header from '../views/header'

	export default {
		components:{'v-header':header},
    data(){
		  return {
		     value:''
      }
    }
	}
</script>

<style>
  .search{
    z-index: 999;
    height: 0.5rem;
    position: fixed;
    width: 100%;
    top: 0.4rem;
  }
	.program-content{
		margin-top: 0.45rem;
		margin-bottom: 0.51rem;
	}
	.index{
		z-index: 100;
	}
</style>
