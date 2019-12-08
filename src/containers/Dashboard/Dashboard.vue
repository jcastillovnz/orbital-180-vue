<template>
<div >


  <div class="container">


    <div class="container-view">
   
      <div  class="windows">
        <!-- PUT THE 3D MODEL HERE -->
<Etage1 />

      </div>
    </div>


    <div class="container-filter">
      <div class="filter row" id="legend">
        <div class="legend-col-2">
       


        </div>

        <div class="legend-col-1">
       
       
        </div>
      </div>

      <div class="filter" id="name">
        <div class="filter-title">
          <h2>RESIDENCE</h2>
        </div>

     
        <div class="filter-button">
          <a >
            <button class="button large active"> 
     Montigny
            </button>
          </a>
        </div>



      </div>

      <div class="filter" id="building">
        <div class="filter-title">
          <h2>IMMEUBLE</h2>
        </div>
        <div class="filter-button" id="button-building">

          <a href="#">
            <button class="button small active"> 
              A
            </button>
          </a>

          <a href="#">
            <button class="button small"> 
              B
            </button>
          </a>

          <a href="#">
            <button class="button small"> 
              C
            </button>
          </a>
        </div>
      </div>

      <div class="filter" id="view">
        <div class="filter-title">
          <h2>VUES</h2>
        </div>
        <div class="filter-button">



            <button id="aerienne" onclick="roof(this)"  class="nav-link button large active"> 
              Aérienne
            </button>
         

            <button  id="pietonne" onclick="pedestrian(this)"  class="nav-link button large"> 
              Piétonne
            </button>
          


          
        </div>

      </div>

      <div class="filter" id="floor">
        <div class="filter-title">
          <h2>NIVEAUX</h2>
        </div>
        <div id="myDIV" class="filter-button">


        
            <button id="1" onclick="r1(this)" class="nav-link button large"> 
              1<sup>e</sup> Étage
            </button>
      

        
            <button id="rdc" onclick="rdc(this)" class="nav-link button large"> 
              Rdc
            </button>
        
        </div>
      </div>
    </div>

  </div>

</div>
</template>


<script>

import Vue from 'vue'
import Etage1 from './../etage1/etage1'
export default {
  name: "Dashboard",
  components: {
Etage1,
  },
  data() {
    return {
      imgs: ''
    };
  }
};
</script>

<style lang="css">
body { overflow-y:hidden!important;}
.container-view{
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items:center;
    width:calc(100% - 300px);
    z-index:1;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:25px;
    padding-right:25px;
}
body {
  margin: 0;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 10%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

li a.active {
  background-color: #4CAF50;
  color: white;
}

li a:hover:not(.active) {
  background-color: #555;
  color: white;
}




@-webkit-keyframes blink {
  0% {
      opacity: 1;
  }
  49% {
      opacity: 1;
  }
  50% {
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
}
@-moz-keyframes blink {
  0% {
      opacity: 1;
  }
  49% {
      opacity: 1;
  }
  50% {
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
}
@-o-keyframes blink {
  0% {
      opacity: 1;
  }
  49% {
      opacity: 1;
  }
  50% {
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
}

.btn-group {


  position:fixed;
  bottom:0px;
  left:0px;
  right:0px;
  height:50px;
  margin-bottom:0px;

}

.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
   
    max-width:100px;
    padding:15px;
    min-height:30px;
    background:#fff;
    visibility: hidden;
    border: 1px solid black;
    color: #000;
    text-align: center;
    border-radius: 6px;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    word-wrap:break-word;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}


.center{
position: relative;
left: 50%;
transform: translate(-50%, 0);
-ms-transform: translate(-50%, 0);
-webkit-transform: translate(-50%, 0);
  }

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
  .masks{

    height:100%;
    position: relative;
    left: 50%;
    bottom:50%;
     top:-0%;

    
    
    position: absolute;
    visibility: visible;
    display: block;
    z-index: 1;
    opacity:2; /* Opacidad 60% */
    }
    .hide {


 
      opacity:0; /* Opacidad 60% */
      
      
  }
  


    .labels{
      pointer-events: none;
      height:100%;
      position: relative;
      left: 50%;
      bottom:50%;
       top:-0%;
      position: absolute;
      visibility: visible;
      display: block;
      z-index: 1;
    
      }
  



.threesixty-frame  {
height:100%;
visibility: visible;
 z-index: 0;
 position: absolute;
}

.highlights{
  pointer-events: none;
  height:100%;
position: relative;
left: 50%;
bottom:50%;
 top:-0%;

visibility: visible;
position: absolute;
z-index: 2;
display: none;
}


.btn-group {
z-index: 110;
margin-top: 44%;
width: 100%;
justify-content: center;

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


.vertical-align-center {
    /* To center vertically */
    display: table-cell;
    vertical-align: middle;
}
.modal-content {
    /* Bootstrap sets the size of the modal in the modal-dialog class, we need to inherit it */
    width:inherit;
    height:inherit;
    /* To center horizontally */
    margin: 0 auto;
}

.controller{
    display:flex;
    justify-content: space-between ;
}


.control{
    width:25px;
    height:25px;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    margin-left:5px;
    margin-right:5px;
    cursor:pointer;
    -webkit-transition: background-image 0.7s; /* Safari */
    transition: background-image 0.7s;
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
    width:100%;
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
    width:calc(100% - 260px);
    z-index:1;
    padding-top:15px;
    padding-bottom:15px;
    padding-left:25px;
    padding-right:25px;
}

.windows{
    background-color: red;
    position: relative;
    align-self: flex-start;
    width:calc(100% - 0px);
    height:100%;
    z-index: 5;
    cursor: pointer;;
    overflow:hidden;
    overflow-y:hidden;
    overflow-x:hidden;
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
    width: 260px;
    overflow-y: scroll;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    padding-right: 25px;
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

#legend{
    display:flex;
    order:1;
    flex-direction: row;
    flex-wrap: nowrap;
    align-self: flex-start;
    justify-content: center;
    border-top:none;
}

#name{
    order:2;
}

#building{
    order:3;
    display:none;
}

#view{
    order:4;
}

#floor{
    order:5;
}

.legend-col-1{
    width:50%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: flex-start;
    justify-content: flex-start;
}

.type{
    width:100%;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    justify-content: flex-start;
}

.type-color{
    width:15px;
    height:15px;
}

#color-studio{
    background-color: var(--studio-color) !important;
}

#color-2piece{
    background-color: var(--deux-piece-color) !important;
}

#color-3piece{
    background-color: var(--trois-piece-color) !important;
}

#color-4piece{
    background-color: var(--quatre-piece-color) !important;
}

#color-5piece{
    background-color: var(--cinq-piece-color) !important;
}

.type-name{
    width:50%;
    margin-left:5px;
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
        width:calc(100% - 100px - 30px); /* 30px is the padding-left/right of container-fluid | 100px is the width of container filter */
        height: calc(100vh - 50px - 2vh);
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
        overflow-y: scroll;
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
        width:220px;
        height:calc(100vh - 100px - 2vh);
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
        width:260px;
        height:auto;
        left:calc(100% - 260px);
        padding-top:15px;
        padding-bottom:15px;
        padding-left:25px;
        padding-right:25px;
    }


    h2#debug {
        width: calc(100vw - 50px - 260px);
        height: calc(100vh - 100px - 2vh);
        left: 25px;
    }

}

</style>


