<template>
<div  scrolling="no">
 <Rotation :masks="masks"   :images="imgs"  :mouseWheel="false" />


</div>
</template>
<script>

import Vue from 'vue'
import Rotation from "../core/Rotation";
import Loader from "./../../components/Loader"
import {images, masks} from "./images";
export default {
  name: "Rdc",
  components: {
Rotation, 
Loader,
  },
  data() {
    return {
      imgs: images,
      masks: masks,
    };
  }
};
</script>
