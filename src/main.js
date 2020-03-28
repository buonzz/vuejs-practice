import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/pages/Home.vue'
import Posts from './components/pages/Posts.vue'
import Contact from './components/pages/Contact.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/home', component: Home },
  { path: '/posts', component: Posts },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
