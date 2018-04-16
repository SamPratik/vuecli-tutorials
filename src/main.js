import Vue from 'vue'
import App from './App.vue'
import Ninjas from './components/Ninjas.vue'

Vue.config.productionTip = false

// Registering 'Ninjas' component globally...
Vue.component('ninjas', Ninjas);

new Vue({
  render: h => h(App)
}).$mount('#app')
