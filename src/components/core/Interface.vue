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

<script>

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
       height:99
      }
  
    };
  },
  methods: {

  zoomIn(n) { 

this.changeZoom(10);
},
  zoomOut(n) { 
this.changeZoom(-10);

},
changeZoom(amount) { 

var currheight = document.querySelector('.renders').height;
if (currheight === 600  ) return false;
  else {

var newheight =  parseInt(currheight)  + amount;
document.querySelector('.renders').style.height = newheight +'px';

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
