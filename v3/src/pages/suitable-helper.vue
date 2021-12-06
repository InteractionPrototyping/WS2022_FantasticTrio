<template>
  <f7-page name="suitable-helper">
    <f7-navbar title="Suitable Helper" back-link="Back" back-link-url="/add-request/">
      <!-- click this button to go to my-request page -->
      <f7-nav-right>
        <f7-button fill tab-link="#view-my-request">My Request</f7-button>
      </f7-nav-right>
    </f7-navbar>
    
    <f7-block-title style="text-align:center">Here are some nearby helpers with relevant skills</f7-block-title>
    <f7-list media-list>
      <f7-list-item
        link="#"
        title="Yellow Submarine"
        after="$15"
        subtitle="Beatles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item
        link="#"
        title="Don't Stop Me Now"
        after="$22"
        subtitle="Queen"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item
        link="#"
        title="Billie Jean"
        after="$16"
        subtitle="Michael Jackson"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <template #media>
          <img src="https://cdn.framework7.io/placeholder/people-160x160-3.jpg" width="80" />
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

