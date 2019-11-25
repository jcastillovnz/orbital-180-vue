<template>
<div >
 <Loader/>
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

export default {
  name: "App",
      components: {
Turn,

  },

    data() {
    return {
     base: BASEURL
    };
  }
};
</script>

