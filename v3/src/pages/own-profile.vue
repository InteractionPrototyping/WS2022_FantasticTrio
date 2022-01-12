<template>
  <f7-page name="own-profile">
    <f7-navbar title="Own Profile"></f7-navbar>

  <!-- Individual parts of the page are each structured as a media list-->
  <!-- Template from List View component: Media List -->
    <f7-list media-list>
      <f7-list-item        
        title="Jessi Briem &#9792;"
        subtitle="&#8982; 86378, Munich" 
        style="margin-bottom: 20px"     
      >
      <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
      <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
      <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
      <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
      <f7-icon f7="star_lefthalf_fill" size="20px" class="star"></f7-icon>
      <span>&nbsp;4.6/5</span>
      <!--Button "Show reviews"-->
      <f7-button fill raised href="/review/">Show reviews </f7-button> 
      
      <br>
      <!--Button "Edit my profile"-->
      <f7-button fill raised>Edit my profile
         <i class="material-icons" style="position:relative; right:0px; size=40px">edit</i>
      </f7-button>
        <!--Profile picture-->
         <template #media>
            <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" class="avatar"/>
          </template>
      </f7-list-item>
    </f7-list>

    <!--Media List for Skills-->
    <f7-list media-list>
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
    <f7-list media-list>
      <f7-list-item        
        title="DESCRIPTION"
        text="Hello, I´m Jessi. I am 34 years old and a qualified car mechanic."       
      >
      <!-- show more button -->
      <br>
      <f7-button fill raised>Show more</f7-button>
      </f7-list-item>
    </f7-list>

    <!--Media List for Profile Gallery-->
    <f7-list media-list>
      <f7-list-item      
        title="LIKED PROJECTS"      
      >
    <f7-block>
        <f7-row>
      <f7-col>
          <img
            src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg"
            width="140"
            class="gallery"
          />
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
          <img src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg" class="gallery" width="140"/>
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
  font-size: 10px;
}

.avatar{
  border-radius: 50%; 
  width: 25vmin;
   height: 25vmin; 
   object-fit: cover; 
   object-position: center;
}
.col {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 16px;
  font-size: 12px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 5px  rgba(0, 0, 0, 0.4);
}
.person {
  display: inline;
  float: left;
  bottom:1px;
}
.writer {
  float: left;
}
p{
  margin: 0px;
  padding: 0px;
  height: 34px;
  font-size: 14px;
  font-weight: bold;
  font-family: var(--f7-font-family);
}
.black_heart {
  display: inline;
  float: right;
  bottom:1px;
}
.follower {
  float: right;
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

