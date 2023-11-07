// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
import Vue from 'vue'
import App from './App.vue'
import VueSpeech from 'vue-web-speech'

Vue.use(VueSpeech)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')