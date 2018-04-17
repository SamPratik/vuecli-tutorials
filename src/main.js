import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Creating a event bus. a component will fire an event on a bus and another
// component will listen to that event on that bus...
export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
