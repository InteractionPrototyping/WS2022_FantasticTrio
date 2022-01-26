<template>
  <f7-page name="instruction" no-toolbar style="padding:0px">
    <!-- add instruction page as swipout style -->
    <f7-swiper pagination style="background-color:#263A68">
        <f7-swiper-slide class="instruction">
            <h2 class="appName">CRAFTIVE</h2>
            <f7-icon 
                size="200px" 
                ios="f7:list_dash" 
                aurora="f7:list_dash" 
                md="material:list"
                color="white"
                class="instructionIcon"
            >
            </f7-icon><br>
            <p class='instructionText' >
                Simply add a request and find craftsmen who will solve your problems at a reasonable price.
            </p>
        </f7-swiper-slide>
        <f7-swiper-slide class="instruction">
            <h2 class="appName">CRAFTIVE</h2>
            <f7-icon 
                size="200px" 
                ios="f7:lightbulb_fill" 
                aurora="f7:lightbulb_fill" 
                md="material:lightbulb"
                class="instructionIcon"
                color="white"
            >
            </f7-icon><br>
            <p class='instructionText'>
                Get inspiration and explore some good ideas from other Craftsmen's work. 
            </p>
        </f7-swiper-slide>
        <f7-swiper-slide class="instruction">
            <h2 class="appName">CRAFTIVE</h2>
            <f7-icon 
                size="200px" 
                ios="f7:chat_bubble_2_fill" 
                aurora="f7:chat_bubble_2_fill" 
                md="material:forum"
                class="instructionIcon"
                color="white"
            >
            </f7-icon><br>
            <p class='instructionText'>
                Make contact with other users and craftsmen freely and exchange your ideas.
            </p>
        </f7-swiper-slide>
        <f7-swiper-slide class="instruction">
            <h2 class="appName">CRAFTIVE</h2>
            <f7-icon 
                size="200px" 
                ios="f7:checkmark_alt" 
                aurora="f7:checkmark_alt" 
                md="material:done"
                class="instructionIcon"
                color="white"
            >
            </f7-icon><br>
            <f7-link 
                    href="/" 
                    @click="showHomePage"
                    style="
                        background-color:#263A68;
                        color:white;
                        font-size:20px;
                        font-weight:bold;
                        border:1px solid white;
                        padding: 5px 10px;
                        border-radius:5px;
                        position:relative;
                        top:200px;
                        "
                >
                    Start your trip now
                </f7-link> 
        </f7-swiper-slide>
    </f7-swiper>
    <!-- skip button -->
    <f7-link 
        href="/" 
        @click="showHomePage"
        style="
            position:absolute;
            top:20px;
            right:20px;
            background-color:#263A68;
            color:white;
            font-size:20px;
            font-weight:bold"
    >
        SKIP
    </f7-link> 
  </f7-page>
</template>
<script>
import myBus from '../js/myBus.js';

  export default {
      data() {
          return {
            isShow:true
          }        
      },
      methods: {
        showHomePage() {
            myBus.emit("changeStatus", this.isShow);
        },
      }
  }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .appName {
        color: white;
        font-size: 50px;
        position: relative;
        top:180px;
        color:white;

    }
    .instructionIcon {
        position:relative; 
        top:200px;
    }
    .instruction.swiper-slide {
        background: #263A68;
        text-align: center;
        font-size: 18px;
        box-sizing: border-box;
        border: 0px,#263A68;
        width:100%;
        height: 100%;
    }
    .swiper-container {
        height: 100%;
        width: 100%;
    }
    .instructionText {
        position:absolute;
        bottom:100px;
        text-align:center;
        margin:0 40px;
        color:white;
        font-size:20px
    }
    .swiper-pagination-bullet {
        background-color:white
    }
</style>