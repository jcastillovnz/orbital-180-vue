<template>
<div >

<router-view class="view"></router-view>
<div class="turn-message"> 
<img   width="100" src="./assets/imgs/icons/turn.svg"> 
</div>


</div>


</template>
<style scoped>
@import './assets/css/index.css';
</style>
<script>
import Turn from './components/Turn.vue'
export default {
  name: "App",
};
</script>

