import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './providers/router'
import VueTheMask from 'vue-the-mask'
import '@/assets/styles/main.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export const app = createApp(App).use(pinia).use(router).use(VueTheMask)
