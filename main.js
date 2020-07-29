// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Store from './store'
import router from './router'
import './assets/css/reset.css'
import './assets/js/remScale'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.$imgUrl = 'http://localhost:3000'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Store,
  components: { App },
  template: '<App/>'
})
