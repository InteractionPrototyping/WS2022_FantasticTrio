<template>
  <f7-page name="add-request" swipe-to-close @page:beforeremove="onPageBeforeRemove" @page:beforeout="onPageBeforeOut">
    <f7-navbar title="Add Request" back-link="Back" ></f7-navbar>
    
    <!-- input field -->
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Title"
        type="text"
        placeholder="Enter the title of your project here..."
        clear-button
      >
      </f7-list-input>
    </f7-list>

    <f7-list label="keyowrd">
      <f7-block strong>
        <f7-chip text="Example Chip" deleteable @click="deleteChip"></f7-chip>
        <f7-chip text="Chris" media="C" media-bg-color="orange" text-color="black" deleteable @click="deleteChip"></f7-chip>
        <f7-chip text="Jane Doe" deleteable @click="deleteChip">
          <template #media>
            <img src="https://cdn.framework7.io/placeholder/people-100x100-9.jpg"/>
          </template>
        </f7-chip>
        <f7-chip text="One More Chip" deleteable @click="deleteChip"></f7-chip>
        <f7-chip text="Jennifer" media-bg-color="pink" media="J" deleteable @click="deleteChip"></f7-chip>
        <f7-chip text="Adam Smith" deleteable @click="deleteChip">
          <template #media>
            <img src="https://cdn.framework7.io/placeholder/people-100x100-7.jpg"/>
          </template>
        </f7-chip>
      </f7-block>
    </f7-list>
    
    <f7-list no-hairlines-md>


      <f7-list-input
        label="Keywords"
        type="select"
        placeholder="Select the appropriate keywords"
        >
        <option>Car repair</option>
        <option>Wall paiting</option>
      </f7-list-input>

      <f7-list-input
        label="Post code"
        type="text"
        placeholder="Enter your post code here..."
      >
      <!-- add my_location icon to automatically get locate information -->
      <template #content-end>
        <f7-icon ios="f7:scope" aurora="f7:house" md="material:my_location"></f7-icon>
      </template>
      </f7-list-input>

      <f7-list-input
        label="Range Picker"
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
        <f7-icon ios="f7:square_arrow_up" aurora="f7:house" md="material:upload"></f7-icon>
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
          text: "Request has been posted, click on the button in the upper right corner to view your request :)",
          position: 'center',
          closeTimeout: 3000,
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

