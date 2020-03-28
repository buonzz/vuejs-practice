import Home from './components/pages/Home.vue'
import Posts from './components/pages/Posts.vue'
import Contact from './components/pages/Contact.vue'
import NotFound from './components/pages/NotFound.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/posts', component: Posts },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
]
  
const router = new VueRouter({
    routes
})

export default router