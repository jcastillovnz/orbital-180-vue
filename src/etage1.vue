<template>
  <div >



 
  <div id="app" class="wrapper center">
    <VueProductSpinner :class="'renders'"  :images="imgs" :infinite="true" :mouseWheel="false" :speed="5" :slider="false">
<Loader/>
    </VueProductSpinner>
  </div>


</div>


</template>

<style scoped>

</style>
<script>

import Vue from 'vue'
Vue.component('Loader', require('./components/loader.vue').default);

import VueProductSpinner from "vue-product-spinner";


const images = [...Array(30)].map(
  (_, i) =>
    `/src/assets/r1/renders/${i +
      1}.jpg`
);



export default {

  components: {
    VueProductSpinner
  },
  data() {
    return {
      imgs: images
    };
  }
};
</script>

