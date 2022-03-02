import homePage from './pages/home-page.cmp.js';
import keepApp from './apps/keep/pages/note-app.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        // path: '/about',
        // component: aboutPage,
    },
    {
        path: '/keep',
        component: keepApp,
        // children: [
        //     {
        //         path: '',
        //         component: 
        //     },
        //     ]
    },

];
















export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});