import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import History from './components/history.vue'
import Login from './components/Login.vue'
import Signin from './components/Signin.vue'
import store from './store/index.js'
import Tes from './components/sidebar.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'History',
        path: '/history',
        component: History
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Signin',
        path: '/signin',
        component: Signin
    },
    {
        name: 'tes',
        path: '/tes',
        component: Tes
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')
