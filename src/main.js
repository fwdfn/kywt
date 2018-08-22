// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'mint-ui/lib/style.css';
import global_ from './components/tab/Global'//引用文件
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
axios.defaults.baseURL = global_.BASE_URL;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
