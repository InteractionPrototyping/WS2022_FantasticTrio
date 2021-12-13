<template>
  <f7-page name="add-request" swipe-to-close @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <f7-navbar title="Add Request" back-link="Back"></f7-navbar>
    
    <!-- input field -->
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Title"
        type="text"
        placeholder="Enter the title of your project here..."
        clear-button
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

      <f7-list-input
        label="Post code"
        type="text"
        placeholder="Enter your post code here..."
      >
      <!-- add my_location icon to automatically get locate information -->
      <template #content-end>
        <f7-icon style="position:relative; right:16px" ios="f7:scope" aurora="f7:house" md="material:my_location"></f7-icon>
      </template>
      </f7-list-input>

      <f7-list-input
        label="Desired date"
        type="datepicker"
        placeholder="Confirme the time span for this request"
        readonly
        :calendar-params="{ dateFormat: 'M dd yyyy', rangePicker: true }"
      ></f7-list-input>

      <f7-list-input
        label="Description"
        type="textarea"
        placeholder="Insert your description here..."
      >
      </f7-list-input>


    
      
      <f7-list-input
        label="Photos"
        type="email"
        placeholder="Click here to upload photos..."
      >
      <template #content-end>
        <f7-icon style="position:relative; right:16px" ios="f7:square_arrow_up" aurora="f7:house" md="material:upload"></f7-icon>
      </template>
      </f7-list-input>


    </f7-list>

    <!-- submit button -->
    <f7-block >
      <!-- <f7-button fill raised href="/suitable-helper/" >Submit</f7-button> -->
      <!-- it also shows toast when click submit button -->
      <f7-button fill @click="showToast" href="/suitable-helper/">Submit</f7-button>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Navbar, f7Page, f7Block, f7Button, f7, theme } from 'framework7-vue';
export default {
  components: {
    f7Navbar,
    f7Page,
    f7Block,
    f7Button,
  },
  methods: {
    showToast() {
      const self = this;
      // Create toast
      if (!self.toast) {
        self.toast = f7.toast.create({
          text: "Request has been posted! <br> Click the button in the upper right corner to view the request list:) ",
          position: 'center',
          closeTimeout: 4000,
        });
      }
      // Open it
      self.toast.open();
    },
    onPageBeforeOut() {
      f7.toast.close();
    },
    onPageBeforeRemove() {
      const self = this;
      // Destroy toasts when page removed
      if (self.toast) self.toast.destroy();
    },
  },
};
</script>

