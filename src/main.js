import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic.css')
require('semantic-ui-css/semantic.js')

// Add font-awesome icons


new Vue({
  render: h => h(App),
}).$mount('#app')
