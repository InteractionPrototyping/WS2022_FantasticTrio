<template>
  <f7-page name="add-request" swipe-to-close @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <f7-navbar title="Add Request" back-link="Back" style="font-size: 20px"></f7-navbar>
    
    <!-- input field -->
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

      <!-- use smart select component to choose keywords -->
      <f7-list-item title="Keyword" smart-select :smart-select-params="{openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search keyword'}">
      <select name="keyword">
        <optgroup label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/car.svg'> Auto,Mobiles" >
          <option value="Autoreparatur" selected>Autoreparatur</option>
          <option value="Auto Tuning" >Auto Tuning</option>
          <option value="Chauffeur">Chauffeur</option>
          <option value="Fahrzeugbeschriftung">Fahrzeugbeschriftung</option>
          <option value="Fahrzeugreinigung">Fahrzeugreinigung</option>
          <option value="Sonstige Kfz-Service">Sonstige Kfz-Service</option>
        </optgroup>
        <optgroup label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/home.svg'> Haus,Aussenarbeiten ">
          <option value="Abriss">Abriss</option>
          <option value="Aussenkonstruktion">Aussenkonstruktion</option>
          <option value="Baggerarbeiten">Baggerarbeiten</option>
          <option value="Bautrockenlegung, Baut...">Bautrockenlegung, Baut...</option>
          <option value="Dachdecker">Dachdecker</option>
          <option value="Sonstige Aussenarbeit">Sonstige Aussenarbeit</option>

        </optgroup>
        <optgroup label="<img style='width:25px; height:25px;' src='../img/add_request_keyword/painting.svg'>Haus,Innenarbeiten" >
          <option value="Badsanierung">Badsanierung</option>
          <option value="Bodenleger">Bodenleger</option>
          <option value="Deckenarbeiten">Deckenarbeiten</option>
          <option value="Entrümpelung">Entrümpelung</option>
          <option value="Sonstige Aussenarbeit">Sonstige Innenarbeit</option>
        </optgroup>
        <optgroup label=" <img style='width:25px; height:25px;' src='../img/add_request_keyword/gardening.svg'> Gardenarbeiten">
          <option value="Baumfällung">Baumfällung</option>
          <option value="Gärtner">Gärtner</option>
          <option value="Gartenteich">Gartenteich</option>
          <option value="Grabpflege">Grabpflege</option>
          <option value="Sonstige Gartenarbeit">Sonstige Gartenarbeit</option>
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
      <!-- add my_location icon to automatically get locate information -->
      <template #content-end>
        <f7-icon 
          style="position:relative; right:16px; color: #263A68" 
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
        :calendar-params="{dateFormat: 'dd/MM/yyyy'}"
        v-model:value='inputValue.date'
      >
        <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
      </f7-list-input>

      <!-- input description -->
      <f7-list-input
        label="Description"
        type="textarea"
        placeholder="Insert your description here..."
        v-model:value="inputValue.text"
      >
      </f7-list-input>

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
    
      <!-- input Photos -->
      <!-- <f7-list-input
        label="Photo"
        type="file"
        placeholder="Click here to upload photos..."
      >
      <template #content-end>
        <label for="iconOfUpload">
          <f7-icon style="position:relative; right:16px" class="material-icons status-icon">
            file_upload
          </f7-icon>
        </label>
      </template>
      </f7-list-input> -->

          <!-- <input  id='iconOfUpload' type="file" @change="upload" style="position:absolute; "><br> -->


    </f7-list>

    <!-- submit button -->
    <f7-block>
      <!-- <f7-button fill raised href="/suitable-helper/" >Submit</f7-button> -->
      <!-- it also shows toast when click submit button -->
      <f7-button fill raised @click="sendMsg" href="/">Submit</f7-button>
    </f7-block>
  </f7-page>
</template>

<style scoped>
.no-hairlines-md {
  --f7-label-font-size: 25px;
  --f7-input-font-size: 18px;
  --f7-label-text-color:#263A68;
}
.list{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-after-font-size: 18px;
  --f7-list-item-title-text-color: #263A68;
}
.button-raised{
  --f7-button-height: 50px;
  --f7-button-font-size: 25px;
}
</style>

<script>
import { f7Navbar, f7Page, f7Block, f7Button, f7, theme } from 'framework7-vue';
import myBus from '../js/myBus.js';
import axios from 'axios';
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
      inputValue:{
        title:"",
        keyword: '',
        address: '',
        date:'',
        text: '',
        img: "../img/request_img/default_img.jpg",
        interested: '0'
      },
      //address: ''
    }
  },
  methods: {
    //upload img and get src in form of base64 
    upload(e) {
      let reader = new FileReader();
      let self = this;
      reader.onload = function() {
        // console.log(reader.result);
        self.inputValue.img = reader.result;
      }
      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }
    },

    //press locator button to get user location
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
          position => {
            this.getAddressFrom(position.coords.latitude, position.coords.longitude )
          },
          error => {
            console.log(error.message);
          },
      )
    },
    getAddressFrom(lat, long) {
      axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
         lat +
         "," +
         long +
         "&key=AIzaSyAYDxFBDR0naomCW_dEpM5KIgzkg6bl9wQ"
         )
        .then (response => {
          if (response.data.error_message) {
            console.log(response.data.error_message)
          } else {
            //get only post code and city name
            this.inputValue.address=response.data.results[0].formatted_address.split(',')[1]
          }
        })
        .catch(error => {
          console.log(error.message);
        })
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
          position: 'center',
          closeTimeout: 2000,
        });
      }
      // Open it
      self.toast.open();
    },
    showToastWithCustomButton() {
      const self = this;
      // Create toast
      if (!self.toastWithCustomButton) {
        self.toastWithCustomButton = f7.toast.create({
          text: 'Request has been submitted!',
          closeButton: true,
          closeButtonText: 'I got it!',
          closeButtonColor: 'green',
        });
      }
      // Open it
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

  <style scoped>
  .no-hairlines-md {
    margin:0;
    border-top: 0;
  }
  .no-hairlines-md {
  --f7-label-font-size: 25px;
  --f7-input-font-size: 18px;
  --f7-label-text-color:#263A68;
}
.list{
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-after-font-size: 18px;
  --f7-list-item-title-text-color: #263A68;
}
.button-raised{
  --f7-button-height: 50px;
  --f7-button-font-size: 25px;
}
</style>

