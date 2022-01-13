<template>
  <f7-app v-bind="f7params">
    <!-- Left panel with cover effect-->
    <f7-panel left cover theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block>Left panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Right panel with reveal effect-->
    <f7-panel right reveal theme-dark>
      <f7-view>
        <f7-page>
          <f7-navbar title="Right Panel"></f7-navbar>
          <f7-block>Right panel content goes here</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Views/Tabs container -->
    <f7-views tabs class="safe-areas">
      <!-- Tabbar for switching views-tabs -->
      <f7-toolbar tabbar labels bottom>
        <f7-link
          tab-link="#view-home"
          tab-link-active
          icon-ios="f7:list_dash"
          icon-aurora="f7:list_dash"
          icon-md="material:list"
          text="Request"
        ></f7-link>


        <f7-link
          tab-link="#view-explore"
          icon-ios="f7:lightbulb_fill"
          icon-aurora="f7:lightbulb_fill"
          icon-md="material:lightbulb"
          text="Explore"
        >
        </f7-link>

        <f7-link tab-link='#view-notification'>
          <f7-icon ios="f7:bell_fill" aurora="f7:bell_fill" md="material:notifications">
            <f7-badge color="green">2</f7-badge>
          </f7-icon>
          <span class="tabbar-label">Notification</span>
        </f7-link>

        <f7-link
          tab-link="#view-own-profile"
          icon-ios="f7:person_fill"
          icon-aurora="f7:gear"
          icon-md="material:person"
          text="Profile"
        ></f7-link>
      </f7-toolbar>

      <!-- Your main view/tab, should have "view-main" class. It also has "tab-active" class -->
      <f7-view id="view-home" main tab tab-active url="/"></f7-view>

      <!-- Notification View -->
      <f7-view
        id="view-notification"
        name="notification"
        tab
        url="/notification/"
      ></f7-view>

      <!-- Profile View -->
      <f7-view
        id="view-own-profile"
        name="own-profile"
        tab
        url="/own-profile/"
      ></f7-view>

      <!-- Add-request View -->
      <f7-view
        id="view-add-request"
        name="add-request"
        tab
        url="/add-request/"
      ></f7-view>

      <!-- Suitable-helper View -->
      <f7-view
        id="view-suitable-helper"
        name="suitable-helper"
        tab
        url="/suitable-helper/"
      ></f7-view>

      <!-- My-request View -->
      <f7-view
        id="view-my-request"
        name="my-request"
        tab
        url="/my-request/"
      ></f7-view>

      <!-- Explore View -->
      <f7-view id="view-explore" name="explore" tab url="/explore/"></f7-view>
      <!-- Project View -->
      <f7-view id="view-project" name="project" tab url="/project/"></f7-view>
      <!-- Comment View -->
      <f7-view id="view-comment" name="comment" tab url="/comment/"></f7-view>
      <!-- Interested-Helper View -->
      <f7-view
        id="view-interested-helper"
        name="interested-helper"
        tab url="/interested-helper/"
      ></f7-view>
      <!-- Chat View -->
      <f7-view id="view-chat" name="chat" tab url="/chat/"></f7-view>
      <!--Review View-->
      <f7-view id="view-review" name="review" tab url="/review/"></f7-view>
      <!--Profile Helper View-->
      <f7-view id="view-profile-helper" name="profile-helper" tab url="/profile-helper/"></f7-view>
      <!--Profile Gallery View-->
      <f7-view id="view-profile-gallery" name="profile-gallery" tab url="/profile-gallery/"></f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup
      id="my-popup"
      swipe-to-close="true"
      swipe-handler=".swipe-handler"
    >
      <f7-view>
        <f7-page>
          <f7-navbar title="Popup">
            <f7-nav-right>
              <f7-link popup-close>Close</f7-link>
            </f7-nav-right>
          </f7-navbar>
          <f7-block>
            <p>Popup content goes here.</p>
            <!-- <f7-block >
                  <f7-button fill raised href="/add-request/" popup-close>Add a request</f7-button>
                </f7-block>

                <f7-block >
                  <f7-button fill raised href="/my-request/" popup-close>View my requests </f7-button>
                </f7-block> -->

            <f7-list>
              <f7-list-item
                link="/add-request/"
                title="Add a request"
              ></f7-list-item>
              <f7-list-item
                link="/my-request/"
                title="View my requests"
              ></f7-list-item>
            </f7-list>
          </f7-block>
        </f7-page>
      </f7-view>
    </f7-popup>

    <f7-login-screen id="my-login-screen">
      <f7-view>
        <f7-page login-screen>
          <f7-login-screen-title>Login</f7-login-screen-title>
          <f7-list form>
            <f7-list-input
              type="text"
              name="username"
              placeholder="Your username"
              v-model:value="username"
            ></f7-list-input>
            <f7-list-input
              type="password"
              name="password"
              placeholder="Your password"
              v-model:value="password"
            ></f7-list-input>
          </f7-list>
          <f7-list>
            <f7-list-button
              title="Sign In"
              @click="alertLoginData"
            ></f7-list-button>
            <f7-block-footer>
              Some text about login information.<br />Click "Sign In" to close
              Login Screen
            </f7-block-footer>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-login-screen>
  </f7-app>
</template>
<script>
import { ref, onMounted } from "vue";
import { f7, f7ready } from "framework7-vue";
import { getDevice } from "framework7/lite-bundle";
import cordovaApp from "../js/cordova-app.js";

import routes from "../js/routes.js";
import store from "../js/store";

export default {
  setup() {
    const device = getDevice();
    // Framework7 Parameters
    const f7params = {
      name: "Craftive", // App name
      theme: "auto", // Automatic theme detection
      view: {
        pushState: true,
        history: true,
        pushStateSeparator: "",
      },

      id: "io.framework7.myapp", // App bundle ID
      // App store
      store: store,
      // App routes
      routes: routes,

      // Input settings
      input: {
        scrollIntoViewOnFocus: device.cordova && !device.electron,
        scrollIntoViewCentered: device.cordova && !device.electron,
      },
      // Cordova Statusbar settings
      statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
      },
    };
    // Login screen data
    const username = ref("");
    const password = ref("");

    const alertLoginData = () => {
      f7.dialog.alert(
        "Username: " + username.value + "<br>Password: " + password.value,
        () => {
          f7.loginScreen.close();
        }
      );
    };
    onMounted(() => {
      f7ready(() => {
        // Init cordova APIs (see cordova-app.js)
        if (device.cordova) {
          cordovaApp.init(f7);
        }

        // Call F7 APIs here
      });
    });

    return {
      f7params,
      username,
      password,
      alertLoginData,
    };
  },
};
</script>
