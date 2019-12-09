import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes/'

const router = new VueRouter({
  mode: 'history',
  routes // 
}) 

new Vue({
  router,
  components: { App },
  render: h => h(App),
}).$mount('#app')
