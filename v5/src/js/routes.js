
import HomePage from '../pages/home.vue';
import NotificationPage from '../pages/notification.vue';
import OwnProfilePage from '../pages/own-profile.vue';
import ExplorePage from '../pages/explore.vue';
import ProjectPage from '../pages/project.vue';
import CommentPage from '../pages/comment.vue';
import InterestedHelper from '../pages/interested-helper.vue';
import Chat from '../pages/chat.vue';
// import all vue documents for new pages to this document
import AddRequestPage from '../pages/add-request.vue';
import MyRequestPage from '../pages/my-request.vue';
import ToastPage from '../pages/components from f7/toast.vue';
import AutocompletePage from '../pages/components from f7/autocomplete.vue';

import RequestAndLoad from '../pages/request-and-load.vue';

import ReviewPage from '../pages/review.vue';
import ProfileHelperPage from '../pages/profile-helper.vue';
import ProfileGalleryPage from '../pages/profile-gallery.vue';

import InstructionPage from '../pages/Instruction.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  //set route for instruction page
  {
    path: '/instruction/',
    component: InstructionPage,
    name:'instruction',
  },
  // set route for add-request page
  {
    path: '/add-request/',
    component: AddRequestPage,
    name: 'add-request',
  },
  // set route for my-request page
  {
    path: '/my-request/',
    component: MyRequestPage,
    name:'my-request',
  },
  // set route for toast page
  {
    path: '/toast/',
    component: ToastPage,
  },
  // set route for autocomplete page
  {
    path: '/autocomplete/',
    component: AutocompletePage,
  },
  {
    path: '/notification/',
    component: NotificationPage,
  },
  {
    path: '/own-profile/',
    component: OwnProfilePage,
  },
  {
    path: '/explore/',
    component: ExplorePage,
  },
  {
    path: '/project/',
    component: ProjectPage, 
  },
  {
    path: '/comment/',
    component: CommentPage, 
  },
  {
    path: '/interested-helper/',
    component: InterestedHelper, 
  },
  {
    path: '/chat/',
    component: Chat, 
  },
  {
    path: '/review/',
    component: ReviewPage, 
  },
  {
    path: '/profile-helper/',
    component: ProfileHelperPage, 
    name: 'profile-helper',
  },
  {
    path: '/profile-gallery/',
    component: ProfileGalleryPage, 
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
];

export default routes;
