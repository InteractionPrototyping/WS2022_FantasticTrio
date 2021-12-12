<template>
  <f7-page name="profile-helper">
    <f7-navbar title="Profile" back-link="Back"></f7-navbar>

  <!-- Template from List View component: Media List -->
    <f7-list media-list>
      <f7-list-item        
        title="Verena Manz &#9792;"
        subtitle="&#8982; 86378, Munich"
        text="&#9733;&#9733;&#9733;&#9733;&#9734;"       
      >
      <f7-button fill raised href="/review/">Show reviews</f7-button> 
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
        <!-- price button -->
        <!-- <f7-button fill raised href="/suitable-helper/" >Ask for price</f7-button> -->
        <!-- it also shows toast when click price button -->
        <f7-block>
        <f7-button fill @click="showToast" href="/suitable-helper/">Ask for price</f7-button>
        </f7-block>
      </f7-list-item>
    </f7-list>

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
        <f7-block >
        <f7-button fill raised href="/profile-gallery/">Show more</f7-button>
        <!-- alternative possibility instead of button?: link="#" href="/profile-gallery/" -->
       </f7-block>
      </f7-list-item>
    </f7-list>

    <f7-list media-list>
      <f7-list-item        
        title="DESCRIPTION"
        text="Hello, I´m Verena. I am 34 years old and a qualified car mechanic."       
      >
        <!-- show more button -->
        <f7-block >
        <f7-button fill raised  href="/profile-gallery/">Show more</f7-button>
       </f7-block>
      </f7-list-item>
    </f7-list>

    <f7-list media-list>
      <f7-list-item      
        title="PROFILE GALLERY"      
      >
      <f7-block>
        <f7-row>
      <f7-col link="#view-project" @click="f7router.navigate('/project/',{reloadCurrent: true,animate: true})">
          <img src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg" width="150"/>
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
          <img src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg" width="150"/>
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
      </f7-block> 
        <!-- show more button -->
        <f7-block >
        <f7-button fill raised  href="/profile-gallery/">Show more</f7-button>
       </f7-block>
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

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
}
p{
  margin: 0px;
  padding: 0px;
  height: 34px;
}
.black_heart{
  display: inline;
  float: right;
}
.follower{
  float: right;
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


