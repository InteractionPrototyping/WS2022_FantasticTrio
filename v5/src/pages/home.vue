<template>
  <f7-page name="home" >
    <f7-navbar class="home_navbar" title="Craftive">
    </f7-navbar><br>
    <!-- Extended FAB Center Bottom  -->
    <template #fixed>      
      <f7-fab href="/add-request/" position="center-bottom" text="new" color="#263a68">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      </f7-fab>
    </template>

    <!-- request list title -->
    <f7-block-title style="text-align:center;color:#263A68;font-weight:bold">
      Check your request status here
    </f7-block-title>

    <!-- request list -->
    <div class="list media-list">
        <ul>
          <li class="swipeout" v-for="item in list" v-bind:key="item">
            <div class="item-content swipeout-content">
              <div class="item-media" ><img v-bind:src="item.img" width="90" height="90" style="padding-top:10px" />
              </div>
              <div class="item-inner" >
                <div class="item-title-row">
                  <div class="item-title" style="font-size:25px">{{item.title}}</div>
                </div>
                <div class="item-subtitle" style="font-size:18px">Until {{item.date}}</div>
                <div class="item-text">
                  {{item.text}}
                </div>
              </div>
            </div>
            <!-- button to check offered price -->
            <f7-row style="margin:10px 15px">
              <f7-col>
                <f7-button fill @click="checkHelper(item)" v-bind:href="item.link">
                  <f7-icon size= "28px" class="material-icons status-icon" >
                    price_check
                  </f7-icon>
                  INTERESTED ({{item.interested}})
                </f7-button>
              </f7-col>
            </f7-row>
            <!-- swipeout function -->
            <div class="swipeout-actions-right">
              <a href="#" data-confirm="Are you sure you want to delete this request?"
                class="swipeout-delete">Delete</a>
            </div>
          </li>
        </ul>
    </div>
    
    <!-- finished request -->
    <f7-block-title style="text-align:center;color:#263A68;font-weight:bold">
      Request you've already paid
    </f7-block-title> 
    
    <div class="list media-list">
        <ul style="filter：gray; -moz-opacity:.3;opacity:0.3;paddinng;0px">
          <li class="swipeout" v-for="item in finishedList" v-bind:key="item">
            <div class="item-content swipeout-content">
              <div class="item-media" ><img v-bind:src="item.img" width="90" height="90" style="padding-top:10px" />
              </div>
              <div class="item-inner" >
                <div class="item-title-row">
                  <div class="item-title" style="font-size:25px">{{item.title}}</div>
                </div>
                <div class="item-subtitle" style="font-size:18px">Until {{item.date}}</div>
                <div class="item-text">
                  {{item.text}}
                </div>
              </div>
            </div>
            <!-- button to check offered price -->
            <a class="list-button" style="border-bottom:0.5px" @click="checkHelper(item)">
              <a v-bind:href="item.link" style="font-weight:bold;">
                <f7-icon size= "28px" class="material-icons status-icon" >
                  price_check
                </f7-icon>
                INTERESTED ({{item.interested}})
              </a>
            </a>
          </li>
        </ul>
    </div>
       
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
import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7Button, f7Row,f7 } from 'framework7-vue';
import myBus from '../js/myBus.js';
export default {
  props: {
      f7route: Object,
      f7router: Object,
    },
  components: {
      f7Navbar,
      f7Page,
      f7BlockTitle,
      f7Block,
      f7Button,
      f7Row,
      f7,
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
                img: "../img/request_img/Car_repair.jpeg",
                interested: '3',
                link:'/interested-helper/'
              },
              { title:"Four walls of the bedroom need to be renovated and painted",
                keyword: 'Paint wall',
                address: '81010, Munich',
                date:'23/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Paint_wall.jpeg",
                interested: '1',
                link:'/interested-helper/'
              },
              { title:"Newly purchased IKEA nightstand needs to be assembled",
                keyword: 'Assemble furniture',
                address: '81111, Munich',
                date:'24/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Assemble_furniture.jpeg",
                interested: '2',
                link:'/interested-helper/'
              }
            ],
      finishedList:[
              { title:"Four walls of the bedroom need to be renovated and painted",
                keyword: 'Paint wall',
                address: '81010, Munich',
                date:'23/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Paint_wall.jpeg",
                interested: '1',
                link:'/interested-helper/'
              },
              { title:"Four walls of the bedroom need to be renovated and painted",
                keyword: 'Paint wall',
                address: '81010, Munich',
                date:'23/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Paint_wall.jpeg",
                interested: '1',
                link:'/interested-helper/'
              },
              { title:"Four walls of the bedroom need to be renovated and painted",
                keyword: 'Paint wall',
                address: '81010, Munich',
                date:'23/01/2022',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.',
                img: "../img/request_img/Paint_wall.jpeg",
                interested: '1',
                link:'/interested-helper/'
              },
      ]
    }
  },
  mounted() {
    myBus.on("newRequest", data => {
      this.list.unshift(data);
    });
  },

  methods: {
    // send number of helpers to "interested helper" page 
    checkHelper(item) {
      if (item.interested > 0) {
        myBus.emit("helpers", item.keyword);
      } else {
        // open Alert when no one offers price
        f7.dialog.alert('No one has offered you a price.');

      }
    },
  },
};
</script>

