import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ServiceListView from '../views/ServiceListView.vue'
import BookingView from '../views/BookingView.vue'

const routes = [
    {
        path: '/login',
        component: LoginView
    },
    {
        path: '/services',
        component: ServiceListView
    },
    {
        path: '/booking/:serviceId',
        component: BookingView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router    