<template>
  <f7-page name="own-profile">
    <f7-navbar title="Own Profile" style="font-size: 20px"></f7-navbar>

  <!-- Individual parts of the page are each structured as a media list-->
  <!-- Template from List View component: Media List -->
    <f7-list media-list class="person">
      <f7-list-item        
        title="Jessi Briem"
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
      <!--Button "Edit my profile"-->
      <f7-button fill raised>Edit profile
         <i class="material-icons" style="position:relative; right:0px; size=40px">edit</i>
      </f7-button>
        <!--Profile picture-->
         <template #media>
            <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" class="avatar"/>
          </template>
      </f7-list-item>
    </f7-list>

    <!--Media List for Description-->
    <f7-list media-list class="description">
      <f7-list-item        
        title="DESCRIPTION"
        subtitle="Hello, I´m Jessi. I am 34 years old and a qualified car mechanic and would love to help you with your car problems."       
      >
      <!-- show more button -->
      <br>
      <f7-button fill raised>Show more</f7-button>
      </f7-list-item>
    </f7-list>

    <!--Media List for Liked Projects-->
    <f7-list media-list class="projects">
      <f7-list-item      
        title="LIKED PROJECTS"      
      >
       <f7-row class="exploreCard">
      <f7-col width='50'>
        <f7-link>
          <f7-card class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image:url(https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg)"
            >
            </f7-card-header>
            <f7-card-content>
              <!-- <p class="date">January 21, 2015</p> -->
              <strong>The fixing work is awesome!!!</strong>
            </f7-card-content>
            <f7-card-footer>
              <f7-link
                href="/profile-helper/"
                icon-ios="f7:person_fill"
                icon-aurora="f7:person_fill"
                icon-md="material:person"
              >
              Alice
              </f7-link>
              <f7-link
              >
            <f7-icon
            size="20px"
            class="black_heart"
            f7="suit_heart_fill"
            ></f7-icon>
              7
              </f7-link>
            </f7-card-footer>
          </f7-card>
        </f7-link>
      </f7-col>
            <f7-col width='50'>
        <f7-link>
          <f7-card class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              style="background-image:url(https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg)"
            >
            </f7-card-header>
            <f7-card-content>
              <!-- <p class="date">January 21, 2015</p> -->
              <strong>Tip to keep you garden clean</strong>
            </f7-card-content>
            <f7-card-footer>
              <f7-link
                href="/profile-helper/"
                icon-ios="f7:person_fill"
                icon-aurora="f7:person_fill"
                icon-md="material:person"
              >
              Johan
              </f7-link>
              <f7-link
              >
            <f7-icon
            size="20px"
            class="black_heart"
            f7="suit_heart_fill"
            ></f7-icon>
              14
              </f7-link>
            </f7-card-footer>
          </f7-card>
        </f7-link>
      </f7-col>
    </f7-row>
    <!-- show more button -->
      <br>
      <f7-button fill raised href="/profile-gallery/">Show more</f7-button>
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
/* .col {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 15px;
  height: 220px;
  width: 155px;
  border-radius: 8px;
  box-shadow: 0 2px 5px  rgba(0, 0, 0, 0.4);

} */
/* .person{
  --f7-list-item-title-font-size: 30px;
  --f7-list-item-subtitle-font-size: 20px;
  --f7-list-item-title-text-color: #2D4066;
} */
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
/* p{
  margin: 0px;
  padding: 0px;
  height: 34px;
  font-size: 20px;
  font-family: var(--f7-font-family);
}
.black_heart {
  display: inline;
  float: right;
  bottom:1px;
}
.follower {
  float: right;
  font-size: 20px;
} */
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
.demo-card-header-pic {
    margin:4px;
  }
  .demo-card-header-pic .card-header {
    height: 40vw;
    background-size: cover;
    background-position: center;
    color: #fff;
  }
  .demo-card-header-pic .card-content-padding .date{
    color: #8e8e93;
  }
  
  .theme-dark .demo-facebook-card .card-footer {
    background-color: transparent;
  }
  .exploreCard {
    justify-content: space-evenly;
  }
  .card-content-padding {
    padding:8px
  }
  .card-footer {
    padding: 8px
  }
  .no-border {
    padding: 8px
  }
</style>

