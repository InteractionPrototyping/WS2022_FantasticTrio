<template>
  <f7-page name="review">
    <!--Navbar-->
    <f7-navbar title="Reviews" back-link="Back"></f7-navbar>

    <!--Overview overall score-->
    <f7-block-title>Overall Score</f7-block-title>
    <f7-block>
      <!--Arrangement in table form-->
      <f7-row no-gap>
        <f7-col>
          <p class="overall-score">4.0</p>
        </f7-col>
        <f7-col>
          <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
          <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
          <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
          <f7-icon f7="star_fill" size="20px" class="star"></f7-icon>
          <f7-icon f7="star_empty" size="20px" class="star"></f7-icon>
          <div>out of 72 reviews</div>
        </f7-col>
      </f7-row>
    </f7-block>

  <!--Drop down menu for filtering the reviews-->
  <!-- ToDo: Adjusting the color-->
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

    <!--Individual reviews arranged in block-form as a media-list-->
    <f7-block>
    <f7-list media-list>
      <f7-list-item
        link="#" 
        title="Jason Miller"
        after="07/07/2021"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="40"/>
          </template>
      </f7-list-item>

      <f7-list-item
        link="#" 
        title="Hans Wenzel"
        after="12/05/2021"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9733;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img src="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="40"/>
          </template>
      </f7-list-item>

      <f7-list-item
        link="#" 
        title="Jessi Briem"
        after="23/04/2021"
        subtitle="&#9733;&#9733;&#9733;&#9734;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="40"/>
          </template>
      </f7-list-item>

      <f7-list-item
        link="#" 
        title="Christina Seefelder"
        after="01/12/2020"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="40"/>
          </template>
      </f7-list-item>

      <f7-list-item
        link="#" 
        title="Eric Hofmeister"
        after="19/09/2020"
        subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
      >
        <!--Profile picture-->
        <template #media>
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="40"/>
          </template>
      </f7-list-item>
    </f7-list>
    </f7-block>

  </f7-page>
</template>
<style scoped>
.item-subtitle{
  color: #2a3c60 !important;
}
.overall-score{
  font-size: 30px;
  margin: 0px;
  color: #2a3c60 !important;
}
</style>



