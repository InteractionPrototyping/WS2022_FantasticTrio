<template>
  <f7-page name="project">
    <!-- Navbar area -->
    <f7-navbar back-link="Back" style="font-size: 20px">

    <!--Second back-link??-->
      <f7-navbar-left>
        <a
          class="link"
          @click="
            f7router.navigate('/explore/', {
              reloadCurrent: true,
              animate: true,
            })
          "
          ><i class="icon icon-back"> </i
          ><span class=""
            >Back
            <!----></span
          ></a
        >
      </f7-navbar-left>
      <span class="title" style="position: absolute; left: 160px">Project</span>
    </f7-navbar>
    <f7-block style="text-align: center" v-for="item in activeList" v-bind:key="item">
      <!-- Swiper for pictures -->
      <f7-swiper pagination>
        <f7-swiper-slide>
          <img
            v-bind:src="item.img_first"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            v-bind:src="item.img_second"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            v-bind:src="item.img_third"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <hr />
    <!-- Article for project -->
    <f7-block v-for="item in activeList" v-bind:key="item">
      <h2 style="text-align: center; font-size: 30px">{{item.title}}</h2>
      <p class="Content" style="font-size: 20px">{{item.text}}</p>
      <!-- Description of Writer -->
      <h3 style="position: relative; top: 10px; font-size: 25px">Author</h3>
      <div style="position: absolute; bottom: 200px; right: 20px">
        <f7-icon v-bind:f7="item.like_type" size="25px" class="black_heart"></f7-icon>
        <span style="position: relative; top: 5px; font-size: 20px"> {{item.likes}} </span>
      </div>
      <a class="link" href="/profile-helper/">
      <f7-list inset media-list style="height: 100px; width: 350px">
        <f7-list-item v-bind:title="item.writer" text="Expert of car repair">
          <br>       
          <template #media>
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
              class="avatar"
            />
          </template>
        </f7-list-item>
      </f7-list>
      </a>
    </f7-block>
    <hr />
    <!-- Comment area -->
    <f7-block>
      <h3 style="padding: 0px; font-size: 25px">Last comment</h3>
      <f7-list
        media-list
        style="height: 100px; position: relative; bottom: 20px" inset
      >
        <f7-list-item
          title="Jessi Briem"
          text="I like the article very much,  that help me a lot."
          after="05/12/2021"
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="28"
              class="avatar"
            />
          </template>
        </f7-list-item>
      </f7-list>
      <f7-button
        fill
        href="/comment/"
        style="position: relative; bottom: 50px"
        >Show all comments</f7-button
      >
      <br />
      <br />
      <!-- Comment bar -->
      <div class="comment_area">
        <f7-messagebar
          ref="messagebar"
          v-model:value="messageText"
          placeholder="Leave your comment"
          :attachments-visible="attachmentsVisible"
          :sheet-visible="sheetVisible"
          class="bar"
          style="position: fixed; bottom: 50px"
        >
          <template #inner-start>
            <f7-link
              icon-ios="f7:camera_fill"
              icon-aurora="f7:camera_fill"
              icon-md="material:camera_alt"
              @click="sheetVisible = !sheetVisible"
            />
          </template>
          <template #inner-end>
            <f7-link
              icon-ios="f7:arrow_up_circle_fill"
              icon-aurora="f7:arrow_up_circle_fill"
              icon-md="material:send"
              @click="sendMessage"
            />
          </template>
          <f7-messagebar-attachments>
            <f7-messagebar-attachment
              v-for="(image, index) in attachments"
              :key="index"
              :image="image"
              @attachment:delete="deleteAttachment(image)"
            ></f7-messagebar-attachment>
          </f7-messagebar-attachments>
          <f7-messagebar-sheet>
            <f7-messagebar-sheet-image
              v-for="(image, index) in images"
              :key="index"
              :image="image"
              :checked="attachments.indexOf(image) >= 0"
              @change="handleAttachment"
            ></f7-messagebar-sheet-image>
          </f7-messagebar-sheet>
        </f7-messagebar>
      </div>
    </f7-block>
  </f7-page>
</template>

<style scoped>
.user {
  color: grey;
  font-size: 5px;
}
.person {
  display: flex;
  float: left;
}
.black_heart {
  display: flex;
  float: right;
  margin-top: 5px;
}
.avatar{
  border-radius: 50%; 
  width: 15vmin;
   height: 15vmin; 
   object-fit: cover; 
   object-position: center;
}
.media-list{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-text-font-size: 20px;
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
                img_first: "https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Johan',
                likes: 14,
                like_type: "suit_heart_fill",
                id:2,
              },
              { title:"Gardening is wonderful",
                img_first: "https://imgs.wantubizhi.com/upload/i_1/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/1965898469x2092364723_26_0.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Eric',
                likes: 10,
                like_type: "suit_heart",
                id:3,
              },
              { title:"Eletronics is not difficult",
                img_first: "https://www.aumueller-gmbh.de/fileadmin/01_Images/10_Target_groups/elektriker_header%40.jpg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Jeson',
                likes: 2,
                like_type: "suit_heart_fill",
                id:4,
              },
              { title:"Assembling furniture",
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
                img_first: "https://www.cashcarsbuyer.com/wp-content/uploads/2019/10/fixing-a-car.jpeg",
                img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                text:"It’s just as important to keep the backup tire inflated as it is the four tires under your car. The last thing you want is to discover your spare is flat while you’re pulling the jack out of your trunk. That’s when you’ll need to call a tow truck—which can run you hundreds of dollars. It’s better to spend a dollar on an air pump to inflate your spare. That way you’re spared the cost of a tow.",
                writer: 'Alice',
                likes: 7,
                like_type: "black_heart",
                id:7,
              },
              { title:"A tip to keep you garden clean",
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
      getItem:{ title:"",
                img: "",
                writer: '',
                likes: '',
                like_type: "",
                id:'',
              }

    }
},
  computed: {
    activeList() {
      // problem here
      myBus.on("Id",data=> {
      this.getItem.id=data.id; 
       })
       //get data of the id of project we choose in previous page
       var i= this.getItem.id;
       i = parseInt(i);
       console.log(i);
       //we can see it works
       return this.list.filter((item) => item.id == 2)
       // when item== i , it not works, i don't know why, i is numeric and item.id is also numeric.
      
    }
  },
  methods: {
    getId(id){
      console.log(id);
    }
  },
}
</script>

