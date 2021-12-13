<template>
  <f7-page name="home">
    <f7-navbar class="home_navbar" title="Craftive"></f7-navbar><br>
    <img id="bg_img" src="../img/request_img/Background_img.jpeg">

    <!-- Page content-->
    <f7-block>
      <!-- description of this app -->
      <h1 style="text-align: center">Need a handyman or help with a project?</h1>
      <h2 style="text-align: center">Post your request or get inspired by other users' projects in the Explore function!</h2>
    </f7-block>

    <f7-block >
      <!-- <f7-button fill raised tab-link="#view-add-request">Request</f7-button> -->
      <f7-button fill popover-open=".popover-menu">Request</f7-button>
      <!-- <f7-button fill raised @click="openVerticalButtons">Request</f7-button> -->
    </f7-block>

    <f7-block >
      <f7-button fill href="/explore/">Explore</f7-button>
    </f7-block>

    <f7-popover class="popover-menu">
      <!-- <f7-block-title style="text-align:center">Choose one function</f7-block-title> -->
      <f7-list>
        <f7-list-button bold href="/add-request/" popover-close title="Add Request"></f7-list-button>
        <f7-list-button bold href="/my-request/" popover-close title="View my Request"></f7-list-button>
      </f7-list>
    </f7-popover>
    
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
  /* .home_navbar {
    opacity:0.3;
    filter:alpha(opacity=30);
  } */
  #bg_img {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 100%;
    opacity:0.25;
    filter:alpha(opacity=25);
  }
  .button {
    height: 80px;
    font-size: 30px;
    margin: 0 20px 0 20px;
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
export default {
  components: {
    f7Button,
  },
  methods: {
    openVerticalButtons() {
      f7.dialog
        .create({
          title: 'Choose one function',
          buttons: [
            {
              text: 'Add a request',
              bold: true,
              onClick: function() {f7router.navigate('/add-request/', {
                reloadCurrent:true,
                animate: true,
              })}
            },
            {
              text: 'View my requests',
              bold: true,
            },
          ],
          verticalButtons: true,
        })
        .open();
    },
  },
};
</script>