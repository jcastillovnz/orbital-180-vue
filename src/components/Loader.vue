<template>

<div class="container" >
<div class="loader center">
</div>
</div>
</template>

<script>
export default {
name:'Loader',
  data () {
    return {

    }
  }
}
</script>

<style>

.container{

 
}


.center {
  position: absolute;
  top: 45%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.loader {
  height: 100px;
  padding: 20px;
  left: 46%;
  margin:auto;
  border:3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>