import { createApp } from 'vue'
import App from './App.vue'
import Ysjx from '../packages'
import test from 'ysjx-ui'
console.log(test)
createApp(App)
  .use(Ysjx)  
  .mount('#app')
