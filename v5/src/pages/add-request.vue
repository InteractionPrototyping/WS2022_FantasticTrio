<template>
  <f7-page
    name="add-request"
    swipe-to-close
    @page:beforeremove="onPageBeforeRemove"
    @page:beforeout="onPageBeforeOut"
  >
    <!--Navbar area-->
    <f7-navbar
      title="Add Request"
      back-link="Back"
      style="font-size: 20px"
    ></f7-navbar>

    <!-- Input field -->
    <f7-list no-hairlines-md>
      <!-- input title -->
      <f7-list-input
        label="Title"
        type="text"
        placeholder="Enter the title of your project here..."
        info=""
        required
        validate
        clear-button
        v-model:value="inputValue.title"
      >
      </f7-list-input>

      <!-- use of smart select component to choose keywords -->
      <f7-list-item
        title="Keyword"
        smart-select
        :smart-select-params="{
          openIn: 'popup',
          searchbar: true,
          searchbarPlaceholder: 'Search keyword',
        }"
      >
        <select name="keyword">
          <!--options to select between-->
                      <!-- label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/car.svg'>Cars, Vehicles" -->
          <optgroup
            label="Cars, Vehicles"
          >
            <option value="Car Repair" selected>Car Repair</option>
            <option value="Car Tuning">Car Tuning</option>
            <option value="Vehicle lettering">Vehicle lettering</option>
            <option value="Vehicle cleaning">Vehicle cleaning</option>
            <option value="Other car services">Other car services</option>
          </optgroup>
          <optgroup
            label="House, Exterior work"
          >
            <option value="Demolition">Demolition</option>
            <option value="Exterior construction">Exterior construction</option>
            <option value="Excavation work">Excavation work</option>
            <option value="Building drying">Building drying</option>
            <option value="Roofing">Roofing</option>
            <option value="Other exterior work">Other exterior work</option>
          </optgroup>
          <optgroup
            label="House, Interior work"
          >
            <option value="Bathroom renovation">Bathroom renovation</option>
            <option value="Floor laying">Floor laying</option>
            <option value="Ceiling work">Ceiling work</option>
            <option value="Clearing out">Clearing out</option>
            <option value="Painting works">Painting works</option>
            <option value="Other interior work">Other interior work</option>
          </optgroup>
          <optgroup
            label="Gardening"
          >
            <option value="Tree felling">Tree felling</option>
            <option value="Hedge trimming">Hedge trimming</option>
            <option value="Garden pond">Garden pond</option>
            <option value="Lawn mowing">Lawn mowing</option>
            <option value="Other gardening">Other gardening</option>
          </optgroup>
        </select>
      </f7-list-item>

      <!-- input post code -->
      <f7-list-input
        label="Post code"
        type="text"
        placeholder="Click on the right icon to get location..."
        required
        validate
        v-model:value="inputValue.address"
      >
        <!-- Add my_location icon to automatically get locator information -->
        <template #content-end>
          <f7-icon
            style="position: relative; right: 16px; color: #263a68"
            class="material-icons status-icon"
            @click="locatorButtonPressed"
          >
            my_location
          </f7-icon>
        </template>
      </f7-list-input>

      <!-- input deadline -->
      <f7-list-input
        label="Request deadline"
        type="date"
        placeholder="Please choose..."
        required
        validate
        :calendar-params="{ dateFormat: 'dd/MM/yyyy' }"
        v-model:value="inputValue.date"
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <!-- input description -->
      <f7-list-input
        label="Description"
        type="textarea"
        required
        validated
        placeholder="Insert your description here..."
        v-model:value="inputValue.text"
      >
      </f7-list-input>
      <!--Option to upload photo-->
      <div class="list no-hairlines-md">
        <ul>
          <li class="item-content item-input">
            <div class="item-inner">
              <div class="item-title item-label">Photo</div>
              <div class="item-input-wrap">
                <input type="file" @change="upload" placeholder="Your name" />
                <span class="input-clear-button"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </f7-list>

    <!-- submit button -->
    <f7-block>
      <f7-button fill raised @click="sendMsg" href="/">Submit</f7-button>
    </f7-block>
  </f7-page>
</template>

<style scoped>
/* Style in this page */
.no-hairlines-md {
  --f7-label-font-size: 25px;
  --f7-input-font-size: 18px;
  --f7-label-text-color: #263a68;
}
.list {
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-after-font-size: 18px;
  --f7-list-item-title-text-color: #263a68;
}
.button-raised {
  --f7-button-height: 50px;
  --f7-button-font-size: 25px;
}
</style>

<script>
import { f7Navbar, f7Page, f7Block, f7Button, f7, theme } from "framework7-vue";
import myBus from "../js/myBus.js";
import axios from "axios";
export default {
  components: {
    f7Navbar,
    f7Page,
    f7Block,
    f7Button,
  },
  props: {
    f7route: Object,
    f7router: Object,
  },
  data() {
    return {
      // initial input data
      inputValue: {
        title: "",
        keyword: "",
        address: "",
        date: "",
        text: "",
        img: "data:image/png;base64,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",
        interested: "0",
        link: "",
      },
    };
  },
  methods: {
    //upload img and get src in form of base64
    upload(e) {
      let reader = new FileReader();
      let self = this;
      reader.onload = function () {
        self.inputValue.img = reader.result;
      };
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    },

    //press locator button to get user location
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getAddressFrom(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    // get address
    getAddressFrom(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyAYDxFBDR0naomCW_dEpM5KIgzkg6bl9wQ"
        )
        .then((response) => {
          if (response.data.error_message) {
            console.log(response.data.error_message);
          } else {
            //get only post code and city name
            this.inputValue.address =
              response.data.results[0].formatted_address.split(",")[1];
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    },

    sendMsg() {
      myBus.emit("newRequest", this.inputValue);
    },
    showToast() {
      const self = this;
      // Create toast
      if (!self.toast) {
        self.toast = f7.toast.create({
          text: "Request has been posted!",
          position: "center",
          closeTimeout: 2000,
        });
      }
      // Open toast
      self.toast.open();
    },
    showToastWithCustomButton() {
      const self = this;
      // Create toast
      if (!self.toastWithCustomButton) {
        self.toastWithCustomButton = f7.toast.create({
          text: "Request has been submitted!",
          closeButton: true,
          closeButtonText: "I got it!",
          closeButtonColor: "green",
        });
      }
      // Open toast
      self.toastWithCustomButton.open();
    },
    onPageBeforeOut() {
      f7.toast.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.toast) self.toast.destroy();
      if (self.toastWithCustomButton) self.toastWithCustomButton.destroy();
    },
  },
};
</script>

