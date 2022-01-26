<template>
  <f7-page name="chat">
    <!-- Navbar area -->
    <f7-navbar back-link="Back" style="font-size: 20px">
      <span class="change">Chat</span>
      <f7-icon
        fill
        f7="phone_fill"
        size="30px"
        class="right"
      ></f7-icon>
    </f7-navbar>
    <!-- Helper's information -->
    <f7-block>
      <img
        v-bind:src="helpersInfo.img"
        width="120"
        class="avatar"
      />
      <f7-list media-list inset>
        <f7-list-item>
          <f7-row>
            <f7-col>
              <div style="font-size: 25px; margin-bottom:5px">{{helpersInfo.name}}</div>
              <span
               class="item-text .list" style="font-size: 19px">
                &#8982;{{helpersInfo.location}} 
              </span>
            </f7-col>
            <f7-col>
              <f7-chip outline color="#263a68" text="#Car Repair"></f7-chip> 
              <f7-button fill class="price">{{helpersInfo.price}}</f7-button>
            </f7-col>
          </f7-row>
        </f7-list-item>
      </f7-list>
    </f7-block>
    <f7-block>
      <!-- Message -->
      <f7-messages class="message_background">
        <f7-message
          v-for="(message, index) in messagesData"
          :key="index"
          :type="message.type"
          :image="message.image"
          :name="message.name"
          :avatar="message.avatar"
          :first="isFirstMessage(message, index)"
          :last="isLastMessage(message, index)"
          :tail="isTailMessage(message, index)"
        >
          <template #text>
            <!-- eslint-disable-next-line -->
            <span v-if="message.text" v-html="message.text"></span>
          </template>
        </f7-message>
        <f7-message
          v-if="typingMessage"
          type="received"
          :typing="true"
          :first="true"
          :last="true"
          :tail="true"
          :header="`${typingMessage.name} is typing`"
          :avatar="typingMessage.avatar"
        ></f7-message>
      </f7-messages>
      <!-- Message bar -->
      <f7-messagebar
        ref="messagebar"
        v-model:value="messageText"
        :placeholder="placeholder"
        :attachments-visible="attachmentsVisible"
        :sheet-visible="sheetVisible"
        class="bar"
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
    </f7-block>
  </f7-page>
</template>
<style scoped>
.change {
  position: absolute;
  left: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 10;
  font-weight: var(--f7-navbar-title-font-weight);
  display: inline-block;
  line-height: var(--f7-navbar-title-line-height);
  text-align: var(--f7-navbar-title-text-align);
  font-size: var(--f7-navbar-title-font-size);
  margin-left: var(--f7-navbar-title-margin-left);
  margin-right: var(--f7-navbar-title-margin-left);
}
.right {
  position: relative;
  right: 10px;
}
img {
  display: block;
  margin: auto;
}
.bar {
  position: fixed;
  bottom: 50px;
}
.message_background {
  background-color: initial;
}
.message-sent{
    --f7-message-sent-bg-color: #468DCE;
    --f7-message-bubble-font-size: 20px;
}
.message-received{
  --f7-message-received-bg-color: #879BAA;
  --f7-message-received-text-color: white;
  --f7-message-bubble-font-size: 20px;
}
.avatar{
  border-radius: 50%; 
  width: 35vmin;
   height: 35vmin; 
   object-fit: cover; 
   object-position: center;
}
.chip{
  font-size: 18px;
}
.button{
  font-size: 20px;
  padding: 20px;
  margin-top: 10px;
}

</style>
<script>
import { f7, f7ready } from "framework7-vue";
import $ from "dom7";
import myBus from '../js/myBus.js';

