<template>
  <f7-page name="notification">
    <f7-navbar title="Notifications" back-link="Back"></f7-navbar>
   
    <f7-list media-list>
      <f7-list-item
        link="#" 
        title="Eric Hofmeister"
        after="16:43"
        subtitle="...offered you a price"
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Michael Wenzel"
        after="12:01"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Laura Briem"
        after="7:21"
        subtitle="...offered you a price"
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Helena Seefelder"
        after="Yesterday"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Sarah Müller"
        after="19/09/2020"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
  export default {
    props: {
      f7router: Object,
      f7navbar: Object,
    }
  }
</script>
