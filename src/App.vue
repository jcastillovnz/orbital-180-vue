<template>
<div >

<router-view class="view"></router-view>
 <Turn/>

</div>


</template>
<style scoped>
@import './assets/css/index.css';
</style>
<script>
var BASEURL=  location.pathname;

import Turn from  './components/Turn.vue'
import Loader from './components/Loader.vue'
export default {
  name: "App",
      components: {
Turn,
Loader,
  },
    data() {
    return {
     base: BASEURL
    };
  }
};
</script>

