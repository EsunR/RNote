import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import axios from 'axios';
import VueAxios from 'vue-axios';
import baseConfig from './config/base_config'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

axios.defaults.baseURL = baseConfig.apiUrl
console.log(localStorage.getItem('login_token'));
axios.defaults.headers.common['Authorization'] = localStorage.getItem('login_token')

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
