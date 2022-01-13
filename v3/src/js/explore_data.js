const Project=[]
Project[0]={
	src_img: "https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg",
    title: "The fixing work is awesome!!!",
    writer: "Alice M.",
    status:"black_heart",
}
function init(){
    console.log("App is initialized");
}
<f7-block>
<!-- Project list -->
<f7-row>
  <!-- Make the first project clickbar -->
  <f7-col
    link="#view-project"
    @click="
      f7router.navigate('/project/', {
        reloadCurrent:true,
        animate: true,
      })
    "
  >
    <img
      src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg"
      width="150"
    />
    <p>The fixing work is awesome!!!</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="25px" class="person"></f7-icon>
    <span class="writer">Alice</span>
    <span class="follower">7</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
  <f7-col>
    <img
      src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg"
      width="150"
    />
    <p>A tip to keep you garden clean</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Johan</span>
    <span class="follower">14</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
</f7-row>
<f7-row>
  <f7-col>
    <img
      src="https://imgs.wantubizhi.com/upload/i_1/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/1965898469x2092364723_26_0.jpg"
      width="150"
      height="100"
    />
    <p>Gardening is wonderful</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Eric</span>
    <span class="follower">10</span>
    <f7-icon f7="suit_heart" size="20px" class="black_heart"></f7-icon>
  </f7-col>
  <f7-col>
    <img
      src="https://www.aumueller-gmbh.de/fileadmin/01_Images/10_Target_groups/elektriker_header%40.jpg"
      width="150"
      height="100"
    />
    <p>Eletronics is not difficult</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Jeson</span>
    <span class="follower">2</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
</f7-row>
<f7-row>
  <f7-col>
    <img
      src="https://st.depositphotos.com/1037987/4830/i/950/depositphotos_48304873-stock-photo-man-putting-together-assembly-furniture.jpg"
      width="150"
      height="100"
    />
    <p>Assembling furniture</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Hans</span>
    <span class="follower">28</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
  <f7-col>
    <img
      src="http://5b0988e595225.cdn.sohucs.com/images/20190610/249d26e235d7412183d572ddfa3b8944.jpeg"
      width="150"
      height="100"
    />
    <p>Teach you to replace the bulb</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Jessica</span>
    <span class="follower">30</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
</f7-row>
<f7-row>
  <f7-col>
    <img
      src="https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg"
      width="150"
    />
    <p>The fixing work is awesome!!!</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Alice</span>
    <span class="follower">7</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
  <f7-col>
    <img
      src="https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg"
      width="150"
    />
    <p>A tip to keep you garden clean</p>
    <br />
    <br />
    <f7-icon f7="person-fill" size="20px" class="person"></f7-icon>
    <span class="writer">Johnan</span>
    <span class="follower">14</span>
    <f7-icon
      f7="suit_heart_fill"
      size="20px"
      class="black_heart"
    ></f7-icon>
  </f7-col>
</f7-row>
</f7-block>