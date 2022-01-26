<template>
  <f7-page name="interested-helper">
    <!-- Navbar area -->
    <f7-navbar title="Interested Helper" back-link="Back" style="font-size: 20px"></f7-navbar>
    <f7-block-title style="text-align:center;color:#263A68;font-weight:bold">
      Get in touch with users through swipe lists
    </f7-block-title>
    <f7-list media-list>
      <f7-list-item 
        swipeout
        v-for = "(item,index) in activeList"
        v-bind:key="(item,index)"
        v-bind:title='item.name'
        v-bind:after="item.price" 
        v-bind:subtitle="item.location"
        v-bind:style="item.decline"
        v-bind:text='item.grade'>
        <!-- <f7-row>
          <f7-col>
            <f7-icon v-bind:f7="item.star_1" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_2" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_3" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_4" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_5" size="22px" class="star"></f7-icon>
            <span style="font-size:18px">{{item.grade}}</span>
          </f7-col>
          <f7-col>
          <f7-chip outline color="#263a68" style="padding:10px 40px; font-size: 20px">{{item.price}}</f7-chip> 
          </f7-col>
        </f7-row> -->
        <template #media>
          <img
            v-bind:src="item.img"
            width="80"
            class="avatar"
          />
          <i class="badgeToimg" v-show="item.badge"></i>
        </template>

      <f7-swipeout-actions left>
        <!-- accept button -->
        <f7-swipeout-button
          color="blue" 
          sheet-open=".demo-sheet-swipe-to-close"
          @click='getPrice(item);declineOthers(item)' 
          v-show='item.isShow'
        >
          Accept
        </f7-swipeout-button>
        <!-- chat button -->
        <f7-swipeout-button 
          color="green" 
          href='/chat/' 
          @click="changeChatInfo(item)"
        >
          Chat
        </f7-swipeout-button>
      </f7-swipeout-actions>
      <f7-swipeout-actions right>
        <f7-swipeout-button 
          color='red'
          v-show='item.isShow' 
          @click='declineThisHelper(item)'
        >
          Decline
        </f7-swipeout-button>

        <!-- <f7-swipeout-button 
          delete 
          overswipe 
          confirm-text="Are you sure you want to delete this item?"
        >
          Decline
        </f7-swipeout-button> -->
      </f7-swipeout-actions>

        <f7-sheet
          class="demo-sheet-swipe-to-close"
          style="height:auto; --f7-sheet-bg-color: #fff;"
          swipe-to-close
          backdrop
        >
          <f7-page-content>
            <div class="display-flex padding justify-content-space-between align-items-center">
              <div style="font-size: 18px"><b>Total:</b></div>
              <div style="font-size: 22px"><b>{{price}}</b></div>
            </div>
            <div class="padding-horizontal padding-bottom">
              <f7-button large fill href="/explore/" >Make Payment</f7-button>
            </div>
          </f7-page-content>
        </f7-sheet>

      </f7-list-item>
    </f7-list>

    <f7-list media-list>
      <f7-list-item 
        v-for = "(item,index) in activeList"
        v-bind:key="(item,index)"
        v-bind:title='item.name'
        v-bind:after="item.date" 
        v-bind:text="item.location"
        v-bind:style="item.decline">
        <f7-row>
          <f7-col>
            <f7-icon v-bind:f7="item.star_1" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_2" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_3" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_4" size="22px" class="star"></f7-icon>
            <f7-icon v-bind:f7="item.star_5" size="22px" class="star"></f7-icon>
            <span style="font-size:18px">{{item.grade}}</span>
          </f7-col>
          <f7-col>
          <f7-chip outline color="#263a68" style="padding:10px 40px; font-size: 20px">{{item.price}}</f7-chip> 
          </f7-col>
        </f7-row>
        <template #media>
          <img
            v-bind:src="item.img"
            width="80"
            class="avatar"
          />
          <i class="badgeToimg" v-show="item.badge"></i>
        </template>

      <f7-sheet
          class="demo-sheet-swipe-to-close"
          style="height:auto; --f7-sheet-bg-color: #fff;"
          swipe-to-close
          backdrop
        >
          <f7-page-content>
            <div class="display-flex padding justify-content-space-between align-items-center">
              <div style="font-size: 30px"><b>Total:</b></div>
              <div style="font-size: 35px"><b>{{price}}</b></div>
            </div>
            <div class="padding-horizontal padding-bottom">
              <f7-button large fill href="/explore/" class="payment-button">Make Payment</f7-button>
            </div>
          </f7-page-content>
        </f7-sheet>

        <f7-row>
          <f7-col>
            <f7-button fill style="margin-bottom: 5px; background-color: #6FAAE0" href="/chat/" @click="deleteHelperBadge(item);changeChatInfo(item)">
              <f7-icon f7="chat_bubble" size="20px" class="chat"></f7-icon>
              Chat
            </f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill style="background-color: #6FAAE0">
              <f7-icon f7="phone" size="20px" class="call"></f7-icon>
              Call
            </f7-button>
          </f7-col>
        </f7-row>
        <f7-row>
          <f7-col>
            <f7-button fill style="margin-bottom: 5px; background-color: #42E374" sheet-open=".demo-sheet-swipe-to-close" @click='getPrice(item);declineOthers(item)' v-show='item.isShow'>
              <f7-icon f7="checkmark" size="20px" class="chat" ></f7-icon>
              Accept
            </f7-button>
          </f7-col>
          <f7-col>
            <f7-button fill style="background-color: #DC4722" v-show='item.isShow' @click='declineThisHelper(item)'>
              <f7-icon f7="xmark" size="20px" class="call"></f7-icon>
              Decline
            </f7-button>
          </f7-col>
        </f7-row>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<!--Style-->
