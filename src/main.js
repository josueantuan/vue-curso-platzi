import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import routes from './routes/routes'
Vue.use(VueRouter)
Vue.use(EventBus)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
