import Vue from "vue";
import App from "./App.vue";
import router from "./router";
 
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
axios.defaults.baseURL = 'http://vps2.seekersoft.cn:9099'
// axios.defaults.baseURL = 'http://www.heisenbergvmc.com'

Vue.prototype.$axios = axios 
AOS.init();
// require styles
import 'swiper/dist/css/swiper.css'
import qs from 'qs'
import moment from 'moment'

Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)

})
Vue.prototype.$qs = qs;
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
