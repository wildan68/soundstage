import '@/@iconify/icons-bundle'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// base css
import '@/assets/base.css'

// Vuetify
import vuetify from '@/plugins/vuetify'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(vuetify)

app.mount('#app')
