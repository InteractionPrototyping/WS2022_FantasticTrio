<template>
  <f7-page name="own-profile">
    <f7-navbar title="Own Profile" back-link="Back"></f7-navbar>

  <!-- Individual parts of the page are each structured as a media list-->
  <!-- Template from List View component: Media List -->
    <f7-list media-list>
      <f7-list-item        
        title="Alice Manz &#9792;"
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
      <f7-button fill raised href="/review/">Show reviews</f7-button> 
      <br>
      <!--Button "Ask for price"-->
      <f7-button fill raised href="/suitable-helper/">Ask for price</f7-button>
        <!--Profile picture-->
         <template #media>
            <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
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
        text="Hello, I´m Alice. I am 34 years old and a qualified car mechanic."       
      >
      <!-- show more button -->
      <br>
      <f7-button fill raised>Show more</f7-button>
      </f7-list-item>
    </f7-list>

    <!--Media List for Profile Gallery-->
    <f7-list media-list>
      <f7-list-item      
        title="PROFILE GALLERY"      
      >
    <f7-block>
        <f7-row>
      <f7-col>
          <img src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg" width="140"/>
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
          <img src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg" width="140"/>
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
.col{
    background: #fff;
    text-align: center;
    color: #000;
    border: 1px solid #ddd;
    padding: 5px;
    margin-bottom: 16px;
    font-size: 12px;
    height: 200px;
}
.date{
  float: left;
  font-size: 15px;
}
p{
  margin: 0px;
  padding: 0px;
  height: 34px;
  font-size: 17px;
}
.black_heart{
  display: inline;
  float: right;
}
.follower{
  float: right;
  font-size: 15px;
}
</style>

