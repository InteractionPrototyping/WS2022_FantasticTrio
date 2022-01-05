<template>
  <f7-page name="interested-helper">
    <!-- Navbar area -->
    <f7-navbar title="Interested Helper" back-link="Back"></f7-navbar>
    <!-- Helper's information -->
    <f7-list media-list>
      <f7-list-item
        title="Jack Miller"
        after="10/12/2021"
        text="&#8982; 81548,Munich"
        style="margin-bottom: 20px"
      >
        <f7-row>
          <f7-col>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_lefthalf_fill" size="20px" class="star"></f7-icon>
            <span>&nbsp;4.6/5</span>
          </f7-col>
          <f7-col>
          <!--by clicking the button popup-menu will be opened-->
          <f7-button fill raised class="button popup-open" href="#" data-popup=".popup-about">
            10&#8364;</f7-button> 

          </f7-col>
        </f7-row>
        <template #media>
          <img
            src="https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="80"
            class="avatar"
          />
        </template>

        <f7-button fill style="margin-bottom: 5px" href="/chat/">
          <f7-icon f7="chat_bubble" size="20px" class="chat"></f7-icon>
          Chat
        </f7-button>
        <f7-button fill>
          <f7-icon f7="phone" size="20px" class="call"></f7-icon>
          Call
        </f7-button>
      </f7-list-item>
      <f7-list-item title="Lisa Wright" after="05/12/2021" text="&#8982; 81550,Munich">
        <f7-row>
          <f7-col>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
            <span>&nbsp;4.9/5</span>
          </f7-col>
          <f7-col>
          <!--by clicking the button popup-menu will be opened -->
          <f7-button fill raised class="button popup-open" href="#" data-popup=".popup-about">
            15&#8364;</f7-button> 
          </f7-col>
        </f7-row>
        <template #media>
          <img
            src="https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="80"
            class="avatar"
          />
        </template>

        <!--Pop-over menu-->
       <!-- <f7-popover class="popover-menu"> -->
          <!-- <f7-block-title style="text-align:center">Choose one function</f7-block-title> -->
        <!--  <f7-list>
            <f7-list-button bold popover-close title="Credit or Debit Card"></f7-list-button>
            <f7-list-button bold popover-close title="Paypal"></f7-list-button>
            <f7-list-button bold popover-close title="Cash"></f7-list-button>
            <f7-list-button bold popover-close title="Klarna (Bank Transfer)"></f7-list-button>
          </f7-list>
        </f7-popover> -->

        <!--Pop-up menu function --> 
        <div class="popup popup-about">
          <div class="block">
            <p><a class="link popup-close" href="#">
              Close
              </a></p>
            <p>Choose your payment option</p>  
            <div>Credit or Debit Card</div>
            <div>Paypal</div>
            <div>Cash</div>
            <div>Klarna (Bank Transfer)</div>

          </div>
        </div> 

        <f7-button fill style="margin-bottom: 5px">
          <f7-icon f7="chat_bubble" size="20px" class="chat"></f7-icon>
          Chat
        </f7-button>
        <f7-button fill>
          <f7-icon f7="phone" size="20px" class="call"></f7-icon>
          Call
        </f7-button>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<style scoped>
.avatar{
  border-radius: 50%; 
  width: 20vmin;
   height: 20vmin; 
   object-fit: cover; 
   object-position: center;
}
</style>

