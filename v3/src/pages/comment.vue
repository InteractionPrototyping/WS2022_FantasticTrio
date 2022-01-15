<template>
  <f7-page name="comment">
    <!-- Navbar area -->
    <f7-navbar title="Comment" back-link="Back" style="font-size: 20px"></f7-navbar>
    <f7-block>
      <!-- Comment content -->
      <f7-list media-list style="height: 150px">
        <f7-list-item v-for="item in list" v-bind:key="item" v-bind:title="item.name" v-bind:after="item.date" v-bind:subtitle="item.text"
        >
          <template #media>
            <img
              v-bind:src="item.avatar"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <br />
        <br />
      </f7-list>
      <f7-block style="height: 700px"> </f7-block>
    </f7-block>
    <!-- Comment bar -->
    <f7-block style="display: block">
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
    </f7-block>
  </f7-page>
</template>
<style scoped>
.avatar{
  border-radius: 50%; 
  width: 20vmin;
  height: 20vmin; 
  object-fit: cover; 
  object-position: center;
}
.media-list{
  --f7-list-item-title-font-size: 23px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-subtitle-font-size: 20px;
}
</style>
<script>
import { f7Button,f7 } from 'framework7-vue';
import myBus from '../js/myBus.js';
const self =this;
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
      messageText: "",
      // initial comment data
      list:[
              { name:"Jessi Briem",
                avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "05/12/2021",
                text: "I like the article very much, it helped me a lot.",
                id:1,
              },
              { name:"Eric Bach",
                avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "04/12/2021",
                text: "Thanks for sharing!",
                id:2,
              },
              { name:"Christina Ruck",
                avatar: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "30/11/2021",
                text: "The tips are all useless for me.",
                id:3,
              },
              { name:"Jeson Smith",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "25/11/2021",
                text: "Cool idea! I will try it next time :)",
                id:4,
              },
              { name:"Alice Wilson",
                avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "21/11/2021",
                text: "Thanks,I will try it on my father's car.",
                id:5,
              },
              { name:"Hans Schmitt",
                avatar: "https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "15/11/2021",
                text: "At least I need one my own car",
                id:6,
              },
            ],
      newComment:{
                name:"Jessi Briem",
                avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                date: "",
                text: "",
                id:7,
      }
    }
},
  computed: {
    activeList() {
      return this.list.filter((item) => item.id < 50)
    }
  },
  methods: {
    addComment(){
              var nowDate = new Date();
              let date = {
                  year: nowDate.getFullYear(),
                  month: nowDate.getMonth() + 1,
                   date: nowDate.getDate(),
               }
              console.log(date);
              let systemDate = date.date + '/' + 0 + date.month + '/'  + date.year;
      this.newComment.date= systemDate;
      this.newComment.text= this.messageText;
      this.list.unshift(this.newComment)
    }
  },
}
</script>

