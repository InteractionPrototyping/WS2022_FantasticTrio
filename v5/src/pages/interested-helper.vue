<template>
  <f7-page name="interested-helper">
    <!-- Navbar area -->
    <f7-navbar title="Interested Helper" back-link="Back" style="font-size: 20px"></f7-navbar>
    
    <f7-block-title style="text-align:center;color:#263A68;font-weight:bold">
      Swipe to decline or accept the offer
    </f7-block-title>


    <div class="list media-list">
        <ul>
          <li class="swipeout" v-for="(item,index) in activeList" v-bind:key="(item,index)" v-bind:style="item.decline">
            <!-- list content -->
            <div class="item-content swipeout-content">
              <div class="item-media" ><img v-bind:src="item.img" width="80" class="avatar" />
              </div>
              <div class="item-inner" >
                <div class="item-title-row">
                  <div class="item-title" style="font-size:25px">{{item.name}}</div>                
                  <div class="item-after" style='font-size:20px;'>{{item.price}}</div>
                </div>
                <div class="item-subtitle" style="font-size:18px">{{item.location}}</div>
                <div class="item-text">
                  &#9733; {{item.grade}}
                </div>
              </div>
            </div>
            <!-- chat and call button list -->
            <f7-row style="margin:10px 15px"> 
              <f7-col>
                <f7-button fill @click="changeChatInfo(item)" href='/chat/'>
                    <f7-icon f7="chat_bubble" size="20px" class="chat"></f7-icon>
                    CHAT
                </f7-button>
              </f7-col>
              <f7-col>
                <f7-button fill >
                    <f7-icon f7="phone" size="20px" class="chat"></f7-icon>
                    PHONE
                </f7-button>
              </f7-col>
            </f7-row>
            <!-- swipeout function -->
            <f7-swipeout-actions left>
              <!-- accept button -->
              <f7-swipeout-button
                color="green" 
                sheet-open=".demo-sheet-swipe-to-close"
                @click='getPrice(item);declineOthers(item)' 
                v-show='item.isShow'
              >
                Accept
              </f7-swipeout-button>
            </f7-swipeout-actions>
            <!-- decline button -->
            <f7-swipeout-actions right>
              <f7-swipeout-button 
                color='red'
                v-show='item.isShow' 
                @click='declineThisHelper(item)'
              >
                Decline
              </f7-swipeout-button>
            </f7-swipeout-actions>
          </li>
        </ul>
    </div>
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
.item-after{
  font-size:20px;
  color:#263A68;
  border: 1px solid #263A68;
  padding: 0px 30px;
  border-radius: 20px;
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
                  price: '12 €',
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
                  price: '10 €',
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
                  price: '15 €',
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
                  price: '10 €',
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
                  price: '18 €',
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
                  price: '20 €',
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
    // get price info from helper list
    getPrice(item) {
      this.price = item.price;
    },
    // click accept button to decline other helpers
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
    //click decline button to decline this helper
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

