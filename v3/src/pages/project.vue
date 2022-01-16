<template>
  <f7-page name="project">
    <!-- Navbar area -->
    <f7-navbar title="Project" back-link="Back" style="font-size: 20px"></f7-navbar>


    <f7-block style="text-align: center" >
      <!-- Swiper for pictures -->
      <f7-swiper pagination>
        <f7-swiper-slide>
          <img
            v-bind:src="getItem.img_first"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            v-bind:src="getItem.img_second"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
        <f7-swiper-slide>
          <img
            v-bind:src="getItem.img_third"
            width="350"
            height="200"
            class="picture"
          />
        </f7-swiper-slide>
      </f7-swiper>
    </f7-block>
    <hr />
    <!-- Article for project -->
    <f7-block >
      <h2 style="text-align: center; font-size: 30px" >{{getItem.title}}</h2>
      <p class="Content" style="font-size: 20px">{{getItem.text}}</p>
      <!-- Description of Writer -->
      <h3 style="position: relative; top: 10px; font-size: 25px">Author</h3>
      <div style="position: absolute; bottom: 200px; right: 20px">
        <f7-icon v-bind:f7="getItem.like_type" size="25px" class="black_heart"></f7-icon>
        <span style="position: relative; top: 5px; font-size: 20px"> {{getItem.likes}} </span>
      </div>
      <a class="link" href="/profile-helper/">
      <f7-list inset media-list style="height: 100px; width: 350px">
        <f7-list-item v-bind:title="getItem.writer" text="Expert of car repair">
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
          v-bind:title="latestComment.name"
          v-bind:text="latestComment.text"
          v-bind:after="latestComment.date"
        >
          <template #media>
            <img
              v-bind:src="latestComment.avatar"
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
               @click="addComment"
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
import routes from "../js/routes.js";
export default {
  props: {
      f7route: Object,
      f7router: Object,
    },
  components: {
    f7Button,
    f7
  },
  data(){
      return {
        messageText: "",
        getItem:{ title:"1",
                  img_first: "https://imgs.wantubizhi.com/upload/i_0/T1huMFdJZ3Y2V3VzVloxUEtCaExYZz09/3009539753x1910106365_26_0.jpg",
                  img_second: "https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                  img_third:"https://media.istockphoto.com/photos/mechanic-using-a-ratchet-wrench-picture-id1165311626?k=20&m=1165311626&s=612x612&w=0&h=2bA0oO8I6mNN7QlZHeCRTs9tRbMae9JNSsvdq-zD1Wg=",
                  text:"2",
                  writer: '3',
                  likes: '4',
                  like_type: "",
                  id:2,
                },
        title: '',
        latestComment:{
                name:"Jessi Briem",
                avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "05/12/2021",
                text: "I like the article very much, it helped me a lot.",
                id:1,
        }
      }
  },
  // computed: {
  //   activeList() {
  //     // problem here
  //     myBus.on("Id",data=> {
  //     this.getItem=data; 
  //      })
  //      //get data of the id of project we choose in previous page
  //      var i= this.getItem.id;
  //      i = parseInt(i);
  //      console.log(this.getItem.title);
  //      //we can see it works
  //      return this.list.filter((item) => item.id == 2)
  //      // when item== i , it not works, i don't know why, i is numeric and item.id is also numeric.
      
  //   }
  // },
  mounted() {
    myBus.on("Id",data => {
      this.getItem = data
      console.log(this.getItem)
           })
    myBus.on("ToProject",data => {
      this.latestComment = data
           })    
  },
  methods:{
      addComment(){
              var nowDate = new Date();
              let date = {
                  year: nowDate.getFullYear(),
                  month: nowDate.getMonth() + 1,
                   date: nowDate.getDate(),
               }
              console.log(date);
              let systemDate = date.date + '/' + 0 + date.month + '/'  + date.year;
      this.latestComment.date= systemDate;
      this.latestComment.text= this.messageText;
      myBus.emit("ToComment",this.latestComment)
    }
  },
}
</script>

