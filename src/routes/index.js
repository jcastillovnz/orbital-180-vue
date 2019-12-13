import Roof from './../containers/roof/roof.vue' 
import Etage1 from './../containers/etage1/etage1.vue' 
import Rdc from './../containers/rdc/rdc.vue' 
import Pedestrian from './../containers/pedestrian/pedestrian.vue' 

const routes = [
    { path: '/',   component: Roof },
    { path: '/etage1', component: Etage1 },
    { path: '/rdc', component: Rdc },
    { path: '/pedestrian', component: Pedestrian },
  ]

  export default routes ;