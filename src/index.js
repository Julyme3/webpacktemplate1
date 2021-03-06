import Vue from 'vue'
import App from './components/App.vue'
//import Home from './components/Home.vue'
// import SecretQuote from './components/SecretQuote.vue'
// import Signup from './components/Signup.vue'
// import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()
// 
// router.map({
//   '/home': {
//     component: Home
//   }
// })

router.start(App, '#app')

new Vue({
  el: '#app',
  render: h => h(App)
})
