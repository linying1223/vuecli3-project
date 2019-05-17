import Vue from 'vue'
// import './utils/axios'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import './css/element-variable.css'
import './assets/icon/iconfont.css';

Vue.config.productionTip = false
// Vue.use(VueAxios, axios)
Vue.prototype.axios = axios

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
