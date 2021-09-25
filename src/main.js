import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
import 'lib-flexible'
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
})

console.log('xxx');
