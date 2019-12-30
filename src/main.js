import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes/'

const router = new VueRouter({
  mode: 'history',
  routes // 
}) 

const store = new Vuex.Store({
  state: {
    count: 0,
    color:null, 
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})


new Vue({
  router,
  store,
  components: { App },
  render: h => h(App),
}).$mount('#app')
