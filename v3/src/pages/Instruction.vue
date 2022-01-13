<template>
  <f7-page>
    <f7-swiper pagination>
        <f7-swiper-slide>
            <f7-link href="/" >Skip</f7-link><br>
            <f7-icon 
                size="200px" 
                ios="f7:list_dash" 
                aurora="f7:list_dash" 
                md="material:list"
                style="position:relative; top: 150px"
            >
            </f7-icon><br>
            <p style="position:absolute;bottom:50px;text-align:center;margin:0 50px">
                Add Request and find 
            </p>
        </f7-swiper-slide>
        <f7-swiper-slide>
            <f7-link href="/" >Skip</f7-link><br>
            <f7-icon 
                size="200px" 
                ios="f7:lightbulb_fill" 
                aurora="f7:lightbulb_fill" 
                md="material:lightbulb"
                style="position:relative; top: 150px"
            >
            </f7-icon><br>
            <p style="position:absolute;bottom:50px;text-align:center;margin:0 50px">
                Get inspiration and explore some good ideas from other craftsmen's work 
            </p>
        </f7-swiper-slide>
        <f7-swiper-slide>
            <f7-link href="/" >Skip</f7-link><br>
            <f7-icon 
                size="200px" 
                ios="f7:chat_bubble_2_fill" 
                aurora="f7:chat_bubble_2_fill" 
                md="material:forum"
                style="position:relative; top: 150px"
            >
            </f7-icon><br>
            <p style="position:absolute;bottom:50px;text-align:center;margin:0 50px">
                Get inspiration and explore some good ideas from other craftsmen's work 
            </p>
        </f7-swiper-slide>
    </f7-swiper>
  </f7-page>
</template>
<script>
  export default {};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .swiper-slide {
        background: #fff;
        text-align: center;
        font-size: 18px;
        box-sizing: border-box;
        border: 0px;
        width:100%;
        height: 100%;
    }
    .swiper-container {
        height: 100%;
        width: 100%;
    }
</style>