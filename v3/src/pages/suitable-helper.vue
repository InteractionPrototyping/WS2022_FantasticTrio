<template>
  <f7-page name="suitable-helper">
    <f7-navbar title="Suitable Helper" back-link="Back" back-link-url="/add-request/">
      <!-- click this button to go to my-request page -->
      <f7-nav-right>
        <f7-button fill href="/my-request/">My Request</f7-button>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title style="text-align:center">Users you have asked the price</f7-block-title>
    <f7-list media-list>
      <f7-list-item        
        title="Verena Manz"
        after="86378"
        subtitle="Car repair"
        text="4.6(10)"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
        <!-- place icon after post code -->
        <template v-slot:after>
          <f7-icon ios="f7:placemark_fill" aurora="f7:placemark" md="material:place_outline"></f7-icon>
          <f7-icon ios="f7:star_fill" aurora="f7:star_fill" md="material:star"></f7-icon>

          <!-- <f7-button fill>Ask for help</f7-button> -->
        </template>
      </f7-list-item>
    </f7-list>

    <f7-block-title style="text-align:center">Here are some nearby skilled helpers</f7-block-title>
    <f7-list media-list>
      <f7-list-item        
        title="Verena Manz"
        after="86378"
        subtitle="Car repair"
        text="4.6(10)"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
        <!-- place icon after post code -->
        <template v-slot:after>
          <f7-icon ios="f7:placemark_fill" aurora="f7:placemark" md="material:place_outline"></f7-icon>
          <f7-icon ios="f7:star_fill" aurora="f7:star_fill" md="material:star"></f7-icon>

          <f7-button fill>Ask for help</f7-button>
        </template>
      </f7-list-item>
      <f7-list-item
        title="Nils Bremer"
        
        after="81929"
        subtitle="Car repair"
        text="4.4(25)"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>
        <!-- place icon after post code -->
        <template v-slot:after>
          <f7-icon ios="f7:placemark_fill" aurora="f7:placemark" md="material:place_outline"></f7-icon>
          <f7-icon ios="f7:star_fill" aurora="f7:star_fill" md="material:star"></f7-icon>

          <f7-button fill>Ask for help</f7-button>
        </template>
      </f7-list-item>
      <f7-list-item
        title="Dietrich Rombach"
        after="81511"
        subtitle="Car repair"
        text="4.5(14)"
        target="false"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg" width="80" />
        </template>
        <!-- place icon after post code -->
        <template v-slot:after>
          <f7-icon ios="f7:placemark_fill" aurora="f7:placemark" md="material:place_outline"></f7-icon>
          <f7-icon ios="f7:star_fill" aurora="f7:star_fill" md="material:star"></f7-icon>

          <f7-button fill>Ask for help</f7-button>
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