export default {
  data() {
    return {
        //  helpers data
        helpers: [
                  {
                    name: 'Lisa Wright',
                    img: 'https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    date: '10/12/2021',
                    location: '81549 Munich',
                    star_1: 'star_fill',
                    star_2: 'star_fill',
                    star_3: 'star_fill',
                    star_4: 'star_fill',
                    star_5: 'star',
                    grade: '4.1/5',
                    price: '12€',
                    badge: false,
                    request: "Audi A6's front brake pads are broken and need repair",
                  },
                  {
                    name: 'Jack Miller',
                    img: 'https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    date: '13/12/2021',
                    location: '81548 Munich',
                    star_1: 'star_fill',
                    star_2: 'star_fill',
                    star_3: 'star_fill',
                    star_4: 'star_fill',
                    star_5: 'star_lefthalf_fill',
                    grade: '4.6/5',
                    price: '10€',
                    badge: false,
                    request: "Audi A6's front brake pads are broken and need repair",
                  },
                  {
                    name: 'Eric Hofmeister',
                    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    date: '11/12/2021',
                    location: '81550 Munich',
                    star_1: 'star_fill',
                    star_2: 'star_fill',
                    star_3: 'star_fill',
                    star_4: 'star_fill',
                    star_5: 'star_fill',
                    grade: '4.9/5',
                    price: '15€',
                    badge: false,
                    request:"Audi A6's front brake pads are broken and need repair",
                  },
                  {
                    name: 'Michael Wenzel',
                    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    date: '14/12/2021',
                    location: '81551 Munich',
                    star_1: 'star_fill',
                    star_2: 'star_fill',
                    star_3: 'star_fill',
                    star_4: 'star_fill',
                    star_5: 'star_lefthalf_fill',
                    grade: '4.6/5',
                    price: '10€',
                    badge: true,
                    request:"Four walls of the bedroom need to be renovated and painted",
                  },
                  {
                    name: 'Laura Briem',
                    img: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    date: '14/12/2021',
                    location: '81551 Munich',
                    star_1: 'star_fill',
                    star_2: 'star_fill',
                    star_3: 'star_fill',
                    star_4: 'star_fill',
                    star_5: 'star_lefthalf_fill',
                    grade: '4.6/5',
                    price: '10€',
                    badge: false,
                    request:"Newly purchased IKEA nightstand needs to be assembled",
                  },
                  {
                    name: 'Helena See',
                    img: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    date: '14/12/2021',
                    location: '81551 Munich',
                    star_1: 'star_fill',
                    star_2: 'star_fill',
                    star_3: 'star_fill',
                    star_4: 'star_fill',
                    star_5: 'star_lefthalf_fill',
                    grade: '4.6/5',
                    price: '10€',
                    badge: false,
                    request:"Newly purchased IKEA nightstand needs to be assembled",
                  },
        ],
        helpersInfo: {
                  name: '',
                  img: '',
                  date: '',
                  location: '',
                  star_1: '',
                  star_2: '',
                  star_3: '',
                  star_4: '',
                  star_5: '',
                  grade: '',
                  price: '',
                  badge: '',
      },
      attachments: [],
      sheetVisible: false,
      typingMessage: null,
      messageText: "",
      messagesData: [
        {
          type: "sent",
          text: "Hi",
        },
        {
          type: "sent",
          text: "I want to fix my, when are you free to come to my house?",
        },
        {
          name: "Jack Miller",
          type: "received",
          text: "Hi, i am free tomorrow morning and in the afternoon",
          avatar:
            "https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          type: "sent",
          text: "Okay,you can come tomorrow morning,see you.",
        },
        {
          name: "Jack Miller",
          type: "received",
          text: "See you tomorrow",
          avatar:
            "https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
  computed: {
    attachmentsVisible() {
      const self = this;
      return self.attachments.length > 0;
    },
    placeholder() {
      const self = this;
      return self.attachments.length > 0 ? "Add comment or Send" : "Message";
    },
  },
  mounted() {
    const self = this;
    f7ready(() => {
      self.messagebar = f7.messagebar.get(self.$refs.messagebar.$el);
    });
    //get info from interested helper page
     myBus.on('changeChatInfo', data => {
      this.helpersInfo = data;
      for(var i=0;i<self.messagesData.length;i++){
        if(self.messagesData[i].type == 'received')
        {
          self.messagesData[i].avatar = data.img;
          self.messagesData[i].name = data.name;
        }
      }
    })
    // get info from notification page
    myBus.on('sendInfo',data => {
      for(var i=0;i<self.helpers.length;i++){
        if(self.helpers[i].name == data.name)
        {
          self.helpersInfo =self.helpers[i];
        }
      }
      for(var i=0;i<self.messagesData.length;i++){
        if(self.messagesData[i].type == 'received')
        {
          self.messagesData[i].avatar = self.helpersInfo.img;
          self.messagesData[i].name = self.helpersInfo.name;
        }
      }
    })
  },
  methods: {
    isFirstMessage(message, index) {
      const self = this;
      const previousMessage = self.messagesData[index - 1];
      if (message.isTitle) return false;
      if (
        !previousMessage ||
        previousMessage.type !== message.type ||
        previousMessage.name !== message.name
      )
        return true;
      return false;
    },
    isLastMessage(message, index) {
      const self = this;
      const nextMessage = self.messagesData[index + 1];
      if (message.isTitle) return false;
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      )
        return true;
      return false;
    },
    isTailMessage(message, index) {
      const self = this;
      const nextMessage = self.messagesData[index + 1];
      if (message.isTitle) return false;
      if (
        !nextMessage ||
        nextMessage.type !== message.type ||
        nextMessage.name !== message.name
      )
        return true;
      return false;
    },
    deleteAttachment(image) {
      const self = this;
      const index = self.attachments.indexOf(image);
      self.attachments.splice(index, 1)[0]; // eslint-disable-line
    },
    handleAttachment(e) {
      const self = this;
      const index = $(e.target).parents("label.checkbox").index();
      const image = self.images[index];
      if (e.target.checked) {
        // Add to attachments
        self.attachments.unshift(image);
      } else {
        // Remove from attachments
        self.attachments.splice(self.attachments.indexOf(image), 1);
      }
    },
    sendMessage() {
      const self = this;
      const text = self.messageText.replace(/\n/g, "<br>").trim();
      const messagesToSend = [];
      self.attachments.forEach((attachment) => {
        messagesToSend.push({
          image: attachment,
        });
      });
      if (text.length) {
        messagesToSend.push({
          text,
        });
      }
      if (messagesToSend.length === 0) {
        return;
      }

      // Reset attachments
      self.attachments = [];
      // Hide sheet
      self.sheetVisible = false;
      // Clear area
      self.messageText = "";
      // Focus area
      if (text.length) self.messagebar.focus();
      // Send message
      self.messagesData.push(...messagesToSend);
    },
  },
};
</script>

