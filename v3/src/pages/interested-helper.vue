<template>
  <f7-page name="interested-helper">
    <!-- Navbar area -->
    <f7-navbar title="Interested Helper" back-link="Back" style="font-size: 20px"></f7-navbar>
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
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_lefthalf_fill" size="22px" class="star"></f7-icon>
            <span style="font-size:18px">&nbsp;4.6/5</span>
          </f7-col>
          <f7-col>
          <!-- In data-sheet attribute we specify CSS selector of sheet we need to open-->
          <p><a class="button button-fill sheet-open" href="#" data-sheet=".my-sheet">10€</a></p>
          </f7-col>
        </f7-row>
        <template #media>
          <img
            src="https://images.pexels.com/photos/2691608/pexels-photo-2691608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="80"
            class="avatar"
          />
        </template>

        <f7-button fill style="margin-bottom: 5px; background-color: #6FAAE0" href="/chat/">
          <f7-icon f7="chat_bubble" size="20px" class="chat"></f7-icon>
          Chat
        </f7-button>
        <f7-button fill style="background-color: #6FAAE0">
          <f7-icon f7="phone" size="20px" class="call"></f7-icon>
          Call
        </f7-button>
      </f7-list-item>
      <f7-list-item title="Lisa Wright" after="05/12/2021" text="&#8982; 81550,Munich">
        <f7-row>
          <f7-col>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <f7-icon f7="star_fill" size="22px" class="star"></f7-icon>
            <span style="font-size:18px">&nbsp;4.9/5</span>
          </f7-col>
          <f7-col>
          <!-- In data-sheet attribute we specify CSS selector of sheet we need to open-->
          <p><a class="button button-fill sheet-open" href="#" data-sheet=".my-sheet">15€</a></p>
          </f7-col>
        </f7-row>
        <template #media>
          <img
            src="https://images.pexels.com/photos/1918246/pexels-photo-1918246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            width="80"
            class="avatar"
          />
        </template>

        <!--Sheet Modal-->    
        <!-- Sheet Modal Container -->
        <div class="sheet-modal my-sheet">
          <!-- Sheet Modal Toolbar-->
          <div class="toolbar">
            <div class="toolbar-inner">
              <div class="left"></div>
              <div class="right">
                <a href="#" class="link sheet-close">Close</a>
              </div>
            </div>
          </div>
          <!-- Sheet Modal Inner -->
          <div class="sheet-modal-inner">
            <!-- Sheet Modal content -->
            <div class="block">
              <div class="display-flex padding justify-content-space-between align-items-center"> 
                <div style="font-size: 30px"><b>Total:</b></div>
                <div style="font-size: 30px"><b>15€</b></div>
             </div>
              <div class="padding-horizontal padding-bottom"> 
                <a class="button button-large button-fill" style="font-size: 20px">Make Payment</a>
             </div> 
            </div>
          </div>
        </div>

        <f7-button fill style="margin-bottom: 5px; background-color: #6FAAE0" href="/chat/">
          <f7-icon f7="chat_bubble" size="20px" class="chat"></f7-icon>
          Chat
        </f7-button>
        <f7-button fill style="background-color: #6FAAE0">
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
.media-list {
  --f7-list-item-title-font-size: 25px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-text-font-size: 20px;
}
.button{
  --f7-button-font-size: 20px;
  --f7-button-: 10px;
}

</style>

