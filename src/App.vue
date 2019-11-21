<template>
<div >

<router-view class="view"></router-view>
<div class="turn-message"> <h1>Hola</h1>
<img   width="100" src="./assets/imgs/icons/turn.svg"> 
</div>
</div>
</template>
<style scoped>
@import './assets/css/index.css';
</style>
<script>
/* import turn from './components/turn.vue' */
export default {
  name: "App",
};
</script>

