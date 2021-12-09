<template>
  <f7-page name="comment">
    <f7-navbar title="Comment" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-list media-list style="height:150px">
      <f7-list-item 
      title="Jessi"
      after="05/12/2021"
      text="I like the article very much,  that help me a lot."  
      >
        <template #media>
        <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item 
      title="Eric"
      after="04/12/2021"
      text="Thanks for you sharing!"  
      >
        <template #media>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item 
      title="Christina"
      after="30/11/2021"
      text="The tips are all useless for me."  
      >
        <template #media>
        <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item 
      title="Jeson"
      after="25/11/2021"
      text="Cool idea! I will try it next time :)"  
      >
        <template #media>
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item 
      title="Alice"
      after="21/11/2021"
      text="Thanks,I will try it on my father's car."  
      >
        <template #media>
        <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
        </template>
      </f7-list-item>
      <f7-list-item 
      title="Hans"
      after="15/11/2021"
      text="At least I need one my own car"  
      >
        <template #media>
        <img src="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="80" />
        </template>
      </f7-list-item>
      <br>
      <br>
      </f7-list>  
      <f7-block style="height:700px">
      </f7-block>
    </f7-block>
    <f7-block style="display:block">
      <f7-list>
                <f7-list-input
         type="text"
         placeholder="leave your comment">
         </f7-list-input>
         <br>
         <f7-button fill raised >Submit</f7-button>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

