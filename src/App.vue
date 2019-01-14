<template>
  <div id="app">
     <v-footer v-show="$route.meta.showFooter"></v-footer>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
	import header from './views/header'
	import footer from './views/footer'
	import login from './components/login'
export default {
  name: 'App',
  components:{
  	'v-header':header,
  	'v-footer':footer,
  	login
  }
}
</script>

<style>
#app{
	font-size: 0.12rem;
	
}
.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
