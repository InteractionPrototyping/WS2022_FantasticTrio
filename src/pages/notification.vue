<template>
  <f7-page name="notification">
    <!--Navbar area-->
    <f7-navbar title="Notifications" style="font-size: 20px"></f7-navbar>
    <f7-block>
      <!-- notification list -->
      <f7-list media-list>
        <f7-list-item
          v-for="item in list"
          v-bind:key="item"
          v-bind:link="item.link"
          v-bind:title="item.name"
          v-bind:after="item.time"
          v-bind:subtitle="item.info"
          @click="sendInfo(item)"
        >
          <!--Profile picture-->
          <template #media>
            <img v-bind:src="item.img" width="40" class="avatar" />
            <!--badge to indicate unseen notification-->
            <i class="badgeToimg" v-show="item.badge"></i>
          </template>
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<style>
/* Style in this page */
.avatar {
  border-radius: 50%;
  width: 20vmin;
  height: 20vmin;
  object-fit: cover;
  object-position: center;
}
.badgeToimg {
  display: flex;
  height: 20px;
  width: 20px;
  background-color: #4cd964;
  border-radius: 50%;
  position: absolute;
  left: 70px;
  top: 10px;
}
.media-list {
  --f7-list-item-title-font-size: 23px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-subtitle-font-size: 20px;
  --f7-list-item-text-font-size: 17px;
}
</style>

<script>
import myBus from "../js/myBus.js";
export default {
  data() {
    return {
      // initial notifications data
      list: [
        {
          img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Michael Wenzel",
          time: "16:43",
          info: "...offered you a price",
          badge: true,
          link: "/interested-helper/",
          keyword: "Paint wall",
        },
        {
          img: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Laura Briem",
          time: "17:21",
          info: "...sent you a message",
          badge: true,
          link: "/chat/",
        },
        {
          img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Alice Wilson",
          time: "02/02/2022",
          info: "...made a comment",
          badge: false,
          link: "/comment/",
        },
        {
          img: "https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          name: "Lisa Wright",
          time: "10/12/2021",
          info: "...offered you a price",
          badge: false,
          link: "/interested-helper/",
          keyword: "Car repair",
        },
      ],
    };
  },
  methods: {
    sendInfo(item) {
      //delete badge
      item.badge = false;
      var self = this;
      self.badge = self.list.filter((el) => {
        return el.badge === true;
      });
      var numOfBadge = self.badge.length;
      document.getElementById("badgeOnTab").innerHTML = numOfBadge;
      if (document.getElementById("badgeOnTab").innerHTML == "0") {
        document.getElementById("badgeOnTab").style.display = "none";
      }
      //send information to another page in order to show correspondent infomation
      myBus.emit("sendInfo", item);
    },
  },
};
</script>



