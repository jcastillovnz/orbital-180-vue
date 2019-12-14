<template>
<div >


  <div class="container">

   <div class="container-filter">
<center>
       <h1> 
  MENU
       </h1>

</center>
<ul>
<li v-for="tab in tabs"  v-bind:key="tab"  v-on:click="currentTab = tab.view"> {{tab.name}} </li>
</ul>

</div>  
<div class="container-view">

<div  class="windows">
<!--     
<router-view style="cursor: pointer" ></router-view>
 -->


<keep-alive>
    {{currentTabComponent}}
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>




</div>
</div>




  </div>

</div>
</template>


<script>

import Vue from 'vue'
import Roof from './../roof/roof.vue' 
import Etage1 from './../etage1/etage1.vue' 
import Rdc from './../rdc/rdc.vue' 
import Pedestrian from './../pedestrian/pedestrian.vue' 

export default {
  name: "Dashboard",
  components: {
Etage1,
  },
  data() {
    return {
    imgs: '',
    currentTab: 'Roof',
    tabs: [
    {name:'Roof', view:'Roof'},
    {name:'Pedestrian', view:'Pedestrian'},
    {name:'Etage1', view:'Etage1'},
    {name:'Rdc', view:'Rdc'}
    
    ]
    };
  }
,
  computed: {
    currentTabComponent: function () {
      return this.currentTab.toLowerCase()
    }
  }



};
</script>

<style lang="css">




.renders{
position: relative;
left: 50%;
bottom:50%;
 top:-0%;
transform: translate(-50%, 0);
-ms-transform: translate(-50%, 0);
-webkit-transform: translate(-50%, 0);
z-index: 0;


  }


@media only screen and (min-width: 2100px) {





.btn-group {
  z-index: 4;
margin-top: 35%;
width: 100%;
justify-content: center;

}



}






.threesixty{
width:auto;
display:block;
margin: 0 auto; 
text-align: left; 
}





@charset "utf-8";

.exit{
    color:black;
    border-color:black;
}
:root {
    --main-background-color:#fff;
    --background-color:#fff;
    --main-text-color-1:#4E4D4D;
    --main-text-color-2:#B4B4B4;
    --emerige-color:#ffffff;
    --emerige-color2:#C6C6C6;
    --studio-color:#C6CBD2;
    --deux-piece-color:#828A95;
    --trois-piece-color:#6B9080;
    --quatre-piece-color:#EC9192;
    --cinq-piece-color:#DC5476;
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@-ms-viewport {
    width: device-width;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family:"Roboto";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

a{
    text-decoration: none;
    color:inherit;
}

h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0;
}

h1.main-title{
    display:none;
    position: absolute;
    font-weight: 500;
    font-size: 2.3rem;
}

h2, .h2 {
    color: var(--main-text-color-2);
    text-align: center;
    font-size: 0.75rem;
}

span{
    color: var(--main-text-color-1);
    font-size:0.8rem;
}

button {
    font-size: 1rem;
    color:var(--emerige-color);
    border:solid;
    border-color: var(--emerige-color);
    border-width: 1px;
    border-radius: 2px;
    margin-top: 5px;
    padding-top:0.17rem;
    padding-bottom:0.27rem;
    background-color: transparent !important;
    -webkit-transition: background-color 0.7s, color 0.9s; /* Safari */
    transition: background-color 0.7s, color 0.9s;
}

button:focus {
    outline:0;
}

button:hover{
    border-radius: 2px;
    color:white;
    background-color: var(--emerige-color) !important;
    cursor:pointer;
}

.exit{
    color:white;
    border-color:white;
}

.exit:hover{
    color:var(--main-background-color);
    background-color: white !important;
}


.large{
    width:100%;
}

.small{
    width:100%;
    flex-grow:1;
    margin-left:2px;
    margin-right:2px;
}

.active {
    color:white;
    background-color: var(--emerige-color) !important;
}

.container-fluid{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color:#fff;
    width:100vw;
    height:100%;
    padding-left:25px;
    padding-right:25px;
}

.header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:100px;
}


.container{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content:space-between;
    height:100%;
    overflow: hidden;
    background-color: var(--background-color);
    z-index:1;

}

.container-view{

    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items:center;
    width:calc(100% - 100px);
    z-index:1;
  padding-top:15px;
    padding-bottom:15px; 
    padding-left:25px;
    padding-right:25px;
}

.windows{
margin-top: 5vh;
margin-bottom: 5vh;
    position: relative;
    align-self: flex-start;
 height:90vh; 

    z-index: 5;
    cursor: pointer;;
    overflow-y:visible;
    overflow-x:visible;

  
}

.controller-bar{
    z-index: 1000;
    display:flex;
    flex-direction: row;
    flex-wrap:nowrap;
    align-self: center;
    justify-content: space-around;
    margin-top:12px;  
    width:20%;
    height:auto;
}

.controller{
    display:flex;
    justify-content: space-between ;
}

.container-filter{
    
    width: 80px;
    overflow-y: scroll;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: -225px;
    background-color: var(--background-color);
    box-shadow: 0px 0px 12px #888888;
    z-index: 50;
}
.filter{
    position: relative;
    width: 100%;
    height: auto;
    border-top: solid;
    border-width: 1px;
    border-color: #575756;
    padding-top: 7px;
    padding-bottom: 12px;
}


#floor{
    padding-bottom:0px;
}

.filter-title{
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}

.filter-button{
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
}

#button-building{
    flex-direction: row;
}

h2#debug {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 100px;
    left: 25px;
    width: calc(100vw - 50px - 260px);
    min-height: 83vh;
    background-color: #1d1d1b;
    opacity: 0.9;
}

