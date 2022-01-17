<template>
  <f7-page name="profile-gallery">
    <f7-navbar title="Liked Projects" back-link="Back" style="font-size: 20px"></f7-navbar>

    <!-- Individual parts of the page are each structured as a media list-->
    <!-- Template from List View component: Media List -->

    <!--Gallery projects overview-->
        <f7-row class="exploreCard">
      <f7-col width='50' v-for="item in activeList" v-bind:key="item">
        <f7-link href='/project/' @click="getId(item)">
          <f7-card class="demo-card-header-pic">
            <f7-card-header
              class="no-border"
              valign="bottom"
              v-bind:style="item.img_header"
            >
            </f7-card-header>
            <f7-card-content>
              <!-- <p class="date">January 21, 2015</p> -->
              <strong>{{item.title}}</strong>
            </f7-card-content>
            <f7-card-footer>
              <f7-link
                href="/profile-helper/"
                icon-ios="f7:person_fill"
                icon-aurora="f7:person_fill"
                icon-md="material:person"
              >
              {{item.writer}}
              </f7-link>
              <f7-link
              >
            <f7-icon
            size="20px"
            class="black_heart"
            v-bind:f7="item.like_type"
            ></f7-icon>
              {{item.likes}}
              </f7-link>
            </f7-card-footer>
          </f7-card>
        </f7-link>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<!--Style-->
<style scoped>
/* .col-50{
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
} */
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
  .row{
    display: flex;
    justify-content: flex-start;
  }
  .col-50{
    position: relative;
    left: 8px;
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
      msg:'adf',
            list:[
              { title:"The fixing work is awesome!!!",
                img_header: "background-image:url(https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg)",
                img_first: "https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Alice',
                likes: 7,
                like_type: "suit_heart_fill",
                id:1,
              },
              { title:"A tip to keep you garden clean",
                img_header: "background-image:url(https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg)",
                img_first: "https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Johan',
                likes: 14,
                like_type: "suit_heart_fill",
                id:2,
              },
              { title:"Gardening is wonderful!!",
                img_header: "background-image:url(https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                img_first: "https://imgs.wantubizhi.com/upload/i_1/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/1965898469x2092364723_26_0.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Eric',
                likes: 10,
                like_type: "suit_heart",
                id:3,
              },
              { title:"Eletronics is not difficult！！",
                img_header: "background-image:url(https://www.aumueller-gmbh.de/fileadmin/01_Images/10_Target_groups/elektriker_header%40.jpg)",
                img_first: "https://www.aumueller-gmbh.de/fileadmin/01_Images/10_Target_groups/elektriker_header%40.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Jeson',
                likes: 2,
                like_type: "suit_heart_fill",
                id:4,
              },
              { title:"Assembling furnitures with equipment",
                img_header: "background-image:url(https://st.depositphotos.com/1037987/4830/i/950/depositphotos_48304873-stock-photo-man-putting-together-assembly-furniture.jpg)",
                img_first: "https://st.depositphotos.com/1037987/4830/i/950/depositphotos_48304873-stock-photo-man-putting-together-assembly-furniture.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Hans',
                likes: 28,
                like_type: "suit_heart_fill",
                id:5,
              },
              { title:"Teach you to replace the bulb",
                img_header: "background-image:url(http://5b0988e595225.cdn.sohucs.com/images/20190610/249d26e235d7412183d572ddfa3b8944.jpeg)",
                img_first: "http://5b0988e595225.cdn.sohucs.com/images/20190610/249d26e235d7412183d572ddfa3b8944.jpeg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Jessica',
                likes: 30,
                like_type: "suit_heart_fill",
                id:6,
              },
              { title:"The fixing work is awesome!!!",
                img_header: "background-image:url(https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
                img_first: "https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Alice',
                likes: 7,
                like_type: "suit_heart",
                id:7,
              },
              { title:"A tip to keep you garden clean",
                img_header: "background-image:url(https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg)",
                img_first: "https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
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
      return this.list.filter((item) => item.like_type == "suit_heart_fill")
    }
  },
    beforeCreate(){
    myBus.on("ChangeLike",data => {
      myBus.project = data;
    })
    },
    mounted() {
    var self =this;
    if(typeof myBus.project !== "undefined"){
      for(var i=0;i<self.list.length;i++){
        if(self.list[i].id==myBus.project.id)
        {
          self.list[i].likes=myBus.project.likes;
          self.list[i].like_type=myBus.project.like_type;
        }
    }
    }
  },
  methods: {
    getId(item){
      myBus.emit("Id", item);
    },
  },
}
</script>