<style scoped>
.avatar{
  border-radius: 50%; 
  width: 20vmin;
   height: 20vmin; 
   object-fit: cover; 
   object-position: center;
}
.media-list {
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-text-font-size: 20px;
}
.button{
  --f7-button-font-size: 20px;
  --f7-button-height: 30px;
}
.payment-button{
  --f7-button-font-size: 25px;
  --f7-button-height: 50px;
}
</style>

<script>
import { f7Button,f7 } from 'framework7-vue';
import myBus from '../js/myBus.js';

export default {
  components: {
    f7Button,
    f7,
    myBus,
  },
  data() {
    return {
      sheetOpened: false,
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
                  decline: '',
                  isShow:true,
                  keyword: 'Car repair',
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
                  decline: '',
                  isShow: true,
                  keyword: 'Car repair',
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
                  decline: '',
                  isShow: true,
                  keyword: 'Car repair',
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
                  badge: false,
                  request:"Four walls of the bedroom need to be renovated and painted",
                  decline: '',
                  isShow: true,
                  keyword: 'Paint wall',
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
                  decline: '',
                  isShow: true,
                  keyword: 'Assemble furniture',
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
                  decline: '',
                  isShow: true,
                  keyword: 'Assemble furniture',
                },
      ],
      price: '',
      initialHelpers: [],
      keyword: '',
    }
  },
  mounted() {
    var self = this;
    // get different numbers of helpers
    myBus.on("helpers", data => {
      self.keyword = data;
    });
    //get info from notification page
    myBus.on('sendInfo', data => {      
      self.keyword = data.keyword;
      self.activeList.badge === data.badge;
    });
    },
    computed: {
      activeList() {
        return this.helpers.filter((item) => item.keyword == this.keyword)
      }
    },
  methods: {
    //click chat button to send helper info to chat page
    changeChatInfo(item) {
      myBus.emit('changeChatInfo', item)
    },
    //delete helper's badge
    deleteHelperBadge(item) {
      if (item.badge == true){      
        item.badge = false;
        myBus.emit('deleteHelperBadge',item.badge)
        document.getElementById('badgeOnTab').innerHTML= "1"    
      }
    },
    // get price info from helper list
    getPrice(item) {
      this.price = item.price;
    },
    declineOthers(item) {
      var self = this;

      for(var i=0;i<self.helpers.length;i++){
        if(self.helpers[i].keyword == item.keyword){
          if(self.helpers[i].name !== item.name) {
            self.helpers[i].decline = 'filter：gray; -moz-opacity:.3;opacity:0.3;';
            self.helpers[i].isShow = false;
          }
        }
      };
      f7.dialog.alert('Do you want to pay for it?');
    },
    declineThisHelper(item) {
      var self = this;
      for(var i=0;i<self.helpers.length;i++){
          if(self.helpers[i].name == item.name) {
            self.helpers[i].decline = 'filter：gray; -moz-opacity:.3;opacity:0.3;';
            self.helpers[i].isShow = false;
          }
      }
    }
  }

}
</script>

