<template>
  <f7-page name="home">
    <f7-navbar class="home_navbar" title="Craftive">
    </f7-navbar><br>
    <!-- Extended FAB Center Bottom  -->
    <template #fixed>      
      <f7-fab href="/add-request/" position="center-bottom" text="new" color="#263a68">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      </f7-fab>
    </template>
    <f7-block-title style="text-align:center">
      Check your request status here
    </f7-block-title>

        <f7-button style="display:none" href='/instruction/'>instruction</f7-button>

    <!-- request list -->
    <div class="list media-list">
        <ul>
          <li class="swipeout" v-for="item in list" v-bind:key="item">
            <div class="item-content swipeout-content">
              <div class="item-media"><img v-bind:src="item.img" width="80" height="80" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{item.title}}</div>
                </div>
                <div class="item-subtitle" >To {{item.date}}</div>
                <div class="item-text">
                  {{item.text}}
                </div>
              </div>
            </div>
            <!-- swipeout function -->
            <div class="swipeout-actions-right">
              <a href="#" data-confirm="Are you sure you want to delete this request?"
                class="swipeout-delete">Delete</a>
            </div>
            <!-- button to check offered price -->
            <a class="list-button" >
              <a href="/interested-helper/">
                <f7-icon size= "28px" class="material-icons status-icon" >
                  price_check
                </f7-icon>
                (2)
              </a>
            </a>
          </li>
        </ul>
    </div>
    
    <!-- old version of request list -->
    <f7-list media-list style="display:none">
      <!-- 1st request -->
      <f7-list-item 
        title={{msg}}
        subtitle="To 22/01/2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        swipeout
      >
        <!-- img for request -->
        <template #media>
          <img src="../img/request_img/Car_repair.png" width="80" />
        </template>
        <f7-swipeout-actions right>
          <f7-swipeout-button delete confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
      <!-- check price button -->
      <f7-list-item>
        <f7-button fill>
          <a href="/interested-helper/" style="color:white">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              price_check
              <!-- <f7-badge color="green"></f7-badge> -->
            </f7-icon>
            (2)
          </a>
        </f7-button>
      </f7-list-item>
      <!-- 2nd request -->
      <f7-list-item swipeout
        title="Four walls of the bedroom need to be renovated and painted"
        subtitle="To 31/01/2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!-- img for request -->
        <template #media>
          <img src="../img/request_img/Paint_wall.jpeg" width="80" />
        </template>
        <f7-swipeout-actions right>
          <f7-swipeout-button delete confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
      <!-- check price button -->
      <f7-list-item>
        <f7-button fill>
          <a href="/interested-helper/" style="color:white">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              price_check
              <!-- <f7-badge color="green"></f7-badge> -->
            </f7-icon>
            (2)
          </a>
        </f7-button>
      </f7-list-item>
      <!-- 3rd request -->
      <f7-list-item swipeout
        title="Newly purchased IKEA nightstand needs to be assembled"
        subtitle="To 20/02/2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!-- img for request -->
        <template #media>
          <img src="../img/request_img/Assemble_furniture.jpeg" width="80" height="80" />
        </template>
        <f7-swipeout-actions right>
          <f7-swipeout-button delete confirm-text="Are you sure you want to delete this item?">Delete</f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
      <!-- check price button -->
      <f7-list-item>
        <f7-button fill>
          <a href="/interested-helper/" style="color:white">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              price_check
              <!-- <f7-badge color="green"></f7-badge> -->
            </f7-icon>
            (2)
          </a>
        </f7-button>
      </f7-list-item>
    </f7-list>

    <!-- finished request -->
    <f7-block-title style="text-align:center">
      Request you've already paid
    </f7-block-title> 
    
    <div class="list media-list">
        <ul style="filter：gray; -moz-opacity:.3;opacity:0.3;paddinng;0px">
          <li class="swipeout" v-for="item in list" v-bind:key="item">
            <div class="item-content swipeout-content">
              <div class="item-media"><img v-bind:src="item.img" width="80" />
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">{{item.title}}</div>
                </div>
                <div class="item-subtitle" >{{item.date}}</div>
                <div class="item-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.
                </div>
              </div>
            </div>
            <!-- swipeout function -->
            <div class="swipeout-actions-right">
              <a href="#" data-confirm="Are you sure you want to delete this request?"
                class="swipeout-delete">Delete</a>
            </div>
            <!-- button to check offered price -->
            <a class="list-button" >
              <a href="/interested-helper/">
                <f7-icon size= "28px" class="material-icons status-icon" >
                  price_check
                </f7-icon>
                (2)
              </a>
            </a>
          </li>
        </ul>
    </div>
   

    
    <!-- Hide initial content from template, change display property from "none" to "block" to show it -->
    <f7-block style="display:none">
      <f7-block-title>Navigation</f7-block-title>
      <f7-list>
        <f7-list-item link="/about/" title="About"></f7-list-item>
        <f7-list-item link="/form/" title="Form"></f7-list-item>
      </f7-list>

      <f7-block-title>Modals</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button fill popup-open="#my-popup">Popup</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill login-screen-open="#my-login-screen">Login Screen</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>

      <f7-block-title>Panels</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button class="request" fill panel-open="left">Left Panel</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill panel-open="right">Right Panel</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>

      <f7-list>
        <f7-list-item
          title="Dynamic (Component) Route"
          link="/dynamic-route/blog/45/post/125/?foo=bar#about"
        ></f7-list-item>
        <f7-list-item
          title="Default Route (404)"
          link="/load-something-that-doesnt-exist/"
        ></f7-list-item>
        <f7-list-item
          title="Request Data & Load"
          link="/request-and-load/user/123456/"
        ></f7-list-item>
      </f7-list>
    </f7-block>
    
  </f7-page>
</template>

<style scoped>
  #bg_img {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    opacity:0.25;
    filter:alpha(opacity=25);
  }
  h1 {
    margin: 20px;
  }
  h2 {
    margin: 20px 40px;
  }
  .navbar {
    font-size: 30px;
    height: 80px;
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
              { title:"Audi A6's front brake pads are broken and need repair",
                keyword: 'Car repair',
                address: '81000, Munich',
                date:'22/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Car_repair.png",
              },
              { title:"Four walls of the bedroom need to be renovated and painted",
                keyword: 'Paint wall',
                address: '81010, Munich',
                date:'23/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Paint_wall.jpeg",
              },
              { title:"Newly purchased IKEA nightstand needs to be assembled",
                keyword: 'Assemble furniture',
                address: '81111, Munich',
                date:'24/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Assemble_furniture.jpeg",
              }
            ],
      // new added request data
      inputValue:{
        title:"",
        keyword: '',
        address: '',
        date:'',
        text: "",
        img: "../img/request_img/Car_repair.png",
      },
    }
    
  },
  mounted() {
    myBus.on("newRequest", data => {
      // this.inputValue = data;
      this.list.unshift(data);
      console.log(data);
    });
  },
  // onUnmounted() {
  //   myBus.off('aMsg');
  // },

  methods: {

    add: function() {
      this.list.push(this.inputValue);
    },
    openVerticalButtons() {
      f7.dialog
        .create({
          title: 'Choose one function',
          buttons: [
            {
              text: 'Add a request',
              bold: true,
              close: true,
              onClick: () => {
                this.f7router.navigate({name:'add-request'})
              }
            },
            {
              text: 'View my requests',
              bold: true,
              close: true,
              onClick: () => {
                  this.f7router.navigate({name:'my-request'})
                  }
              
            },
          ],
          verticalButtons: true,
        })
        .open();
    },
  },
};
</script>