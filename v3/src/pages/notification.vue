<template>
  <f7-page name="notification">
    <f7-navbar title="Notifications" style="font-size: 20px"></f7-navbar>
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
              class="avatar"
            >
            <i class="badgeToimg"></i>
          </template>
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Michael Wenzel"
        after="12:01"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
              class="avatar"
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
              class="avatar"
            />
            <i class="badgeToimg"></i>
          </template>
      </f7-list-item>
      <f7-list-item
        link="#" 
        title="Helena See"
        after="Yesterday"
        subtitle="...sent you a message"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
      <!--Badge to indicate unread message-->
      <!--ToDo: Correct positioning of the badge-->
        <!--Profile picture-->
        <template #media>
            <img
              src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="40"
              class="avatar"
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
              class="avatar"  
            />
          </template>
      </f7-list-item>
    </f7-list>
  </f7-block>

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
.badgeToimg{
  display: flex;
  height: 20px;
  width:20px;
  background-color: #4cd964;
  border-radius: 50%;
  position: absolute;
  left: 70px;
  top: 10px;
}
.media-list{
  --f7-list-item-title-font-size: 23px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-subtitle-font-size: 20px;
  --f7-list-item-text-font-size: 17px;
}

</style>


