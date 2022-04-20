import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
//windicss
import 'virtual:windi.css'
createApp(App)
    .use(router)
    .mount('#app')
