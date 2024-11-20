import * as VueRouter from "vue-router";


export default VueRouter.createRouter ({

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

    ],
})
