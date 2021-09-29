import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
import Header from './components/Header/Header'
import store from './vuex/store.js'
import 'lib-flexible'
//注册全局组件Header
Vue.component('Header',Header)
Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


// new Vue({
//   el: '#app',
//   render: h => h(App),
// })
new Vue({
  el: '#app',
  components: {App},
  template: '<App />',
  router,//配置过后所有组件都能看到$router和$route <router-link> 和 <router-view>
  store,
})

console.log('xxx');
