<template>
  <f7-page name="my-request">
    <f7-navbar title="My Request" back-link="Back" back-link-url="/suitable-helper/"></f7-navbar>

    <!-- Template from List View component: Media List -->
      
    <f7-block-title style="text-align:center">Check your request status here</f7-block-title>
      <!-- 1st request -->
      <f7-list class="myRequest" media-list style="width:85%;display: inline-block">
        <f7-list-item
          title="Change Brake"
          after="To 31/12"
          text="&#8982; 81548,Munich"
        >
        <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
          <template #media>
            <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 3 functions and status -->
      <f7-block class="listOfButton myRequest">
        <p class="buttonOfIcon requested">
          <a href='/suitable-helper/'>
            <img class ="icon requested" src='../icon/my-requests/requested_white.svg' >
          </a>
        </p>
        <p class="buttonOfIcon interested">
          <a href='/interested-helper/'>
            <img class ="icon interested" src='../icon/my-requests/interested_white.svg' >
          </a>
        </p>
        <p class="buttonOfIcon paid">
          <a href='/suitable-helper/'>
            <img class ="icon paid" src='../icon/my-requests/paid_white.svg' >
          </a>
        </p>
      </f7-block>

      <!-- 2nd request -->
      <f7-list class="myRequest" media-list style="width:85%;display: inline-block; position:relative;">
        <f7-list-item
          title="Change Brake"
          after="To 31/12"
          text="&#8982; 81548,Munich"
        >
        <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
          <template #media>
            <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 3 functions and status -->
      <f7-block class="listOfButton myRequest" >
        <p class="buttonOfIcon requested finished">
          <a href='/suitable-helper/'>
            <img class ="icon requested" src='../icon/my-requests/requested.svg' >
          </a>
        </p>
        <p class="buttonOfIcon interested">
          <a href='/interested-helper/'>
            <img class ="icon interested" src='../icon/my-requests/interested_white.svg' >
          </a>
        </p>
        <p class="buttonOfIcon paid">
          <a href='/suitable-helper/'>
            <img class ="icon paid" src='../icon/my-requests/paid_white.svg' >
          </a>
        </p>
      </f7-block>

      <!-- 3rd request -->
      <f7-list class="myRequest" media-list style="width:85%;display: inline-block">
        <f7-list-item
          title="Change Brake"
          after="To 31/12"
          text="&#8982; 81548,Munich"
        >
        <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
          <template #media>
            <img src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg" width="80" />
          </template>
        </f7-list-item>
      </f7-list>
      <!-- icon coloum for 3 functions and status -->
      <f7-block class="listOfButton myRequest">
        <p class="buttonOfIcon requested finished">
          <a href='/suitable-helper/'>
            <img class ="icon requested" src='../icon/my-requests/requested.svg' >
          </a>
        </p>
        <p class="buttonOfIcon interested finished">
          <a href='/interested-helper/'>
            <img class ="icon interested" src='../icon/my-requests/interested.svg' >
          </a>
        </p>
        <p class="buttonOfIcon paid">
          <a href='/suitable-helper/'>
            <img class ="icon paid" src='../icon/my-requests/paid_white.svg' >
          </a>
        </p>
      </f7-block>

      <!-- finished request -->
      <f7-block-title style="text-align:center">
        Finished requests
      </f7-block-title>
      <!-- make list to be gray -->
      <f7-block style="filter：gray; -moz-opacity:.3;opacity:0.3;paddinng;0px">
        <f7-list class="myRequest" media-list style="width:85%;display: inline-block; position:relative;">
          <f7-list-item
            title="Change Brake"
            after="To 31/12"
            text="&#8982; 81548,Munich"
          >
          <f7-chip outline color="#007aff" text="#Car repair"></f7-chip>
            <template #media>
              <img src="https://cdn.framework7.io/placeholder/people-160x160-2.jpg" width="80" />
            </template>
          </f7-list-item>
        </f7-list>
        <!-- icon coloum for 3 functions and status -->
        <f7-block class="listOfButton myRequest" >
          <p class="buttonOfIcon requested finished">
            <a href='/suitable-helper/'>
              <img class ="icon requested" src='../icon/my-requests/requested.svg' >
            </a>
          </p>
          <p class="buttonOfIcon interested finished">
            <a href='/interested-helper/'>
              <img class ="icon interested" src='../icon/my-requests/interested.svg' >
            </a>
          </p>
          <p class="buttonOfIcon paid finished">
            <a href='/suitable-helper/'>
              <img class ="icon paid" src='../icon/my-requests/paid.svg' >
            </a>
          </p>
        </f7-block>
      </f7-block>

  </f7-page>
</template>

<style>
  .buttonOfIcon {
    background-color:#007aff;
    margin:0;
    padding:0;
    height:33px;
    text-align:center;
  }
  .icon {
    width:25px;
    height:25px;
    padding:4px;
  }
  .listOfButton {
    width:15%;
    margin:0;
    display:inline-block;
    padding:0px;
    position:relative;
    top: 9px;
  }
  .myRequest {
    margin:0;
    padding: 0;
  }
  .finished {
    background-color:white;
  }
</style>

