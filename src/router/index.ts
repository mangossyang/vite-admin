import { createRouter, createWebHistory } from 'vue-router'
import layoutRoutes from './autoLoad'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/admin.vue'),
            // children: [
            //     {
            //         path: '/',
            //         component: () => import('views/admin/Home.vue'),
            //     }
            // ]
        },
        {
            path: '/hello',
            component: () => import('../components/HelloWorld.vue')
        },
        ...layoutRoutes
    ]
})

export default router