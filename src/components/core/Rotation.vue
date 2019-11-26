<template>
<div>
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
const {infinite, buttons} = config

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
var n = this.spinner.current + 1
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
prev() {

var n = this.spinner.current - 1
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

    handleMovement(delta) {

      /**
       * Avanza
       */
      if (delta >= 0) {
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
      } else {
        /**
         * Retrocede
         */
        if (this.spinner.current >= 0 && this.spinner.current - 1 > 0) {
          this.spinner.current--;
          this.spinner.currentPath = this.images[this.spinner.current - 1];
        } else {
          if (this.infinite) {
            this.spinner.current = this.spinner.size;
            this.spinner.currentPath = this.images[this.spinner.current - 1];
          }
        }
      }
    }
  }
};
</script>
