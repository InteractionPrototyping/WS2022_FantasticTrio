<template>
  <f7-page name="comment">
    <!-- Navbar area -->
    <f7-navbar title="Comment" back-link="Back"></f7-navbar>
    <f7-block>
      <!-- Comment content -->
      <f7-list media-list style="height: 150px">
        <f7-list-item
          title="Jessi Briem"
          after="05/12/2021"
          text="I like the article very much, it helped me a lot."
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="80"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <f7-list-item
          title="Eric Bach"
          after="04/12/2021"
          text="Thanks for sharing!"
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="80"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <f7-list-item
          title="Christina Ruck"
          after="30/11/2021"
          text="The tips are all useless for me."
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="80"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <f7-list-item
          title="Jeson Smith"
          after="25/11/2021"
          text="Cool idea! I will try it next time :)"
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="80"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <f7-list-item
          title="Alice Wilson"
          after="21/11/2021"
          text="Thanks,I will try it on my father's car."
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="80"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <f7-list-item
          title="Hans Schmitt"
          after="15/11/2021"
          text="At least I need one my own car"
        >
          <template #media>
            <img
              src="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width="80"
              class="avatar"
            />
          </template>
        </f7-list-item>
        <br />
        <br />
      </f7-list>
      <f7-block style="height: 700px"> </f7-block>
    </f7-block>
    <!-- Comment bar -->
    <f7-block style="display: block">
      <f7-messagebar
        ref="messagebar"
        v-model:value="messageText"
        placeholder="Leave your comment"
        :attachments-visible="attachmentsVisible"
        :sheet-visible="sheetVisible"
        class="bar"
        style="position: fixed; bottom: 50px"
      >
        <template #inner-start>
          <f7-link
            icon-ios="f7:camera_fill"
            icon-aurora="f7:camera_fill"
            icon-md="material:camera_alt"
            @click="sheetVisible = !sheetVisible"
          />
        </template>
        <template #inner-end>
          <f7-link
            icon-ios="f7:arrow_up_circle_fill"
            icon-aurora="f7:arrow_up_circle_fill"
            icon-md="material:send"
            @click="sendMessage"
          />
        </template>
        <f7-messagebar-attachments>
          <f7-messagebar-attachment
            v-for="(image, index) in attachments"
            :key="index"
            :image="image"
            @attachment:delete="deleteAttachment(image)"
          ></f7-messagebar-attachment>
        </f7-messagebar-attachments>
        <f7-messagebar-sheet>
          <f7-messagebar-sheet-image
            v-for="(image, index) in images"
            :key="index"
            :image="image"
            :checked="attachments.indexOf(image) >= 0"
            @change="handleAttachment"
          ></f7-messagebar-sheet-image>
        </f7-messagebar-sheet>
      </f7-messagebar>
    </f7-block>
  </f7-page>
</template>
<style scoped>
.avatar{
  border-radius: 50%; 
  width: 25vmin;
   height: 25vmin; 
   object-fit: cover; 
   object-position: center;
}
</style>

