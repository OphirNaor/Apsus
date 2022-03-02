import homePage from "./pages/home-page.cmp.js";



const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        // path: '/about',
        // component: aboutPage,
    },

];
















export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});