<template>
  <f7-page name="project">
    <f7-navbar title="Project" back-link="Back">
    </f7-navbar>
    <f7-block style="text-align: center">
    <f7-swiper>
    <f7-swiper-slide>
      <img src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg" width="350" height="200"/>
    </f7-swiper-slide>
    <f7-swiper-slide>
      <img src="https://46yxb83hlyy77jig73dh02ok-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/61-Basic-Auto-Mechanic-Skills-To-Fix-Your-Car-Yourself-ss-750x420.jpg" width="350" height="200"/>
    </f7-swiper-slide>
    <f7-swiper-slide>
      <img src="https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=" width="350" height="200"/>
    </f7-swiper-slide>
    </f7-swiper>
    </f7-block>
    <hr>
    <f7-block>
      <h2 style="text-align: center">Some tips for fixing car</h2>
      <p class="Note">
        Notes:
      </p>
       <p class="Content">
        It’s just as important to keep the backup tire inflated as it is the four tires under your car. 
        The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. 
        That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend 
        a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.
      </p>    
    </f7-block>
    <hr>
    <f7-block>
      <h3>Last comment</h3>
      <div class="comment_area">
        <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="28" class="person" />
        <span class="user">&nbsp;Jessi</span>
        <f7-icon f7="suit_heart" size=20px class="black_heart"></f7-icon>
        <br>
        <span class="inhalt">&nbsp;I like the article very much,  that help me a &nbsp;lot.</span>
        <br>
        <br>
        <f7-button fill raised  href="/comment/">Show all comments</f7-button>
        <f7-list>
        <f7-list-input
         type="text"
         placeholder="leave your comment">
         </f7-list-input>
        </f7-list>
        <f7-button fill raised>Submit</f7-button>
      </div>
    </f7-block>
  </f7-page>
</template>

<style scoped>
.user{
  color: grey;
  font-size: 5px;
}
.person{
  display: flex;
  float: left;
}
.black_heart{
  display: flex;
  float: right;
  margin-top: 5px;
}

</style>

<script>
  export default {
    props: {
      f7router: Object,
      f7navbar: Object,
    }
  }
</script>

