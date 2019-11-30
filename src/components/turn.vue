<template>
<div class="">
<div class="turn-message"> 
<img   width="150" :src="base+'dist/turn-mobile.svg'"> 
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

