<template>
  <f7-page name="suitable-helper">
    <f7-navbar title="Suitable Helper" back-link="Back" back-link-url="/add-request/">
      <!-- click this button to go to my-request page -->
      <f7-nav-right>
        <f7-button fill href="/my-request/">My Request</f7-button>
      </f7-nav-right>
    </f7-navbar>
    <!-- Template from List View component: Media List -->
    <f7-block-title style="text-align:center">Users you have asked the price</f7-block-title>
    <f7-list media-list>
      <f7-list-item        
        title="Verena Manz"
        after="&#8982; 86378,Munich"
        subtitle="Car repair"
        text="&#9733; 4.6(10)"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
      </f7-list-item>
    </f7-list>

    <f7-block-title style="text-align:center">Here are some nearby skilled helpers</f7-block-title>
    <f7-list media-list style="height:100px">
      <f7-list-item        
        title="Verena Manz"
        after="&#8982; 86378,Munich"
        subtitle="Car repair"
        text="&#9733; 4.6(10)"
      >

        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
        <f7-button fill>Ask for help</f7-button>

      </f7-list-item>
      <f7-list-item
        title="Nils Bremer"
        
        after="&#8982; 81929,Munich"
        subtitle="Car repair"
        text="&#9733; 4.4(25)"
        
      >
      <f7-button fill>Ask for help</f7-button>
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>
      </f7-list-item>

      <f7-list-item
        title="Dietrich Rombach"
        after="&#8982; 81511,Munich"
        subtitle="Car repair"
        text="&#9733; 4.5(14)"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg" width="80" />
        </template>
        <f7-button fill>Ask for help</f7-button>
      </f7-list-item>

    </f7-list>
  </f7-page>
</template>

