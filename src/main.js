import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource);

// Custom Filters...
// 'value' is the data on which this filter is applied to...
// 'filter' doesn't change the real data it just chages the output on the DOM...
Vue.filter('to-uppercase', function(value) {
    return value.toUpperCase();
});

Vue.filter('snippet', function(value) {
    return value.slice(0,100) + '...';
});

export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
