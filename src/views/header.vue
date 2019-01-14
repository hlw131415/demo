<template>
	<div class="top"> 
		<slot name='left' class='left'></slot>
		<span class="center">{{title}}</span>
		<slot name='right'></slot>
	</div>
</template>

<script>
	export default {
		props:{title:String}
	}
</script>

<style>
	.top{
		width: 3.75rem;
		height: 0.45rem;
		background-color: #007AFF;
		font-size: 0.16rem;
		text-align: center;
		color: white;
		line-height: 0.45rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
	}
</style>
