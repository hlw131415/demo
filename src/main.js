// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'; 
import { DatetimePicker,Loadmore,Indicator } from 'mint-ui';
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Loadmore.name, Loadmore);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
