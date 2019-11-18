<template>
<div >
 <Rotation   :images="imgs"  :mouseWheel="false" :speed="1" :slider="true">

</Rotation>  


</div>
</template>


<script>

import Vue from 'vue'
import Rotation from "./../../components/core/Rotation";
import images from "./images";
export default {
  name: "Etage1",
  components: {
Rotation
  },
  data() {
    return {
      imgs: images
    };
  }
};
</script>
