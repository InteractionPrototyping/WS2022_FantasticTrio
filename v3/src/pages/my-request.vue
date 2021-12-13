<template>
  <f7-page name="my_request">
    <f7-navbar title="My Request" back-link="Back" back-link-url="/suitable-helper/"></f7-navbar>

    <!-- Template from List View component: Media List -->
      
    <f7-block-title style="text-align:center">Check your request status here</f7-block-title>
      <!-- 1st request -->
      <f7-list class="myRequest" media-list style="width:85%;display: inline-block">
        <f7-list-item
          title="Change Brake"
          after="To 31/12"
          text="&#8982; 81548,Munich"
          style="padding:0"
        >
        <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
          <template #media>
            <img src="../img/request_img/Car_repair.png" width="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 2 functions and status -->
      <f7-block class="listOfButton">
        <p class="buttonOfIcon interested">
          <a href="/suitable-helper/">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              person_search
            </f7-icon>
          </a>
        </p>
        <p @click="openAlert" class="buttonOfIcon interested">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white">
              price_check
              </f7-icon>
        </p>
      </f7-block>

      <!-- 2nd request -->
      <f7-list class="myRequest not-1st" media-list style="width:85%;display: inline-block;">
        <f7-list-item
          title="Paint wall"
          after="To 31/12"
          text="&#8982; 81548,Munich"
        >
        <f7-chip outline color="#007aff" text="#Paint wall"></f7-chip>
          <template #media>
            <img src="../img/request_img/Paint_wall.jpeg" width="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 2 functions and status -->
      <f7-block class="listOfButton not-1st">
        <p class="buttonOfIcon interested">
          <a href="/suitable-helper/">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              person_search
            </f7-icon>
          </a>
        </p>
        <p  class="buttonOfIcon interested">
            <a href="/interested-helper/">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              price_check
              <f7-badge color="green">2</f7-badge>
            </f7-icon>
          </a>
        </p>
      </f7-block>

      <!-- 3rd request -->
      <f7-list class="myRequest" media-list style="width:85%;display: inline-block">
        <f7-list-item
          title="Assemble furnituer"
          after="To 31/12"
          text="&#8982; 81548,Munich"
        >
        <f7-chip outline color="#007aff" text="#Assemble furniture"></f7-chip>
          <template #media>
            <img src="../img/request_img/Assemble_furniture.jpeg" width="80" height="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 2 functions and status -->
      <f7-block class="listOfButton">
        <p class="buttonOfIcon interested">
          <a href="/suitable-helper/">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              person_search
            </f7-icon>
          </a>
        </p>
        <p  class="buttonOfIcon interested">
          <a href="/interested-helper/">
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white">
              price_check
              <f7-badge color="green">2</f7-badge>
              </f7-icon>
          </a>
        </p>
      </f7-block>

      


      <!-- finished request -->
      <f7-block-title style="text-align:center">
        Finished requests
      </f7-block-title>
      <!-- make list to be gray -->
      <f7-block style="filter：gray; -moz-opacity:.3;opacity:0.3;paddinng;0px">
      
      <!-- 2nd request -->
      <f7-list class="myRequest" media-list style="width:85%;display: inline-block;">
        <f7-list-item
          title="Change Brake"
          after="To 31/12"
          text="&#8982; 81548,Munich"
          style="padding:0"
        >
        <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
          <template #media>
            <img src="../img/request_img/Car_repair.png" width="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 2 functions and status -->
      <f7-block class="listOfButton ">
        <p class="buttonOfIcon interested">
          <!-- <a href="/suitable-helper/"> -->
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              person_search
            </f7-icon>
          <!-- </a> -->
        </p>
        <p class="buttonOfIcon interested">
            <!-- <a href="/interested-helper/"> -->
            <f7-icon size= "28px" class="material-icons status-icon" style="color:white;">
              price_check
              <!-- <f7-badge color="green">2</f7-badge> -->
            </f7-icon>
          <!-- </a> -->
        </p>
      </f7-block>

      </f7-block>

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
    background-color:#007aff;
    margin:0;
    /* padding:10px 0 10px 0; */
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
  .finished {
    background-color:#aed4fd;
  }
</style>

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


