<template>
  <f7-page name="review">
    <f7-navbar title="Reviews" back-link="Back"></f7-navbar>

    <f7-block-title>Overall Score</f7-block-title>
    <f7-block>
      <f7-row no-gap>
        <f7-col>4.0</f7-col>
        <f7-col>
          <div>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
          <div>out of 72 reviews</div>
        </f7-col>
      </f7-row>
    </f7-block>
      

  <!-- table test
    <div class="data-table">
      <table>
        <tbody>
          <tr>
            <td class="numeric-cell">4.0</td>
            <td class="numeric-cell">
              <div>stars icons</div>
              <div>out of 72 reviews</div>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    -->
      
    <f7-menu>
      <f7-menu-item text="Latest reviews" dropdown>
        <f7-menu-dropdown left>
          <f7-menu-dropdown-item href="#" text="Latest reviews"></f7-menu-dropdown-item>
          <f7-menu-dropdown-item divider></f7-menu-dropdown-item>
          <f7-menu-dropdown-item href="#" text="Best reviews"></f7-menu-dropdown-item>
          <f7-menu-dropdown-item divider></f7-menu-dropdown-item>
          <f7-menu-dropdown-item href="#" text="Worst reviews"></f7-menu-dropdown-item>
        </f7-menu-dropdown>
      </f7-menu-item>
    </f7-menu>

   
    <f7-list media-list>
      <f7-list-item
        link="#" 
        title="Anonymus"
        after="07/07/2021"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Michael Wenzel"
        after="12/05/2021"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9733;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Laura Briem"
        after="23/04/2021"
        subtitle="&#9733;&#9733;&#9733;&#9734;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Helena Seefelder"
        after="01/12/2020"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Eric Hofmeister"
        after="19/09/2020"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
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



