<template>
  <div style="" >

<div class="" style="    position: fixed;
  bottom: 0;
  margin-bottom:10px;
  right: 47%;
  width: 600;
 z-index:1000; margin-top:-70px;   pointer-events: none; ">
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
