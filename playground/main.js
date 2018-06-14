import Vue from 'vue'
import App from './App.vue'
import Banshee from '../src/'

Vue.config.productionTip = false

Vue.use(Banshee)

new Vue({
  render: h => h(App)
}).$mount('#app')
