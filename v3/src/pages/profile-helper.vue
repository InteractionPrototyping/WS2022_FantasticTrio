<template>
  <f7-page name="profile-helper">
    <f7-navbar title="Profile" back-link="Back" style="font-size: 20px"></f7-navbar>

  <!-- Individual parts of the page are each structured as a media list-->
  <!-- Template from List View component: Media List -->
    <f7-list media-list class="person">
      <f7-list-item        
        title="Alice Manz"
        subtitle="&#8982; 86378, Munich" 
        style="margin-bottom: 10px"     
      >
      <a class="link" href="/review/">
      <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
      <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
      <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
      <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
      <f7-icon f7="star_lefthalf_fill" size="25px" class="star"></f7-icon>
      <span style="font-size: 20px">&nbsp;4.6/5</span>
      </a>
      <br>
      <!--Button "Ask for price"-->
      <f7-button fill raised href="/chat/" @click="showToastIcon" >Contact</f7-button>
        <!--Profile picture-->
         <template #media>
            <img  class="avatar" src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
          </template>
      </f7-list-item>
    </f7-list>

    <!--Media List for Skills-->
    <f7-list media-list class="skills">
      <f7-list-item        
        title="SKILLS"
        subtitle="Car repair"
        text="I am good at repairing cars."       
      >
      </f7-list-item>
      <f7-list-item
        subtitle="Gardening"
        text="I am good at gardening as well." 
      >  
      <!-- show more button -->
      <br>
      <f7-button fill raised>Show more</f7-button>
      </f7-list-item>
    </f7-list>

    <!--Media List for Description-->
    <f7-list media-list class="description">
      <f7-list-item        
        title="DESCRIPTION"
        subtitle="Hello, I´m Alice. I am 34 years old and a qualified car mechanic."       
      >
      <!-- show more button -->
      <br>
      <f7-button fill raised>Show more</f7-button>
      </f7-list-item>
    </f7-list>

    <!--Media List for Profile Gallery-->
    <f7-list media-list class="projects">
      <f7-list-item      
        title="PROFILE GALLERY"      
      >
    <f7-block>
        <f7-row>
      <f7-col>
          <img src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg" class= "gallery" width="140"/>
          <p>
          The fixing work is awesome!!!
          </p> 
          <br>
          <br>
          <span class="date">03/12/2021</span>
          <span class="follower">7</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
      <f7-col>
          <img src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg" class= "gallery" width="140"/>
          <p>
          A tip to keep your garden clean
          </p> 
          <br>
          <br>
          <span class="date">20/11/2021</span>
          <span class="follower">14</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
    </f7-row>
    <!-- show more button -->
      <br>
      <f7-button fill raised href="/profile-gallery/">Show more</f7-button>
      </f7-block> 
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<!--Style-->
<style scoped>
.date{
  float: left;
  font-size: 17px;
}

.avatar{
  border-radius: 50%; 
  width: 28vmin;
   height: 28vmin; 
   object-fit: cover; 
   object-position: center;
}
.col {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 15px;
  font-size: 12px;
  height: 220px;
  border-radius: 8px;
  box-shadow: 0 2px 5px  rgba(0, 0, 0, 0.4);
}
.person{
  --f7-list-item-title-font-size: 30px;
  --f7-list-item-subtitle-font-size: 20px;
  --f7-list-item-title-text-color: #2D4066;
}
.button{
  --f7-button-bg-color: #468DCE;
  --f7-button-font-size: 15px;
}
.skills{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-title-text-color: #2D4066;
  --f7-list-item-subtitle-font-size: 20px;
  --f7-list-item-text-font-size: 20px;
}
.description{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-title-text-color: #2D4066;
  --f7-list-item-text-font-size: 20px;
  --f7-list-item-subtitle-font-size: 20px;
}
.projects{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-title-text-color: #2D4066;
}
p{
  margin: 0px;
  padding: 0px;
  height: 50px;
  font-size: 20px;
  font-family: var(--f7-font-family);
}
.black_heart {
  display: inline;
  float: right;
  bottom:0px;
}
.follower {
  float: right;
  font-size: 20px;
}
.gallery{
  position: relative;
  right: 2px;
}
.material-icons {
  color: white;
  font-size: 20px;
  position: relative;
  margin: 10px;
}
</style>

<script>
import { f7Navbar, f7Page, f7Block, f7Button, f7, theme } from 'framework7-vue';
export default {
  components: {
    f7Navbar,
    f7Page,
    f7Block,
    f7Button,
  },
  props: {
      f7route: Object,
      f7router: Object,
    },
  methods: {  
    showToastIcon() {
      const self = this;
      // Create toast
      if (!self.toastIcon) {
        self.toastIcon = f7.toast.create({
          icon:
            theme.ios || theme.aurora
              ? '<i class="f7-icons">paperplane_fill</i>'
              : '<i class="material-icons">send</i>',
          text: "User receives your request:)",
          position: 'center',
          closeTimeout: 1500,
        });
      }
      // Open it
      self.toastIcon.open();
    },
    onPageBeforeOut() {
      f7.toast.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.toastIcon) self.toastIcon.destroy();
    },
  },
};
</script>

