import Vue from 'vue'
import Router from 'vue-router'
import terminal from '../components/terminal'
import program from '../components/program'
import insertplay from '../components/insertplay'
import message from '../components/message'
import modiffypassword from '../components/modiffypassword'
import addterminal from '../components/addterminal'
import login from '../components/login'
Vue.use(Router)

export default new Router({
  routes:[
     {
     	path:'/terminal',
     	component:terminal,
     	meta:{
     		showFooter:true
     	}
     },
     {
     	path:'/program',
     	component:program,
     	meta:{
     		showFooter:true
     	}
     },
     {
     	path:'/insertplay',
     	component:insertplay,
     	meta:{
     		showFooter:true
     	}
     },
     {
     	path:'/message',
     	component:message,
     	meta:{
     		showFooter:true
     	}
     },
     {
     	path:'/modiffypassword',
     	component:modiffypassword
     },
     {
     	path:'/addterminal',
     	component:addterminal
     },
     {
     	path:'*',
     	component:login
     }
  ]
})
