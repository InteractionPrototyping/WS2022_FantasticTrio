<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <!-- <f7-navbar large :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Craftive</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
      <f7-nav-title-large>Craftive</f7-nav-title-large>
    </f7-navbar> -->

    <f7-navbar large :sliding="false">
      <f7-nav-title sliding style="text-align:center">
        Craftive
        </f7-nav-title>
      <f7-nav-title-large style="text-align:center">
        Craftive
      </f7-nav-title-large>
    </f7-navbar>


    <!-- Page content-->
    <f7-block >
      <!-- description of this app -->
      <p style="text-align: center">Need a handyman or help with a project?</p>

      <p style="text-align: center">Post your request or get inspired by other users' projects in the Explore function!</p>
    </f7-block>

    <f7-block >
      <!-- <f7-button fill raised tab-link="#view-add-request">Request</f7-button> -->
      <f7-button fill raised href="/choose-request-function/">Request</f7-button>
    </f7-block>

    <f7-block >
      <f7-button fill raised >Explore </f7-button>
    </f7-block>
    
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
            <f7-button fill raised popup-open="#my-popup">Popup</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill raised login-screen-open="#my-login-screen">Login Screen</f7-button>
          </f7-col>
        </f7-row>
      </f7-block>

      <f7-block-title>Panels</f7-block-title>
      <f7-block strong>
        <f7-row>
          <f7-col width="50">
            <f7-button fill raised panel-open="left">Left Panel</f7-button>
          </f7-col>
          <f7-col width="50">
            <f7-button fill raised panel-open="right">Right Panel</f7-button>
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