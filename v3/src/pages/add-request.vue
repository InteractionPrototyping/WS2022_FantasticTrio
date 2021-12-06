<template>
  <f7-page name="add-request">
    <f7-navbar title="Add Request" back-link="Back" back-link-url="/"></f7-navbar>
    
    <!-- input field -->
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Title"
        type="text"
        placeholder="Enter the title of your project here..."
      ></f7-list-input>

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
      ></f7-list-input>

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
      ></f7-list-input>
      
    </f7-list>
    <!-- submit button -->
    <f7-block >
      <f7-button fill raised tab-link="#view-suitable-helper">Submit</f7-button>
    </f7-block>
  </f7-page>
</template>
