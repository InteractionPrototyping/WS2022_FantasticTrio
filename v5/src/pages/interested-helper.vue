<template>
  <f7-page name="interested-helper">
    <!-- Navbar area -->
    <f7-navbar title="Interested Helper" back-link="Back" style="font-size: 20px"></f7-navbar>
    <!-- Helper's information -->

    <!-- <div class="block-title">Request Info</div> -->
    <!-- <div class="list media-list inset">
        <ul>
          <li>
            <a class=" item-content">
              <div class="item-media"><img v-bind:src="requestInfo.img"
                  width="44" height='44' />
                  </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{requestInfo.title}}</div>
                </div>
                <div class="item-subtitle">{{requestInfo.date}}</div>
              </div>
            </a>
          </li>
        </ul>
    </div> -->
          
    <f7-list media-list>
      <f7-list-item 
        v-for = "item in helpers"
        v-bind:key="item"
        v-bind:title='item.name'
        v-bind:after="item.date" 
        v-bind:text="item.location">
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
          <!-- In data-sheet attribute we specify CSS selector of sheet we need to open-->
          <!-- <p><a class="button button-fill sheet-open" href="#" data-sheet=".my-sheet">{{item.price}}</a></p> -->
          <p><f7-button fill sheet-open=".demo-sheet-swipe-to-close" @click='getPrice(item)'>
            {{item.price}}
            </f7-button>
          </p>
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
              <div style="font-size: 18px"><b>Total:</b></div>
              <div style="font-size: 22px"><b>{{price}}</b></div>
            </div>
            <div class="padding-horizontal padding-bottom">
              <f7-button large fill href="/">Make Payment</f7-button>
            </div>
          </f7-page-content>
        </f7-sheet>

<!-- <f7-row>
  <f7-col>
    <f7-list-button >
      <f7-icon f7="chat_bubble_fill" size="20px" class="chat"></f7-icon>
      CHAT
    </f7-list-button>
  </f7-col>
  <f7-col>
    <f7-list-button >
      <f7-icon f7="phone_fill" size="20px" class="call"></f7-icon>
      CALL
    </f7-list-button>
  </f7-col>
</f7-row> -->
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
      </f7-list-item>
    </f7-list>
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
.media-list {
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-text-font-size: 20px;
}
.button{
  --f7-button-font-size: 20px;
  --f7-button-: 10px;
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
      requestInfo: {
                title:"",
                keyword: '',
                address: '',
                date:'',
                text: '',
                img: "",
                interested: '',
                link:''
      },
      // inittial helper data
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
                  badge: true,
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
                },
                {
                  name: 'Sarah Müller',
                  img: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
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
                },
      ],
      price: '',
    }
  },
  mounted() {
    myBus.on("helpers", data => {
      let num = parseInt(data);
      this.helpers.splice(num,7 - num);
    });
    myBus.on('requestInfo',data => {
      this.requestInfo = data;
    });
  },
  methods: {
    //click chat button to send helper info to chat page
    changeChatInfo(item) {
      myBus.emit('changeChatInfo', item)
    },
    //delete helper's badge
    deleteHelperBadge(item) {
      item.badge = false;
      myBus.emit('deleteHelperBadge',item.badge)
      console.log(item.badge)
      document.getElementById('badgeOnTab').innerHTML= "1"
    },
    // send request info to home page
    payment() {
      myBus.emit('payment', requestInfo);
    },
    // get price info from helper list
    getPrice(item) {
      this.price = item.price;
    }
  }

}
</script>

