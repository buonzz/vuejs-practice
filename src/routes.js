import Home from './components/pages/Home.vue'
import Posts from './components/pages/Posts.vue'
import Contact from './components/pages/Contact.vue'
import NotFound from './components/pages/NotFound.vue'
import VueRouter from 'vue-router'

const routes = [
    { 
        path: '/', component: Home,
        meta: { layout: 'one-column-sidebar'} 
    },
    { 
        path: '/home', component: Home, 
        meta: { layout: 'one-column-sidebar'}
    },
    { 
        path: '/posts', component: Posts, 
        meta: { layout: 'one-column-sidebar'}
    },
    { 
        path: '/contact', component: Contact, 
        meta: { layout: 'two-column-sidebar'}
    },
    { 
        path: '*', component: NotFound
    }
]
  
const router = new VueRouter({
    routes
})

export default router