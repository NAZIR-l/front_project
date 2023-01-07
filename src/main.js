import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/'

new Vue({
  vuetify,
  render: h => h(App)
})
createApp(App)
.use(createVuetify())
  .use(router)
  .mount('#app')

  
