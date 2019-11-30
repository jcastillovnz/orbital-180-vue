<template>
<div >
  <div class="container-wrapper" ref="componentContainer">
    <div class="container" v-if="imagesPreloaded">
      <img class="img-frames renders"
        tabindex="1"
        draggable="false"
        :src="spinner.currentPath"
        @keydown="handleKeydown"
        @mouseup="handleMouseUp"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchmove="handleTouchMove"
      />
    </div>


<Loader v-show="imagesPreloaded===false"> </Loader> 
  </div>


<Interface v-show="buttonsGroup===true" @next="next"  @prev="prev"  :spinner="spinner" :infinite="infinite"/>


</div>
</template>
<script>
import Loader from './../Loader'
import  config from "./../../config";
import Preload from "./Preload.js";
import Interface from "./Interface.vue";
const {infinite, buttons, speed, directionInverse} = config

export default {
  name: "Rotation",

    components: {
Interface,
Loader
  },

  props: {
    images: {
      type: Array,
      required: true
    },
    infinite: {
      type: Boolean,
      required: false,
      default: () => infinite
    },
       speed: {
      type: Number,
      required: false,
      default: () => speed
    },
  directionInverse: {
      type: Number,
      required: false,
      default: () =>directionInverse
    },
    touchDrag: {
      type: Boolean,
      required: false,
      default: () => true
    },
    mouseWheel: {
      type: Boolean,
      required: false,
      default: () => true
    },
    mouseDrag: {
      type: Boolean,
      required: false,
      default: () => true
    },
  buttonsGroup: {
      type: Boolean,
      required: false,
      default: () => buttons
    },

  },

  data() {
    return {
      imagesPreloaded: false,
      speedController: 0,

      spinner: {
        current: 0,
        size: 0,
        currentPath: null
      },
      loader:'',
      mouse: {
        isMoving: false
      },
      touch: {
        isMoving: false,
        initialX: 0
      }
    };
  },

  beforeMount() {
   Preload(this.images).then(() => (this.imagesPreloaded = true));
  },

  mounted() {
  this.loader = false;
if( this.directionInverse){
  var calculo = this.images.length / 2
  var parseToInt =  parseInt(calculo)
  this.spinner.current = parseToInt;
}
    this.$refs.componentContainer.addEventListener(
      "mousewheel",
      this.handleWheel,
      false
    );
    this.$refs.componentContainer.addEventListener(
      "wheel",
      this.handleWheel,
      false
    );
    this.$refs.componentContainer.addEventListener(
      "DOMMouseScroll",
      this.handleWheel,
      false
    );
  },

  destroyed() {
    this.$refs.componentContainer.removeEventListener(
      "mousewheel",
      this.handleWheel
    );
    this.$refs.componentContainer.removeEventListener(
      "wheel",
      this.handleWheel
    );
    this.$refs.componentContainer.removeEventListener(
      "DOMMouseScroll",
      this.handleWheel
    );
  },

  created() {
this.loader = true;
this.spinner.size = this.images.length;
this.spinner.currentPath = this.images[0]; 
console.log(this.directionInverse)







  },

  methods: {
    handleKeydown(event) {
      if (event.keyCode === 39) {
        event.preventDefault();
        this.handleMovement(1);
      }
      if (event.keyCode === 37) {
        event.preventDefault();
        this.handleMovement(-1);
      }
    },

    handleSlider(event) {

      this.spinner.current = parseInt(event.target.value);
      this.spinner.currentPath = this.images[event.target.value - 1];
    },
next() {
  this.directionInverse? this.nextFrame(): this.prevFrame()
},
prev() {
 this.directionInverse? this.prevFrame(): this.nextFrame()
    },


    handleMouseDown() {
      this.mouse.isMoving = true;
    },

    handleMouseUp() {
      this.mouse.isMoving = false;
    },

    handleMouseMove(event) {
      if (this.mouse.isMoving && this.mouseDrag) {
        this.handleMovement(event.movementX);
      }
    },

    handleTouchStart(event) {
      event.preventDefault();
      this.touch.isMoving = true;
      this.touch.initialX = event.touches[0].pageX;
    },

    handleTouchEnd() {
      this.touch.isMoving = false;
    },

    handleTouchMove(event) {
      if (this.touchDrag) {
        const delta = -(this.touch.initialX - event.touches[0].pageX);
        this.handleMovement(delta);
      }
    },

    handleWheel(event) {
      event.preventDefault();
      if (this.mouseWheel) {
        this.handleMovement(event.deltaY);
      }
    },
  nextFrame(delta) {
        if (
          this.spinner.current >= 0 &&
          this.spinner.current < this.spinner.size
        ) {
          this.spinner.current++;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else {
          if (this.infinite) {
            this.spinner.current = 1;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          }
        }

    },
      prevFrame(delta) {
 if (this.spinner.current >= 0 && this.spinner.current - 1 > 0) {
          this.spinner.current--;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else {
          if (this.infinite) {
            this.spinner.current = this.spinner.size;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          }
        } 

    },
handleMovement(delta) {

      this.speedController++;
      if (this.speedController < this.speed) {
        return;
      }
      if (this.speedController > this.speed) {
        this.speedController = 0;
      }
      if (delta >= 0) {
        /**
         * El usuario avanza
         */
     this.directionInverse? this.prevFrame(): this.nextFrame()
 

      } else {
        /**
         * El usuario retrocede
         */

     this.directionInverse? this.nextFrame(): this.prevFrame()
 
        /* this.prevFrame(); */

      }
    }
  }
};
</script>
<style scoped>
.container-wrapper{
background-color: aqua;
/* position:absolute; */
}
</style>