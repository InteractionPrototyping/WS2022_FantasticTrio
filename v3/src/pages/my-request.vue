<template>
  <f7-page name="my-request">
    <f7-navbar title="My Request" back-link="Back" back-link-url="/suitable-helper/"></f7-navbar>

    <!-- Template from List View component: Media List -->
    <f7-list media-list>
      <f7-list-item
        title="Change Brake"
        after="10/12-31/12"
        subtitle="Car repair"
        text="&#8982; 81548,Munich"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
        <f7-button fill text="Interested(3)" style="margin-bottom:5px" href='/interested-helper/'>
          <f7-badge color="red"></f7-badge>
        </f7-button>
        <f7-button fill>Requested(2)</f7-button>
      </f7-list-item>

      <f7-list-item
        title="Car repair"
        after="11/12-25/12"
        subtitle="Car repari"
        text="&#8982; 81548,Munich"
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>

        <f7-button fill text="Interested(3)" style="margin-bottom:5px">
          <!-- <f7-badge color="red"></f7-badge> -->
        </f7-button>
        <f7-button fill>Requested(2)</f7-button>
      </f7-list-item>
    
    </f7-list>
  </f7-page>
</template>

