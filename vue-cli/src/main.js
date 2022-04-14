import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 아래의 코드와 동일함
// new Vue({
//   el: '#app', // .$mount('#app')과 동일한 역할 수행
//   render: h => h(App),
// })