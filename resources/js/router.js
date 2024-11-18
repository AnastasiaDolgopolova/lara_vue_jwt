import * as VueRouter from "vue-router";


export default VueRouter.createRouter ({

    history: VueRouter.createWebHistory('/'),
    routes: [
        {
            path: '/fruits',
            component: () => import('./components/Fruit/IndexComponent.vue'),
            name: 'fruit.index'
        },


    ],
})
