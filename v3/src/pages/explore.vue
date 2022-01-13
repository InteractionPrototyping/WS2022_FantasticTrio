<template>
  <f7-page name="explore">
    <!-- Navbar area -->
    <f7-navbar back-link="Back">
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
        <f7-col width="50" v-for="item in activeList" v-bind:key="item"
          link="#view-project"
          @click="
            f7router.navigate('/project/', {
              reloadCurrent:true,
              animate: true,
            }),
            getId(item.id)
          "
        >
          <img
            v-bind:src="item.img"
            width="150"
            height="100"
          />
          <p>{{item.title}}</p>
          <br />
          <br />
          <f7-icon f7="person-fill" size="25px" class="person"></f7-icon>
          <span class="writer">{{item.writer}}</span>
          <span class="follower">{{item.likes}}</span>
          <f7-icon
            size="20px"
            class="black_heart"
            v-bind:f7="item.like_type"
          ></f7-icon>
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>
<style scoped>
.col-50{
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 16px;
  font-size: 12px;
  height: 210px;
  border-radius: 8px;
  box-shadow: 0 2px 5px  rgba(0, 0, 0, 0.4);
}
.person {
  display: inline;
  float: left;
  padding: 3px;
}
.writer {
  float: left;
  font-size: 20px;
}
p{
  margin: 0px;
  padding: 0px;
  height: 34px;
  font-size: 20px;
  font-family: var(--f7-font-family);
}
.black_heart {
  display: inline;
  float: right;
  padding: 3px;
}
.follower {
  float: right;
  font-size: 20px;
}
.list{
  --f7-list-item-title-text-color: #263A68;
  --f7-list-item-title-font-size: 20px;
}
</style>
<script>
import { f7Button,f7 } from 'framework7-vue';
import myBus from '../js/myBus.js';
export default {
  props: {
      f7route: Object,
      f7router: Object,
    },
  components: {
    f7Button,
  },
data(){
    return {
      // initial requests data 
      list:[
              { title:"The fixing work is awesome!!!",
                img: "https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg",
                writer: 'Alice',
                likes: 7,
                like_type: "suit_heart_fill",
                id:1,
              },
              { title:"A tip to keep you garden clean",
                img: "https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg",
                writer: 'Johan',
                likes: 14,
                like_type: "suit_heart_fill",
                id:2,
              },
              { title:"Gardening is wonderful",
                img: "https://imgs.wantubizhi.com/upload/i_1/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/1965898469x2092364723_26_0.jpg",
                writer: 'Eric',
                likes: 10,
                like_type: "suit_heart",
                id:3,
              },
              { title:"Eletronics is not difficult",
                img: "https://www.aumueller-gmbh.de/fileadmin/01_Images/10_Target_groups/elektriker_header%40.jpg",
                writer: 'Jeson',
                likes: 2,
                like_type: "suit_heart_fill",
                id:4,
              },
              { title:"Assembling furniture",
                img: "https://st.depositphotos.com/1037987/4830/i/950/depositphotos_48304873-stock-photo-man-putting-together-assembly-furniture.jpg",
                writer: 'Hans',
                likes: 28,
                like_type: "suit_heart_fill",
                id:5,
              },
              { title:"Teach you to replace the bulb",
                img: "http://5b0988e595225.cdn.sohucs.com/images/20190610/249d26e235d7412183d572ddfa3b8944.jpeg",
                writer: 'Jessica',
                likes: 30,
                like_type: "suit_heart_fill",
                id:6,
              },
              { title:"The fixing work is awesome!!!",
                img: "https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg",
                writer: 'Alice',
                likes: 7,
                like_type: "black_heart",
                id:7,
              },
              { title:"A tip to keep you garden clean",
                img: "https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg",
                writer: 'Johnan',
                likes: 14,
                like_type: "suit_heart_fill",
                id:8,
              }
            ],
    }
},
  computed: {
    activeList() {
      return this.list.filter((item) => item.id < 50)
    }
  },
  methods: {
    getId(id){
      console.log(id);
    }
  },
}
</script>