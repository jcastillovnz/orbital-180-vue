<template>

<div class="container">sdfdsfsdffds
<div class="loader center">
</div>
</div>
</template>

<script>
export default {
name:'LoaderComponent',
  data () {
    return {

    }
  }
}
</script>

<style>

.container{
  position: relative;
   
}


.center {
  
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.loader {

  height: 100px;
  padding: 20px;
  left: 43%;

  margin:auto;
  border:3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
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