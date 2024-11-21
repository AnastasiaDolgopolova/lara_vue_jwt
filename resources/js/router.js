import * as VueRouter from "vue-router";


const route = VueRouter.createRouter ({

    history: VueRouter.createWebHistory('/'),
    routes: [
        {
            path: '/fruits',
            component: () => import('./components/Fruit/IndexComponent.vue'),
            name: 'fruit.index'
        },
        {
            path: '/users/login',
            component: () => import('./components/User/LoginComponent.vue'),
            name: 'user.login'
        },
        {
            path: '/users/register',
            component: () => import('./components/User/RegisterComponent.vue'),
            name: 'user.register'
        },
        {
            path: '/users/personal',
            component: () => import('./components/User/PersonalComponent.vue'),
            name: 'user.personal'
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./components/User/404Component.vue'),
            name: '404'
        }

    ],
})
route.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token');

    if(!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.register' && accessToken) {
        return next({
            name: 'user.personal'
        })
    }
    next()
})
export default route;
