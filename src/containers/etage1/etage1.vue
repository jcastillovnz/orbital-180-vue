<template>
<div  scrolling="no">
 <Rotation   :images="imgs"  :mouseWheel="false" >

</Rotation>  


</div>
</template>


<script>

import Vue from 'vue'
import Rotation from "../core/Rotation";
import Loader from "./../../components/Loader"
import images from "./images";
export default {
  name: "Etage1",
  components: {
Rotation, 
Loader,
  },
  data() {
    return {
      imgs: images
    };
  }
};
</script>
