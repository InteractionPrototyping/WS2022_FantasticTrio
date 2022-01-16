<template>
  <f7-page name="my_request">
    <f7-navbar title="Craftive" style="font-size:20px" ></f7-navbar>

    <template #fixed>
      <!-- Extended FAB Center Bottom (Red) -->
      <f7-fab href="/add-request/" position="center-bottom" text="new" color="#263a68">
        <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      </f7-fab>
    </template>
    <!-- request list  -->
    <f7-block-title style="text-align:center; font-size: 20px">
      Check your request status here
    </f7-block-title>

    <f7-list media-list>
      <!-- 1st request -->
      <f7-list-item swipeout
        title="Audi A6's front brake pads are broken and need repair"
        subtitle="To 22/01/2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!-- img for request -->
        <template #media>
          <img src="../img/request_img/Car_repair.jpeg" width="80" />
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



      <!-- old version -->
      <!-- <f7-list-item
        title="Newly purchased IKEA nightstand needs to be assembled"
      >
        <f7-row>
          <f7-col>
            <f7-chip outline color="#263a68" text="#Assembl furniture"></f7-chip>
            <div style="color:grey; font-size: 18px">Until 31/12</div>
          </f7-col>
          <f7-col>
            <f7-button fill>
              <a href="/interested-helper/" style="color:white; font-size:15px">
                <f7-icon size="30px" class="material-icons status-icon" style="color:white;">
                  price_check
                </f7-icon>
                (0)
              </a>
            </f7-button>
          </f7-col>
        </f7-row>
        <template #media>
          <img src="../img/request_img/Assemble_furniture.jpeg" width="80" height="80" />
        </template>
      </f7-list-item> -->
    </f7-list>


    <!-- Requests you´ve already paid -->
    <f7-block-title style="text-align:center; font-size: 20px">
      Requests you´ve already paid
    </f7-block-title>    
    <f7-list media-list style="filter：gray; -moz-opacity:.3;opacity:0.3;paddinng;0px">
      <!-- 1st request -->
      <!-- 1st request -->
      <f7-list-item swipeout
        title="Audi A6's front brake pads are broken and need repair"
        subtitle="To 22/01/2022"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
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
            (0)
          </a>
        </f7-button>
      </f7-list-item>
    </f7-list>

    <!-- <f7-list accordion-list>
      <f7-list-item accordion-item title="Finished request">
        <f7-accordion-content>
          <f7-list media-list style="filter：gray; -moz-opacity:.3;opacity:0.3;paddinng;0px">
                <f7-list-item
                  title="Audi A6's front brake pads are broken and need repair"
                    after="To 31/12"
                    text="&#8982; 81548,Munich"
                >
                  <f7-row>
                    <f7-col>
                      <f7-chip outline color="#263a68" text="#Car repair"></f7-chip>
                    </f7-col>
                    <f7-col>
                      <f7-button fill>
                        <a href="/interested-helper/" style="color:white">
                          <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
                            price_check
                          </f7-icon>
                          (10&#8364)
                        </a>
                      </f7-button>
                    </f7-col>
                  </f7-row>
                  <template #media>
                    <img src="../img/request_img/Car_repair.png" width="80" />
                  </template>
                </f7-list-item>
          </f7-list>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list> -->


  </f7-page>
</template>

<style>
  .myRequest {
    margin:0;
    padding:0;
  }
  .status-icon {
    margin:11px 0 11px 0;
  }
  .buttonOfIcon {
    background-color:#2d4066;

    margin:0;
    height:50px;
    text-align:center;
  }
  .listOfButton {
    width:15%;
    margin:0;
    display:inline-block;
    padding:0px;
    position:relative;
    bottom: 11px;
  }
</style>

 <!-- delete those alters? -->
<script>
  import { f7Navbar, f7Page, f7BlockTitle, f7Block, f7Button, f7Row, f7 } from 'framework7-vue';
export default {
  components: {
    f7Navbar,
    f7Page,
    f7BlockTitle,
    f7Block,
    f7Button,
    f7Row,
  },
  methods: {
    openAlert() {
      f7.dialog.alert(
        'No one has offered you a price now! <br> Try to find some suitable helpers:)',
        'Craftive',
      );
    },
    openConfirm() {
      f7.dialog.confirm(
        'No one has offered you a price now! <br> Try to find some suitable helpers:)',
        () => {
        f7router.navigate('/suitable-helper/',{
          reloadCurrent:true,
          animate: true,
        });
      });
    },
  },
};
</script>


