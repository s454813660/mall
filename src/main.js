import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import toast from "./components/common/toast"

import FastClick from "fastclick";
import lazyload from "vue-lazyload";
import 'assets/css/base.css'
Vue.config.productionTip = false

// 解决移动端300ms延迟
FastClick.attach(document.body);
Vue.prototype.$bus = new Vue()
Vue.use(toast)
.use(lazyload, {
  loading: require("./assets/img/common/lazyload.gif")
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
