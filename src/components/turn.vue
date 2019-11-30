<template>
<div class="">
<div class="turn-message"> 
<img   width="200" :src="base+'dist/turn.png'"> 
</div>
</div>
</template>

<script>
import config from './../config'

const {base} = config

export default {
name:'Turn',
  data () {
    return {
base:base,
    }
  }
}
</script>

