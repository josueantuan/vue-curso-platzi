import Vue from 'vue'
import App from './App.vue'
import EventBus from './plugins/event-bus'
import VueRouter from 'vue-router'
import Routes from './routes/routes'
Vue.use(VueRouter)
Vue.use(EventBus)
Vue.config.productionTip = false

const Router = VueRouter({ Routes })

new Vue({
  render: h => h(App),
  Router
}).$mount('#app')
