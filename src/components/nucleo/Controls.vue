<template>
  <div >

<div class="btn-group" style="  position: fixed; z-index:1000; margin-top:-70px;   pointer-events: none; margin-left:45%;">
<button style="pointer-events: auto;"  @click="right(spinner.current + 1)">
 < 
</button>
<button style="pointer-events: auto;" @click="left(spinner.current - 1)"   >
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
  name: "Controls",

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



if (currheight === 600  ) return false;
  else {


var currheight =  $('.renders').css("height");

var newheight =  parseInt(currheight)  + amount;
alert(newheight)
 $('.renders').css("height" , newheight );
 $('.renders').css("z-index" , "0" );



  }




},



right(n) {


if(this.infinite===true) {

if(this.spinner.current< this.spinner.size ) {
this.spinner.current = parseInt(n);
this.spinner.currentPath = this.images[n - 1];
}else{
this.spinner.current =1
this.spinner.currentPath = this.images[1 - 1]
}
 }

if(this.infinite===false)  {


if( this.spinner.current<this.spinner.size  ) {
this.spinner.current = parseInt(n);
this.spinner.currentPath = this.images[n - 1];
}




 }


    },
  left(n) {

if(this.infinite===true) {


if(this.spinner.current>1 ) {
this.spinner.current = parseInt(n);
this.spinner.currentPath = this.images[n - 1];
}
else{
this.spinner.current = 30
this.spinner.currentPath = this.images[30 - 1]
}




 }

if(this.infinite===false)  {

if( this.spinner.current> 1  ) {
this.spinner.current = parseInt(n);
this.spinner.currentPath = this.images[n - 1];
}
}

    },


      }


};
</script>
