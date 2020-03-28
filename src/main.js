import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'

// import layouts

import TwoColumnSideBar from './components/layouts/TwoColumnSideBar.vue'
import OneColumnSideBar from './components/layouts/OneColumnSideBar.vue'

Vue.component('two-column-sidebar-layout', TwoColumnSideBar)
Vue.component('one-column-sidebar-layout', OneColumnSideBar)

Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
