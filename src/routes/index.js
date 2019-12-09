
import Etage1 from './../containers/etage1/etage1.vue' 
import Rdc from './../containers/rdc/rdc.vue' 

const routes = [
    { path: '/',       component: Etage1 },
    { path: '/etage1', component: Etage1 },
    { path: '/etage2', component: Rdc },
    { path: '/etage3', component: Etage1 },
  ]

  export default routes ;