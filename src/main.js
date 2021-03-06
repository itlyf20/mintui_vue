import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(Mint)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
