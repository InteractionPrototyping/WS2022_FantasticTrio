<template>
  <f7-page name="review">
    <!--Navbar-->
    <f7-navbar
      title="Reviews"
      back-link="Back"
      style="font-size: 20px"
    ></f7-navbar>

    <!--Overview overall score-->
    <f7-block-title>Overall Score</f7-block-title>
    <f7-block>
      <!--Arrangement in table form-->
      <f7-row no-gap>
        <f7-col>
          <p class="overall-score">4.0</p>
        </f7-col>
        <f7-col>
          <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
          <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
          <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
          <f7-icon f7="star_fill" size="25px" class="star"></f7-icon>
          <f7-icon f7="star_empty" size="25px" class="star"></f7-icon>
          <div>out of 72 reviews</div>
        </f7-col>
      </f7-row>
    </f7-block>

    <!--Drop down menu for filtering the reviews-->
    <!-- Menu item with dropdown option-->
    <div class="menu">
      <div class="menu-inner">
        <div
          class="menu-item menu-item-dropdown"
          style="background-color: #468dce"
        >
          <div class="menu-item-content">Filter reviews</div>
          <div
            class="menu-dropdown menu-dropdown-left"
            style="background-color: #6faae0"
          >
            <div
              class="menu-dropdown-content"
              style="background-color: #6faae0"
            >
              <a href="#" class="menu-dropdown-link menu-close"
                >Latest reviews</a
              >
              <div class="menu-dropdown-divider"></div>
              <a href="#" class="menu-dropdown-link menu-close">Best reviews</a>
              <div class="menu-dropdown-divider"></div>
              <a href="#" class="menu-dropdown-link menu-close"
                >Worst reviews</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Individual reviews arranged in block-form as a media-list-->
    <f7-block>
      <f7-list media-list>
        <!--first comment-->
        <f7-list-item
          link="#"
          title="Jason Miller"
          after="07/07/2021"
          subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <!--Profile picture-->
          <template #media>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="avatar"
            />
          </template>
        </f7-list-item>

        <!--second comment-->
        <f7-list-item
          link="#"
          title="Hans Wenzel"
          after="12/05/2021"
          subtitle="&#9733;&#9733;&#9733;&#9733;&#9733;"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <!--Profile picture-->
          <template #media>
            <img
              src="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="avatar"
            />
          </template>
        </f7-list-item>

        <!--third comment-->
        <f7-list-item
          link="#"
          title="Jessi Briem"
          after="23/04/2021"
          subtitle="&#9733;&#9733;&#9733;&#9734;&#9734;"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <!--Profile picture-->
          <template #media>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="avatar"
            />
          </template>
        </f7-list-item>

        <!--fourth comment-->
        <f7-list-item
          link="#"
          title="Christina Seefelder"
          after="01/12/2020"
          subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <!--Profile picture-->
          <template #media>
            <img
              src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="avatar"
            />
          </template>
        </f7-list-item>

        <!--fifth comment-->
        <f7-list-item
          link="#"
          title="Eric Hofmeister"
          after="19/09/2020"
          subtitle="&#9733;&#9733;&#9733;&#9733;&#9734;"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
        >
          <!--Profile picture-->
          <template #media>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="avatar"
            />
          </template>
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<!--Style-->
<style scoped>
.overall-score {
  font-size: 35px;
  margin: 0px;
  color: #2d4066;
}
.avatar {
  border-radius: 50%;
  width: 20vmin;
  height: 20vmin;
  object-fit: cover;
  object-position: center;
}
.block-title {
  --f7-block-title-font-size: 40px;
  --f7-block-title-font-weight: bold;
  --f7-block-title-text-color: #2d4066;
}
div {
  font-size: 20px;
}
.media-list {
  --f7-list-item-title-font-size: 23px;
  --f7-list-item-after-font-size: 20px;
  --f7-list-item-subtitle-font-size: 25px;
  --f7-list-item-text-font-size: 18px;
}
</style>



