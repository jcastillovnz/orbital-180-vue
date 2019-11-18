<template>
<div >
 <Rotation   :images="imgs"  :mouseWheel="false" :speed="1" :slider="true">
<loader>

</loader>
</Rotation>  


</div>
</template>


<script>

import Vue from 'vue'
import Rotation from "./../../components/core/Rotation";
import loader from "./../../components/loader";
import images from "./images";
export default {
  name: "Etage1",
  components: {
Rotation, 
loader
  },
  data() {
    return {
      imgs: images
    };
  }
};
</script>
