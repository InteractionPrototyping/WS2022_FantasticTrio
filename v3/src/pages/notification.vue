<template>
  <f7-page name="notification">
    <f7-navbar title="Notifications"></f7-navbar>
    <f7-block>
    <!-- Individual parts of the page are each structured as a media list-->
    <!-- Template from List View component: Media List -->
    <f7-list media-list>
      <f7-list-item
        link="#" 
        title="Eric Hofmeister"
        after="16:43"
        subtitle="...offered you a price"
      >
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
            />
          </template>
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Michael Wenzel"
        after="12:01"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      <!--Icon to indicate unread message-->
      <!--ToDo: Correct positioning of the icon-->
      <f7-icon f7="circle_fill" size="20px" color="blue"></f7-icon>
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
            />
          </template>
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Laura Briem"
        after="7:21"
        subtitle="...offered you a price"
      >
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
            />
          </template>
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Helena Seefelder"
        after="Yesterday"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
            />
          </template>
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Sarah Müller"
        after="19/09/2020"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
            />
          </template>
      </f7-list-item>
    </f7-list>
  </f7-block>

  </f7-page>
</template>


