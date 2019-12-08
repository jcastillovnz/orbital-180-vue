<template>
<div >

 <Dashboard/>
 <Turn/>


</div>


</template>
<style scoped>
@import './assets/css/index.css';
</style>
<script>
var BASEURL=  location.pathname;
import Dashboard from  './containers/Dashboard/Dashboard'
import Turn from  './components/Turn.vue'

export default {
  name: "App",
      components: {
Turn,
Dashboard

  },

    data() {
    return {
     base: BASEURL
    };
  }
};
</script>
<style lang="css">
body {overflow-y:hidden!important;}
</style>

