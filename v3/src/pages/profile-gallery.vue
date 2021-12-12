<template>
  <f7-page name="profile-gallery">
    <f7-navbar title="Profile Gallery" back-link="Back"></f7-navbar>

     <!-- Template from List View component: Media List -->
    <f7-list media-list>
      <f7-list-item        
        title="Verena Manz &#9792;"
        subtitle="&#8982; 86378, Munich"
        text="&#9733; 4.6(10)" 
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
      </f7-list-item>
    </f7-list>

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

    <f7-row>
      <f7-col>
          <img src="https://imgs.wantubizhi.com/upload/i_1/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/1965898469x2092364723_26_0.jpg" width="150" height="100"/>
          <p>
          Gardening is wonderful
          </p> 
          <br>
          <br>
          <span class="date">30/10/2021</span>
          <span class="follower">10</span>
          <f7-icon f7="suit_heart" size=20px class="black_heart"></f7-icon>
      </f7-col>
      <f7-col>
          <img src="https://www.aumueller-gmbh.de/fileadmin/01_Images/10_Target_groups/elektriker_header%40.jpg" width="150" height="100"/>
          <p>
          Eletronics is not difficult
          </p> 
          <br>
          <br>
          <span class="date">12/06/2021</span>
          <span class="follower">2</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
    </f7-row>
        <f7-row>
      <f7-col>
          <img src="https://st.depositphotos.com/1037987/4830/i/950/depositphotos_48304873-stock-photo-man-putting-together-assembly-furniture.jpg" width="150" height="100"/>
          <p>
          Tips for assembling furniture
          </p> 
          <br>
          <br>
          <span class="date">05/02/2021</span>
          <span class="follower">28</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
      <f7-col>
          <img src="http://5b0988e595225.cdn.sohucs.com/images/20190610/249d26e235d7412183d572ddfa3b8944.jpeg" width="150" height="100"/>
          <p>
          Teach you to replace the bulb
          </p> 
          <br>
          <br>
          <span class="date">28/12/2020</span>
          <span class="follower">30</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
    </f7-row>
        <f7-row>
      <f7-col>
          <img src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg" width="150"/>
          <p>
          The fixing work is awesome!!!
          </p> 
          <br>
          <br>
          <span class="date">19/09/2020</span>
          <span class="follower">7</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
      <f7-col>
          <img src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg" width="150"/>
          <p>
          A tip to keep you garten clean
          </p> 
          <br>
          <br>
          <span class="date">21/06/2019</span>
          <span class="follower">14</span>
          <f7-icon f7="suit_heart_fill" size=20px class="black_heart"></f7-icon>
      </f7-col>
    </f7-row>
    </f7-block>
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



