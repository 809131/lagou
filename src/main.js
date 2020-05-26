import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import qs from 'qs';


Vue.prototype.axios = axios;
Vue.config.productionTip = false

import MintUI from 'mint-ui'

import "mint-ui/lib/style.min.css";
import "../public/axios.min.js";
Vue.config.productionTip = false
Vue.use(MintUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
