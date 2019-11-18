import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Etage1 from './containers/etage1/etage1.vue' 


const routes = [
  { path: '/', component: Etage1 },

]

const router = new VueRouter({
  base: '/orbital-180-vue/',
  routes // 
}) 





new Vue({
  router,
  components: { App },
  render: h => h(App),
}).$mount('#app')
