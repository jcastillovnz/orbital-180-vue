<template>
<div  scrolling="no">


 <Rotation  :area="area"  :images="imgs" :masks="masks" :mouseWheel="false" />
</div>
</template>


<script>

import Vue from 'vue'
import Rotation from "../core/Rotation";
import Loader from "./../../components/Loader"
import {images, masks} from "./images";
export default {
  name: "Etage1",
  components: {
Rotation, 
Loader,
  },
  data() {
    return {
      imgs: images,
      masks:masks,
    };
  },
  methods : {

 area: function (event) {

alert("area")
      }

    
  }
};
</script>
