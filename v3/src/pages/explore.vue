<template>
  <f7-page name="explore">
    <!-- Navbar area -->
    <f7-navbar back-link="Back" >
      <!-- use smart select component to choose keywords -->
      <f7-list>
      <f7-list-item title="Keyword" smart-select :smart-select-params="{openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search keyword'}">
      <select name="keyword">
        <optgroup label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/car.svg'> Auto,Mobiles" >
          <option value="Autoreparatur" selected>Autoreparatur</option>
          <option value="Auto Tuning" >Auto Tuning</option>
          <option value="Chauffeur">Chauffeur</option>
          <option value="Fahrzeugbeschriftung">Fahrzeugbeschriftung</option>
          <option value="Fahrzeugreinigung">Fahrzeugreinigung</option>
          <option value="Sonstige Kfz-Service">Sonstige Kfz-Service</option>
        </optgroup>
        <optgroup label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/home.svg'> Haus,Aussenarbeiten ">
          <option value="Abriss">Abriss</option>
          <option value="Aussenkonstruktion">Aussenkonstruktion</option>
          <option value="Baggerarbeiten">Baggerarbeiten</option>
          <option value="Bautrockenlegung, Baut...">Bautrockenlegung, Baut...</option>
          <option value="Dachdecker">Dachdecker</option>
          <option value="Sonstige Aussenarbeit">Sonstige Aussenarbeit</option>

        </optgroup>
        <optgroup label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/painting.svg'>Haus,Innenarbeiten" >
          <option value="Badsanierung">Badsanierung</option>
          <option value="Bodenleger">Bodenleger</option>
          <option value="Deckenarbeiten">Deckenarbeiten</option>
          <option value="Entrümpelung">Entrümpelung</option>
          <option value="Sonstige Aussenarbeit">Sonstige Innenarbeit</option>
        </optgroup>
        <optgroup label=" <img style='width:25px; height:25px;' src='../img/add_request_keyword/gardening.svg'> Gardenarbeiten">
          <option value="Baumfällung">Baumfällung</option>
          <option value="Gärtner">Gärtner</option>
          <option value="Gartenteich">Gartenteich</option>
          <option value="Grabpflege">Grabpflege</option>
          <option value="Sonstige Gartenarbeit">Sonstige Gartenarbeit</option>
        </optgroup>
      </select>
    </f7-list-item>
    </f7-list>
    </f7-navbar>
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
          <p>Tips for assembling furniture</p>
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
          <span class="writer">Alice M.</span>
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
  </f7-page>
</template>
<style scoped>
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
.list{
  --f7-list-item-title-text-color: #263A68;
  --f7-list-item-title-font-size: 20px;
}
</style>
// <script>
import '../js/explore_data.js'
export default {
  props: {
    f7router: Object,
    f7navbar: Object,
  },
};
</script>