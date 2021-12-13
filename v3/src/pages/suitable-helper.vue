<template>
  <f7-page name="suitable-helper">
    <f7-navbar title="Suitable Helper" back-link="Back" back-link-url="/add-request/">
      <!-- click this button to go to my-request page -->
      <f7-nav-right>
        <!-- <f7-button outlined href="/my-request/">My Request</f7-button> -->
      <f7-link
          href="/my-request/"
          icon-ios="f7:list_dash"
          icon-aurora="f7:list_dash"
          icon-md="material:list"
        ></f7-link> 
      </f7-nav-right>
    </f7-navbar>
    <!-- Template from List View component: Media List -->
    <f7-block-title style="text-align:center">Users you have asked the price</f7-block-title>
    <f7-list media-list style="filter：gray; -moz-opacity:.3;opacity:0.3;">
      <f7-list-item        
        title="Alice M."
        after="&#9733; 4.6(10)"
        text="&#8982; 86378,Munich"
      >
      <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
        <template #media>
           <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" height="80" />
        </template>
      </f7-list-item>
    </f7-list>

    <f7-block-title style="text-align:center">Here are some nearby skilled helpers</f7-block-title>
    <f7-list media-list style="height:100px">
      <f7-list-item        
        title="Verena Manz"
        after="&#9733; 4.6(10)"
        text="&#8982; 86378,Munich"
      >
      <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
        <f7-button fill style="display:inline-block;position:absolute;right:15px">Ask for help</f7-button>

      </f7-list-item>
      <f7-list-item
        title="Nils Bremer"
        
        after="&#9733; 4.4(25)"
        text="&#8982; 86378,Munich"
        
      >
      <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
      <f7-button fill style="display:inline-block;position:absolute;right:15px">Ask for help</f7-button>
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>
      </f7-list-item>

      <f7-list-item
        title="Dietrich Rombach"
        after="&#9733; 4.5(14)"
        text="&#8982; 81511,Munich"
      >
      <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg" width="80" />
        </template>
        <f7-button fill style="display:inline-block;position:absolute;right:15px">Ask for help</f7-button>
      </f7-list-item>

    </f7-list>
  </f7-page>
</template>

