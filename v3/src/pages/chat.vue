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
        src="https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width="120"
        class="avatar"
      />
      <f7-list media-list inset>
        <f7-list-item>
          <f7-row>
            <f7-col>
              <div style="font-size: 25px; margin-bottom:5px">Jack Miller</div>
              <span>
              <div class="item-text .list" style="font-size: 18px">&#8982; 81548,Munich</div>
              </span>
            </f7-col>
            <f7-col>
              <f7-chip outline color="#263a68" text="#Car Repair" style="margin-bottom:5px; text-size: 30px"></f7-chip> 
              <f7-button fill class="price">10&#8364;</f7-button>
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
.avatar{
  border-radius: 50%; 
  width: 35vmin;
   height: 35vmin; 
   object-fit: cover; 
   object-position: center;
}

</style>
<script>
import { f7, f7ready } from "framework7-vue";
import $ from "dom7";

export default {
  data() {
    return {
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
          text: "I want to fix my, when could you go to my home?",
        },
        {
          name: "Jack.M",
          type: "received",
          text: "Hi, i am free in tomorrow morning and afternoon",
          avatar:
            "https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          type: "sent",
          text: "Okay,you can directly go to my home tomorrow,see you next morning.",
        },
        {
          name: "Jack.M",
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

