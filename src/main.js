import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/iconfont/iconfont.css"
import Axios from 'axios';
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex';


Axios.defaults.baseURL = "http://localhost:6060";
Axios.defaults.timeout = 5000;
Axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization');
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueAxios, Axios);


const store = new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },
  mutations: {
    changeToken(state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }

})


export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
