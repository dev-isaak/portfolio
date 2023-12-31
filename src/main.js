import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#0f172a',
          secondary: '#80CBC4',
          lightBlue: '#94a3b8',
        }
      }
    }
  },
})

import App from './App.vue'

AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
