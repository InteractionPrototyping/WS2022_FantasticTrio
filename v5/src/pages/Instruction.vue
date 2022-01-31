<template>
  <f7-page name="instruction" no-toolbar style="padding: 0px">
    <!-- instruction page in swipout style -->
    <f7-swiper pagination style="background-color: #263a68">
    <!--first page-->
      <f7-swiper-slide class="instruction">
        <h2 class="appName">CRAFTIVE</h2>
        <!--icon first page-->
        <f7-icon
          size="200px"
          ios="f7:list_dash"
          aurora="f7:list_dash"
          md="material:list"
          color="white"
          class="instructionIcon"
        >
        </f7-icon
        ><br />
        <!--instruction first page-->
        <p class="instructionText">
          Simply add a request and find craftsmen who will solve your problems
          at a reasonable price.
        </p>
      </f7-swiper-slide>
      <!--second page-->
      <f7-swiper-slide class="instruction">
        <h2 class="appName">CRAFTIVE</h2>
        <!--icon second page-->
        <f7-icon
          size="200px"
          ios="f7:lightbulb_fill"
          aurora="f7:lightbulb_fill"
          md="material:lightbulb"
          class="instructionIcon"
          color="white"
        >
        </f7-icon
        ><br />
        <!--instruction second page-->
        <p class="instructionText">
          Get inspired by finished projects of other users and get some good
          ideas.
        </p>
      </f7-swiper-slide>
      <!--third page-->
      <f7-swiper-slide class="instruction">
        <h2 class="appName">CRAFTIVE</h2>
        <!--icon third page-->
        <f7-icon
          size="200px"
          ios="f7:chat_bubble_2_fill"
          aurora="f7:chat_bubble_2_fill"
          md="material:forum"
          class="instructionIcon"
          color="white"
        >
        </f7-icon
        ><br />
        <!--instruction third page-->
        <p class="instructionText">
          Get in touch with other users and craftsmen easily to exchange your
          ideas.
        </p>
      </f7-swiper-slide>
      <!--fourth page-->
      <f7-swiper-slide class="instruction">
        <h2 class="appName">CRAFTIVE</h2>
        <!--icons fourth page-->
        <f7-icon
          size="200px"
          ios="f7:checkmark_alt"
          aurora="f7:checkmark_alt"
          md="material:done"
          class="instructionIcon"
          color="white"
        >
        </f7-icon
        ><br />
        <!--link to get to home page-->
        <f7-link
          href="/"
          @click="showHomePage"
          style="
            background-color: #263a68;
            color: white;
            font-size: 20px;
            font-weight: bold;
            border: 1px solid white;
            padding: 5px 10px;
            border-radius: 5px;
            position: relative;
            top: 200px;
          "
        >
          Get help for your craft problem now.
        </f7-link>
      </f7-swiper-slide>
    </f7-swiper>
    <!-- skip button -->
    <f7-link
      href="/"
      @click="showHomePage"
      style="
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: #263a68;
        color: white;
        font-size: 20px;
        font-weight: bold;
      "
    >
      SKIP
    </f7-link>
  </f7-page>
</template>
<script>
import myBus from "../js/myBus.js";
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    // show home page
    showHomePage() {
      myBus.emit("changeStatus", this.isShow);
    },
  },
};
</script>

<style>
/* Style in this page */
* {
  margin: 0;
  padding: 0;
}
.appName {
  color: white;
  font-size: 50px;
  position: relative;
  top: 180px;
  color: white;
}
.instructionIcon {
  position: relative;
  top: 200px;
}
.instruction.swiper-slide {
  background: #263a68;
  text-align: center;
  font-size: 18px;
  box-sizing: border-box;
  border: 0px, #263a68;
  width: 100%;
  height: 100%;
}
.swiper-container {
  height: 100%;
  width: 100%;
}
.instructionText {
  position: absolute;
  bottom: 100px;
  text-align: center;
  margin: 0 40px;
  color: white;
  font-size: 25px;
}
.swiper-pagination-bullet {
  background-color: white;
}
</style>