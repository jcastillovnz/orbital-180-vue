<template>
  <div >


    <Rotation :class="''"  :images="imgs" :infinite="true" :mouseWheel="false" :speed="5" :slider="true">
 <Loader/>
    </Rotation>



</div>


</template>

<style scoped>
@import './assets/css/index.css';
</style>
<script>

import Vue from 'vue'
Vue.component('Loader', require('./components/loader.vue').default);
import Rotation from "./components/nucleo/Rotation.vue";


const images = [...Array(30)].map(
  (_, i) =>
    `/src/assets/imgs/renders/${i +
      1}.jpg`
);



export default {
  name: "App",
  components: {
Rotation
  },
  data() {
    return {
      imgs: images
    };
  }
};
</script>

<style >


</style>
