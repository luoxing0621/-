import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// 全局引入axios
import VueAxios  from 'vue-axios'
Vue.use(VueAxios,axios)
Vue.use(ElementUI);
// swiper
import VAS from 'vue-awesome-swiper'
Vue.use(VAS)
import 'swiper/css/swiper.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
