<template>
  <f7-page name="project">
    <!-- Navbar area -->
    <f7-navbar back-link="Back" style="font-size: 20px">

    <!--Second back-link??-->
      <f7-navbar-left>
        <a
          class="link"
          @click="
            f7router.navigate('/explore/', {
              reloadCurrent: true,
              animate: true,
            })
          "
          ><i class="icon icon-back"> </i
          ><span class=""
            >Back
            <!----></span
          ></a
        >
      </f7-navbar-left>
      <span class="title" style="position: absolute; left: 160px">Project</span>
    </f7-navbar>
    <f7-block style="text-align: center">
      <!-- Swiper for pictures -->
      <f7-swiper pagination>
        <f7-swiper-slide>
          <img
            src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            src="https://46yxb83hlyy77jig73dh02ok-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/61-Basic-Auto-Mechanic-Skills-To-Fix-Your-Car-Yourself-ss-750x420.jpg"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            src="https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg="
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <hr />
    <!-- Article for project -->
    <f7-block>
      <h2 style="text-align: center; font-size: 30px">Some tips for fixing cars</h2>
      <p class="Content" style="font-size: 20px">
        It’s just as important to keep the backup tire inflated as it is the
        four tires under your car. The last thing you want is to discover your
        spare is flat while you’re pulling the jack out of your trunk. That’s
        when you’ll need to call a tow truck—which can run you hundreds of
        dollars. It’s better to spend a dollar on an air pump to inflate your
        spare. That way you’re spared the cost of a tow.
      </p>
      <!-- Description of Writer -->
      <h3 style="position: relative; top: 10px; font-size: 25px">Author</h3>
      <div style="position: absolute; bottom: 200px; right: 20px">
        <f7-icon f7="suit_heart_fill" size="25px" class="black_heart"></f7-icon>
        <span style="position: relative; top: 5px; font-size: 20px"> 7 </span>
      </div>
      <a class="link" href="/profile-helper/">
      <f7-list inset media-list style="height: 100px; width: 350px">
        <f7-list-item title="Alice Johnson" text="Expert of car repair">
          <br>       
          <template #media>
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
              class="avatar"
            />
          </template>
        </f7-list-item>
      </f7-list>
      </a>
    </f7-block>
    <hr />
    <!-- Comment area -->
    <f7-block>
      <h3 style="padding: 0px; font-size: 25px">Last comment</h3>
      <f7-list
        media-list
        style="height: 100px; position: relative; bottom: 20px" inset
      >
        <f7-list-item
          title="Jessi Briem"
          text="I like the article very much,  that help me a lot."
          after="05/12/2021"
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="28"
              class="avatar"
            />
          </template>
        </f7-list-item>
      </f7-list>
      <f7-button
        fill
        href="/comment/"
        style="position: relative; bottom: 50px"
        >Show all comments</f7-button
      >
      <br />
      <br />
      <!-- Comment bar -->
      <div class="comment_area">
        <f7-messagebar
          ref="messagebar"
          v-model:value="messageText"
          placeholder="Leave your comment"
          :attachments-visible="attachmentsVisible"
          :sheet-visible="sheetVisible"
          class="bar"
          style="position: fixed; bottom: 50px"
        >
          <template #inner-start>
            <f7-link
              icon-ios="f7:camera_fill"
              icon-aurora="f7:camera_fill"
              icon-md="material:camera_alt"
              @click="sheetVisible = !sheetVisible"
            />
          </template>
          <template #inner-end>
            <f7-link
              icon-ios="f7:arrow_up_circle_fill"
              icon-aurora="f7:arrow_up_circle_fill"
              icon-md="material:send"
              @click="sendMessage"
            />
          </template>
          <f7-messagebar-attachments>
            <f7-messagebar-attachment
              v-for="(image, index) in attachments"
              :key="index"
              :image="image"
              @attachment:delete="deleteAttachment(image)"
            ></f7-messagebar-attachment>
          </f7-messagebar-attachments>
          <f7-messagebar-sheet>
            <f7-messagebar-sheet-image
              v-for="(image, index) in images"
              :key="index"
              :image="image"
              :checked="attachments.indexOf(image) >= 0"
              @change="handleAttachment"
            ></f7-messagebar-sheet-image>
          </f7-messagebar-sheet>
        </f7-messagebar>
      </div>
    </f7-block>
  </f7-page>
</template>

<style scoped>
.user {
  color: grey;
  font-size: 5px;
}
.person {
  display: flex;
  float: left;
}
.black_heart {
  display: flex;
  float: right;
  margin-top: 5px;
}
.avatar{
  border-radius: 50%; 
  width: 15vmin;
   height: 15vmin; 
   object-fit: cover; 
   object-position: center;
}
.media-list{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-text-font-size: 20px;
}

</style>

<script>
export default {
  props: {
    f7router: Object,
  },
};
</script>

