import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource);

// Custom Directives...
// registering directives globally so that all components can use this directive...
// if 'v-rainbow' directive is attached to any HTML element then this functionality
// will be attached with that HTML element...
Vue.directive('rainbow', {
    // bind is a lifecycle hook which is fired when the directive gets
    // attached to a HTML element...
    // 'el' is the element with which the directive is attached to...
    // 'binding' is a object which holds the information about the directive
    // we can access values, args of the directive using this 'binding'...
    bind(el, binding, vnode) {
        // giving random colors to all the article title...
        el.style.color = '#' + Math.random().toString().slice(2,8);
    }
});

Vue.directive('theme', {
    bind(el, binding, vnode) {
        if(binding.value == 'wide') {
            el.style.maxWidth = '1200px';
        }
        if(binding.value == 'narrow') {
          el.style.maxWidth = '560px';
        }
        if(binding.arg == 'column') {
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

export const bus = new Vue();

new Vue({
  render: h => h(App)
}).$mount('#app')
