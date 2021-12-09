
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import NotificationPage from '../pages/notification.vue';
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';
import ExplorePage from '../pages/explore.vue';
import ProjectPage from '../pages/project.vue';
import CommentPage from '../pages/comment.vue';
import InterestedHelper from '../pages/interested-helper.vue';
// import all vue documents for new pages to this document
import AddRequestPage from '../pages/add-request.vue';
import SuitableHelperPage from '../pages/suitable-helper.vue';
import MyRequestPage from '../pages/my-request.vue';
import ToastPage from '../pages/components from f7/toast.vue';
import ChooseRequestFunctionPage from '../pages/choose-request-function.vue';
import AutocompletePage from '../pages/components from f7/autocomplete.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  // set route for add-request page
  {
    path: '/add-request/',
    component: AddRequestPage,
  },
  // set route for suitable-helper page
  {
    path: '/suitable-helper/',
    component: SuitableHelperPage,
  },
  // set route for my-request page
  {
    path: '/my-request/',
    component: MyRequestPage,
  },
  // set route for toast page
  {
    path: '/toast/',
    component: ToastPage,
  },
  // set route for choose-request-function page
  {
    path: '/choose-request-function/',
    component: ChooseRequestFunctionPage,
  },
  // set route for autocomplete page
  {
    path: '/autocomplete/',
    component: AutocompletePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/notification/',
    component: NotificationPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
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
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
