<template>
 <div style="margin-left:-10%" class="container-control">
<div class="btn-group" >
<button style="pointer-events: auto;" @click="prev()" >
 <
</button>
<button style="pointer-events: auto;"  @click="next()  "  >
> 
</button>

<button style="pointer-events: auto;"  @click="zoomOut(spinner.current + 1)">
-
</button>
<button style="pointer-events: auto;" @click="zoomIn(spinner.current - 1)" >
+
</button>

</div>
 </div>

</template>
<style scoped>

</style>
<script>


import config from './../../config/';
const {amount} = config;

export default {
  name: "Interface",

  props: {

     spinner: {
      type: Object,
      required: true
    },
        infinite: {
      type: Boolean,
      required: false,
      default: () => true
    },
  
  },

  data() {
    return {
      imagesPreloaded: false,
      zoom: {
       height:99,
       currentheight:0,
       newheight:0,
       amount:amount,
      }
  
    };
  },
  methods: {

  zoomIn(n) { 

this.changeZoom(this.zoom.amount);
},
  zoomOut(n) { 
this.changeZoom(-this.zoom.amount);

},
changeZoom(amount) { 

this.zoom.currentheight = document.querySelector('.renders').height;
if (this.zoom.currentheight === 600  ) return false;
  else {

this.zoom.newheight =  parseInt(this.zoom.currentheight)  + amount;
document.querySelector('.renders').style.height = this.zoom.newheight +'px';

  }




},



prev(n) {

this.$emit('prev')
    },
 next(n) {


this.$emit('next')

    },


      }


};
</script>