.turn-message{
    display:none;
    color:white;
    width:100%;
    height:100%;
    text-align: center;
    margin-top:calc(50vh - 1rem);
}

@media only screen and (min-device-width: 320px) and (orientation: portrait) {
    .header{
        display:none;
    }

    .container{
        display:none;
    }

    .container-view{
        display:none;
    }

    .container-filter{
        display:none;
    }

    .turn-message{
        display:block;
    }
}


@media only screen and (min-device-width: 320px) and (orientation: landscape){   /****************  SMARTPHONES - IPHONE  *************** */

    button {
        font-size: 1rem;
        border:solid;
        border-width: 1px;
        border-radius: 2px;
        margin-top: 5px;
        padding-top:0.24rem;
        padding-bottom:0.30rem;
        background-color: transparent !important;
        -webkit-transition: background-color 0.7s, color 0.9s; /* Safari */
        transition: background-color 0.7s, color 0.9s;
    }

    .container-fluid{
        padding-left:15px;
        padding-right:15px;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:50px;
    }

    .logo{
        width:60px;
        background-size:100%;
    }

    .container{
        height:calc(100vh - 50px - 2vh);
        overflow-y: scroll;
    }

    .container-view{
        position:fixed;
        display:flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        width:100%; /* 30px is the padding-left/right of container-fluid | 100px is the width of container filter */
        height: auto;
        padding-left:15px;
        padding-right:15px;
        padding-bottom:10px;
        z-index:1;
    }

    .controller-bar{
        width:auto;
        height:auto;
        margin-bottom: 5px;
    }

    .controller{
        margin-left: 10px;
        margin-right: 10px;
    }

    .control{
        width:25px;
        height:25px;
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin-left:8px;
        margin-right:8px;
        cursor:pointer;
        -webkit-transition: background-image 0.7s; /* Safari */
        transition: background-image 0.7s;
    }

    .container-filter{
        position:relative;
        width:100px;
        left:calc(100% - 100px);
        padding-top:3px;
        padding-bottom:15px;
        padding-left:15px;
        padding-right:15px;
    }

    .type{
        flex-wrap:nowrap;
    }

    .type-color{
        width:20px;
        height:15px;
    }

    .type-name{
        width:100%;
        margin-left:5px;
    }

    h2#debug {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 50px;
        left: 15px;
        width: calc(100vw - 50px - 180px);
        height: calc(100vh - 50px - 2vh);
        background-color: #676767;
        opacity: 0.9;
    }

}




@media only screen and (min-device-width: 812px) {    /****************   TABLETTES - IPAD  *************** */

}


@media only screen and (min-width: 992px) and (orientation: landscape){

    .container-fluid{
        padding-left:15px;
        padding-right:15px;
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width:100%;
        height:100px;
    }

    .logo{
        width:100px;
        background-size:100%;
    }

    .container{
        height:calc(100vh - 100px - 2vh);
        overflow-y: hidden;
    }

    .container-view{
        position:fixed;
        display:flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        width:calc(100% - 220px - 30px); /* 30px is the padding-left/right of container-fluid | 200px is the width of container filter */
        height: calc(100vh - 100px - 2vh);
        padding-left:15px;
        padding-right:15px;
        padding-bottom:10px;
        z-index:1;
    }

    .controller-bar{
        width:auto;
        height:auto;
        margin-bottom: 10px;
    }

    .controller{
        margin-left: 10px;
        margin-right: 10px;
    }

    .control{
        width:30px;
        height:30px;
    }

    .container-filter{
        position:relative;
        width:100px;
        height:calc(100vh - 100px - 1vh);
        left:calc(100% - 220px);
        padding-top:3px;
        padding-bottom:15px;
        padding-left:15px;
        padding-right:15px;
    }

    .type{
        flex-wrap:nowrap;
    }

    .type-color{
        width:20px;
        height:15px;
    }

    .type-name{
        width:100%;
        margin-left:5px;
    }

    h2#debug {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 100px;
        left: 15px;
        width: calc(100vw - 30px - 220px);
        height: calc(100vh - 100px - 2vh);
        background-color: #676767;
        opacity: 0.9;
    }

}

@media only screen and (min-width: 1200px){

    button {
        font-size: 1rem;
        border:solid;
        border-width: 1px;
        border-radius: 2px;
        margin-top: 5px;
        padding-top:0.26rem;
        padding-bottom:0.32rem;
        background-color: transparent !important;
        -webkit-transition: background-color 0.7s, color 0.9s; /* Safari */
        transition: background-color 0.7s, color 0.9s;
    }

    .logo{
        width:90px;
        background-size:100%;
    }

    .container-fluid{
        padding-left:25px;
        padding-right:25px;

    }

    .container{
        height:calc(100vh - 100px - 2vh);
        overflow-y: scroll;
    }

    .container-view{
        width:calc(100% - 260px - 50px); /* 30px is the padding-left/right of container-fluid | 200px is the width of container filter */
        height: calc(100vh - 100px - 2vh);
        padding-left:25px;
        padding-right:25px;
        padding-bottom:15px;
        z-index:1;
    }

    .controller-bar{
        width:auto;
        height:auto;
        margin-bottom: 0px;
    }

    .controller{
        margin-left: 10px;
        margin-right: 10px;
    }

    .control{
        width:27px;
        height:27px;
    }

    .container-filter{
        width:232px;
        height:100%;
        left:calc(100% - 232px);
        padding-top:15px;
        padding-bottom:15px;
        padding-left:25px;
        padding-right:25px;
    }



}

</style>


