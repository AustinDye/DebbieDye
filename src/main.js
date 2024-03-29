import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { bart } from './utils/ScrollAnimate'
import { router } from './router'

const root = createApp(App)

root.directive('scrollanimation', bart)
registerGlobalComponents(root)


root
  .use(router)
  .mount('#app')
