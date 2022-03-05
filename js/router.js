import homePage from "./pages/home-page.cmp.js";
import mailApp from "./apps/mail/pages/mail-app.cmp.js";
import mailDetails from "./apps/mail/pages/mail-details.cmp.js";
import noteApp from "./apps/keep/pages/note-app.cmp.js"
import aboutPage from "./pages/about-page.cmp.js";
const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/about",
    component: aboutPage,
  },
  {
    path: "/mail",
    component: mailApp,
  },
  {
    path: "/mail/:mailId",
    component: mailDetails,
  },
  {
    path: "/note",
    component: noteApp,
  },
  // {
  //     path: '/book',
  //     component: bookApp
  // },
  // {
  //     path: '/book/:bookId',
  //     component: bookDetails
  // },
];

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
});
