// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueRouter from 'vue-router'

import VueFire from 'vuefire'

import App from './App'
import Cadastrados from './components/cadastrados.vue'


Vue.use(vueRouter)
Vue.use(VueFire)

const routes = [
  {path: '/cadastrados', component: Cadastrados}
]

const router = new vueRouter({
  routes
})


new Vue({
 router,
 render: (h) => h(App)
}).$mount('#app')
